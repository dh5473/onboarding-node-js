const { connectDB } = require("./prisma");
const expressLoader = require("./express");

async function loadApp(app) {
  await connectDB();
  expressLoader(app);
}

module.exports = loadApp;
