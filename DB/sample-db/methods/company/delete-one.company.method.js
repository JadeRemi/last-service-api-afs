const { executeQuery } = require('../../../../services/utils/execute-query'); 

/**
 * Удаляет компанию по идентификатору и возвращает результат.
 * @param {string} id
 * @return {boolean} 
 */
async function deleteOne(id) {
  const query = `
    DELETE FROM companies
    WHERE id = $1
    RETURNING *;
  `;

  const values = [id];

  const result = await executeQuery(query, values);

  if (result?.length === 0) {
    return false;
  }

  return true;
}

module.exports = { deleteOne };

