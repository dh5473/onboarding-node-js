const express = require("express");
const promptRoutes = require("./routes/prompt");

const router = express.Router();

router.use("/prompts", promptRoutes);

module.exports = router;
