const { Router } = require("express");
const { findOne } = require("../controllers/card");

const router = Router();
router.get("/:cardId", findOne);

module.exports = router;
