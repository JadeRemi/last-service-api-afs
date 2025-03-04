const { executeQuery } = require('../../../../services/utils/execute-query'); 

/**
 * Создает новый контакт и возвращает результат.
 * @param {Object} data
 * @return {Object}
 */
async function createNew(data) {

  const newContact = {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const query = `
    INSERT INTO contacts (lastname, firstname, patronymic, phone, email, created_at, updated_at)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `;

  const values = [
    newContact.lastname,
    newContact.firstname,
    newContact.patronymic,
    newContact.phone,
    newContact.email,
    newContact.createdAt,
    newContact.updatedAt,
  ];

  const result = await executeQuery(query, values);

  return result[0];
}

module.exports = { createNew };
