const db = require("../models");
let Card = db.Card;
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

module.exports = {
  findOne,
};
