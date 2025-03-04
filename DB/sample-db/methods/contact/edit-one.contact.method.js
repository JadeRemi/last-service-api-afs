const { getOne } = require("./get-one.contact.method");
const { executeQuery } = require('../../../../services/utils/execute-query'); 

/**
 * Редактирует данные контакта с указанным идентификатором
 * и возвращает результат.
 * @param {string} id
 * @param {Object} data
 * @return {Object}
 */
async function editOne(id, data) {
  const foundEntity = await getOne(id);

  if (!foundEntity) {
    throw new Error('Contact not found');
  }

  const updated = { ...foundEntity, ...data, updatedAt: new Date().toISOString() };

  const query = `
    UPDATE contacts
    SET
      lastname = $1,
      firstname = $2,
      patronymic = $3,
      phone = $4,
      email = $5,
      updated_at = $6
    WHERE id = $7
    RETURNING *;
  `;

  const values = [
    updated.lastname,
    updated.firstname,
    updated.patronymic,
    updated.phone,
    updated.email,
    updated.updatedAt,
    id,
  ];

  const result = await executeQuery(query, values);

  return result[0];
}

module.exports = { editOne };
