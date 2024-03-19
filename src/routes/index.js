const express = require("express");
const v1ApiRouter = require("./v1");
const apiRouter = express.Router();
apiRouter.use("/v1", v1ApiRouter);

module.exports = apiRouter;
