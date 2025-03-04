
const logger = require("../../../services/logger.service")(module);
const { OK } = require("../../../constants/http-codes");
const companyMethods = require("../../../DB/sample-db/methods/company"); 
const { NotFound } = require("../../../constants/errors");

/**
 * DELETE /companies/:id
 * Эндпоинт для удаления компании по идентификатору.
 * @param {Object} req
 * @param {Object} res
 * @return {Promise<void>}
 */
async function deleteOne(req, res) {
  logger.init("delete company");
  const { id } = req.params;

  const deleted = await companyMethods.deleteOne(id);

  if (!deleted) {
    throw new NotFound("Company not found");
  }

  res.status(OK).send();
  logger.success();
}

module.exports = {
  deleteOne,
};
