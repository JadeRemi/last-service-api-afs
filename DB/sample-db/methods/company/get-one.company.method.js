const { executeQuery } = require('../../../../services/utils/execute-query');
const { formatCompanyData } = require('../../../../services/utils/format-company');


/**
 * Возвращает данные компании с указанным идентификатором.
 * @param {string} id
 * @return {Object|null}
 */
async function getOne(id) {
  if (!id) {
    throw new Error('Company ID is required');
  }

  const query = 'SELECT * FROM companies WHERE id = $1';
  const rows = await executeQuery(query, [id]);

  if (!rows || rows.length === 0) {
    return null;
  }


  return formatCompanyData(rows[0]);


}

module.exports = { getOne };
