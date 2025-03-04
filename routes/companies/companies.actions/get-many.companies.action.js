const logger = require("../../../services/logger.service")(module);
const { OK } = require("../../../constants/http-codes");
const companyMethods = require("../../../DB/sample-db/methods/company");
const httpCodes = require("../../../constants/http-codes");

/**
 * GET /companies
 * Эндпоинт для получения списка компаний с фильтрацией, сортировкой и пагинацией.
 * @param {Object} req
 * @param {Object} res
 * @return {Promise<void>}
 */
async function getMany(req, res) {
  logger.init("get many companies");

  const { phone, email, sort, order, page, limit } = req.params;

  try {
    const companies = await companyMethods.getMany({
      phone,
      email,
      sort,
      order,
      page: parseInt(page, 10) || 1,
      limit: parseInt(limit, 10) || 10,
    });

    res.status(OK).json(companies);
    logger.success();
  } catch (error) {
    logger.error("Error while fetching companies", error);
    res.status(httpCodes.INTERNAL_ERROR).send({ error: "Internal Server Error" });
  }
}

module.exports = {
  getMany,
};
