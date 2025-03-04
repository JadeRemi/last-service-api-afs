const logger = require("../../../services/logger.service")(module);
const { OK } = require("../../../constants/http-codes");
const contactMethods = require("../../../DB/sample-db/methods/contact"); 
const httpCodes = require("../../../constants/http-codes");

/**
 * GET /contacts
 * Эндпоинт для получения списка контактов с фильтрацией, сортировкой и пагинацией.
 * @param {Object} req
 * @param {Object} res
 * @return {Promise<void>}
 */
async function getMany(req, res) {
  logger.init("get many contacts");

  const { phone, email, sort, order, page, limit } = req.params;

  try {
    const contacts = await contactMethods.getMany({
      phone,
      email,
      sort,
      order,
      page: parseInt(page, 10) || 1,
      limit: parseInt(limit, 10) || 10,
    });

    res.status(OK).json(contacts);
    logger.success();
  } catch (error) {
    logger.error("Error while fetching contacts", error);
    res.status(httpCodes.INTERNAL_ERROR).send({ error: "Internal Server Error" });
  }
}

module.exports = {
  getMany,
};
