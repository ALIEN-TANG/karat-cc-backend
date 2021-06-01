const { Router } = require("express");
const { findOne, getMetrics, getActivity } = require("../controllers/card");

const router = Router();
router.get("/:cardId", findOne);
router.get("/:cardId/metrics", getMetrics);
router.get("/:cardId/activity", getActivity);

module.exports = router;
