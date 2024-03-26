const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class InternalServerError extends BaseError {
  constructor() {
    super(
      "InternalServerError",
      StatusCodes.INTERNAL_SERVER_ERROR,
      `Something went wrong`,
      {}
    );
  }
}

module.exports = InternalServerError;
