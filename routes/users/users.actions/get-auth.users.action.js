const logger = require("../../../services/logger.service")(module);
const { OK } = require("../../../constants/http-codes");
const JwtService = require("../../../services/jwt.service");
const jwtConfig = require("../../../config").jwt;
const userMethods = require("../../../DB/sample-db/methods/user");
const { NotFound } = require("../../../constants/errors");

/**
 * @todo: Предполагается к удалению по факту реализации требований тестового задания.
 * GET /user/auth
 * Служебный эндпоинт для получения токена авторизации произвольного пользователя.
 * @param {Object} req
 * @param {Object} res
 * @return {Promise<void>}
 */
async function getAuth(req, res) {
  logger.init("get user auth");
  const { login, password } = req.body;

  const user = await userMethods.getOne(login, password);
  if (!user) {
    throw new NotFound("User not found");
  }

  const token = new JwtService(jwtConfig).encode(user).data;

  res.header("Authorization", `Bearer ${token}`);
  logger.success();
  return res.status(OK).json({ accessToken: token });
}

module.exports = {
  getAuth,
};
