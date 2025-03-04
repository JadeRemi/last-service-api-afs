const { Router } = require("express");
const actions = require("./contacts.actions");
const validator = require("./contacts.validator");

module.exports = Router()
  .get("/contacts/:id", ...validator.getOne, actions.getOne)
  .post("/contacts/:id", ...validator.createNew, actions.createNew)
  .patch("/contacts/:id", ...validator.editOne, actions.editOne);
