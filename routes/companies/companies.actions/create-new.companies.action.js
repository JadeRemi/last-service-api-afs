const logger = require("../../../services/logger.service")(module);
const { CREATED } = require("../../../constants/http-codes");
const companyMethods = require("../../../DB/sample-db/methods/company");
const { getUrlForRequest } = require("../../../helpers/url.helper");
const { parseOne } = require("../companies.service");

async function createNew(req, res) {
  logger.init("create company");
  const newCompanyData = req.body;

  const createdCompany = await companyMethods.createNew(newCompanyData);
  const photoUrl = getUrlForRequest(req);

  res.status(CREATED).json(parseOne(createdCompany, photoUrl));
  logger.success();
}

module.exports = {
  createNew,
};
