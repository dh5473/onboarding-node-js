require("module-alias/register");

const express = require("./loaders/express");
const loadApp = require("./loaders");

const app = express();

loadApp(app).then(() => {
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
