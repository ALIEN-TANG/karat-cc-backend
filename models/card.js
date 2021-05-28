"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ User, Transaction }) {
      this.belongsTo(User, {
        foreignKey: { type: DataTypes.UUID, allowNull: false, name: "user" },
      });
      this.hasMany(Transaction, { onDelete: "cascade" });
    }
  }
  Card.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      // [NOTE]: Probably shouldn't directly save cc; what are other options?
      number: { type: DataTypes.STRING(16), allowNull: false },
      last_four: { type: DataTypes.STRING(4), allowNull: false },
      spending_limit: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Card",
      timestamps: false,
    }
  );

  return Card;
};
