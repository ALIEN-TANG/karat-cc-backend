const db = require("../models");
let Card = db.Card;
let Transaction = db.Transaction;
async function findOne(req, res) {
  const { cardId } = req.params;
  try {
    const card = await Card.findByPk(cardId);
    if (!card) {
      return res.status(404).json({ error: { message: "Card not found." } });
    }
    return res.status(200).json({ data: card });
  } catch (e) {
    return res.status(500).json({ error: { message: "Server error." } });
  }
}
async function getMetrics(req, res) {
  const { cardId } = req.params;
  try {
    const totalSpend = await Transaction.sum("amount", {
      where: { card: [cardId] },
    });
    const numberOfTransactions = await Transaction.count({
      where: { card: [cardId] },
    });
    const averageTransaction =
      numberOfTransactions === 0 || totalSpend === 0
        ? 0
        : totalSpend / numberOfTransactions;
    const metrics = {
      total_spend: totalSpend,
      average_transaction: averageTransaction,
    };
    return res.status(200).json({ data: metrics });
  } catch (e) {
    return res.status(500).json({ error: { message: "Server error." } });
  }
}
async function getActivity(req, res) {
  const { cardId } = req.params;
  try {
    const card = await Card.findByPk(cardId);
    const transactions = await card.getTransactions();
    if (transactions && transactions.length) {
      return res.status(200).json({ data: transactions });
    } else {
      return res.status(404).json({ error: "No transactions found." });
    }
  } catch (e) {
    return res.status(500).json({ error: { message: "Server error." } });
  }
}

module.exports = {
  findOne,
  getMetrics,
  getActivity,
};
