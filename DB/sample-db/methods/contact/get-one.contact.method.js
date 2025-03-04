const { executeQuery } = require('../../../../services/utils/execute-query');
const { formatContactData } = require('../../../../services/utils/format-contact');

/**
 * Возвращает данные контакта с указанным идентификатором.
 * @param {string} id
 * @return {Object|null}
 */
async function getOne(id) {
  if (!id) {
    throw new Error('Contact ID is required');
  }

  const query = 'SELECT * FROM contacts WHERE id = $1';
  const rows = await executeQuery(query, [id]);

  if (!rows || rows.length === 0) {
    return null;
  }

  return formatContactData(rows[0]);
}

module.exports = { getOne };
