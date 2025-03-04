const { check } = require("express-validator");
const { UnprocessableEntity } = require("../../constants/errors");
const validate = require("../../middleware/validation.middleware");

const getAuth = [
  check("login")
    .notEmpty()
    .withMessage({
      code: UnprocessableEntity,
      message: "login: parameter is required",
    })
    .bail()
    .isLength({ min: 2 })
    .withMessage({
      code: UnprocessableEntity,
      message: "login: must be at least 2 characters long",
    }),

  check("password")
    .notEmpty()
    .withMessage({
      code: UnprocessableEntity,
      message: "password: parameter is required",
    })
    .bail()
    .isLength({ min: 2 })
    .withMessage({
      code: UnprocessableEntity,
      message: "password: must be at least 2 characters long",
    }),

  validate,
];

module.exports = { getAuth };
