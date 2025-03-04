const { executeQuery } = require('../../../../services/utils/execute-query');
const { formatContactData } = require('../../../../services/utils/format-contact');

/**
 * Возвращает все контакты с возможностью фильтрации, сортировки и пагинации.
 * @param {Object} params
 * @param {string} [params.phone] - Фильтр по номеру телефона.
 * @param {string} [params.email] - Фильтр по email.
 * @param {string} [params.sort] - Поле сортировки (например, "lastname" или "created_at").
 * @param {string} [params.order] - Порядок сортировки ("ASC" или "DESC").
 * @param {number} [params.page] - Номер страницы для пагинации.
 * @param {number} [params.limit] - Количество записей на странице.
 * @return {Promise<Array>} - Список контактов.
 */
async function getMany({ phone, email, sort = 'lastname', order = 'ASC', page = 1, limit = 10 }) {
  if (page < 1 || limit < 1) {
    throw new Error('Page and limit must be greater than 0');
  }

  let filters = [];
  let values = [];

  if (phone) {
    filters.push(`phone = $${values.length + 1}`);
    values.push(phone);
  }

  if (email) {
    filters.push(`email = $${values.length + 1}`);
    values.push(email);
  }

  const filterQuery = filters.length > 0 ? 'WHERE ' + filters.join(' AND ') : '';
  const sortQuery = `ORDER BY ${sort} ${order}`;
  const paginationQuery = `LIMIT $${values.length + 1} OFFSET $${values.length + 2}`;

  const query = `
    SELECT * FROM contacts
    ${filterQuery}
    ${sortQuery}
    ${paginationQuery};
  `;

  values.push(limit, (page - 1) * limit);

  const rows = await executeQuery(query, values);

  return rows.map(formatContactData);
}

module.exports = { getMany };
