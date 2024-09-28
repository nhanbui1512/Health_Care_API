const Joi = require("joi");
const { StatusCodes } = require("http-status-codes");

const getDataVal = async (req, response, next) => {
  try {
    const condition = Joi.object({
      deviceId: Joi.string().min(10).max(50).required().trim().strict(),
      date: Joi.date().required(),
    });

    await condition.validateAsync(req.body);
    return next();
  } catch (error) {
    return response.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      errors: error.message,
    });
  }
};

module.exports = { getDataVal };
