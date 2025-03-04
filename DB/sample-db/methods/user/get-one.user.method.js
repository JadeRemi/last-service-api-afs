const { executeQuery } = require('../../../../services/utils/execute-query');
const { formatCompanyData } = require('../../../../services/utils/format-company');


/**
 * Возвращает данные пользователя с указанными кредами.
 * @param {string} login
 * @param {string} password
 * @return {Object|null}
 */
async function getOne(login, password) {
  if (!login || !password) {
    throw new Error('Login and password are required');
  }

  const query = 'SELECT * FROM users WHERE login = $1 AND password = $2';
  const rows = await executeQuery(query, [login, password]);

  if (!rows || rows.length === 0) {
    return null;
  }


  return rows[0];


}

module.exports = { getOne };


