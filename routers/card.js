const { Router } = require("express");
const { findOne, getMetrics } = require("../controllers/card");

const router = Router();
router.get("/:cardId", findOne);
router.get("/:cardId/metrics", getMetrics);

module.exports = router;
