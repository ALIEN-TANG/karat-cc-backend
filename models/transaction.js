"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate({ Card }) {
      this.belongsTo(Card, {
        foreignKey: { type: DataTypes.UUID, allowNull: false, name: "card" },
      });
    }
  }
  Transaction.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      // [NOTE]: Probably shouldn't directly save cc; what are other options?
      amount: { type: DataTypes.DECIMAL(15, 2), allowNull: false },
      status: {
        type: DataTypes.ENUM("pending", "approved", "declined"),
        allowNull: false,
      },
      merchant: DataTypes.STRING,
      category: DataTypes.STRING,
      created_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Transaction",
      timestamps: false,
    }
  );
  return Transaction;
};
