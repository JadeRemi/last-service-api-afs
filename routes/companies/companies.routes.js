const multer = require("multer");
const { Router } = require("express");
const actions = require("./companies.actions");
const validator = require("./companies.validator");
const config = require("../../config");

const fileHandler = multer({ dest: config.images.uploadsDir });

module.exports = Router()
  .get("/companies/:id", ...validator.getOne, actions.getOne)
  .get("/companies", ...validator.getMany, actions.getMany)
  .post("/companies/:id", ...validator.createNew, actions.createNew)
  .patch("/companies/:id", ...validator.editOne, actions.editOne)
  .delete("/companies/:id", ...validator.deleteOne, actions.deleteOne)
  .post(
    "/companies/:id/image",
    fileHandler.fields([{ name: "file", maxCount: 1 }]),
    ...validator.addImage,
    actions.addImage
  )
  .delete(
    "/companies/:id/image",
    ...validator.removeImage,
    actions.removeImage
  );
