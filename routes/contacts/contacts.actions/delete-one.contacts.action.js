const logger = require("../../../services/logger.service")(module);
const { OK } = require("../../../constants/http-codes");
const contactMethods = require("../../../DB/sample-db/methods/contact");
const { NotFound } = require("../../../constants/errors");

/**
 * DELETE /contacts/:id
 * Эндпоинт для удаления контакта по идентификатору.
 * @param {Object} req
 * @param {Object} res
 * @return {Promise<void>}
 */
async function deleteOne(req, res) {
  logger.init("delete contact");
  const { id } = req.params;

  const deleted = await contactMethods.deleteOne(id);

  if (!deleted) {
    throw new NotFound("Contact not found");
  }

  res.status(OK).send();
  logger.success();
}

module.exports = {
  deleteOne,
};
