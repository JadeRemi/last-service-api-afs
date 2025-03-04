const { executeQuery } = require('../../../../services/utils/execute-query');
const { formatCompanyData } = require('../../../../services/utils/format-company');

/**
 * Возвращает все компании с возможностью фильтрации, сортировки и пагинации.
 * @param {Object} params
 * @param {string} [params.status] - Фильтр по статусу.
 * @param {string} [params.type] - Фильтр по типу.
 * @param {string} [params.sort] - Поле сортировки (например, "name" или "created_at").
 * @param {string} [params.order] - Порядок сортировки ("ASC" или "DESC").
 * @param {number} [params.page] - Номер страницы для пагинации.
 * @param {number} [params.limit] - Количество записей на странице.
 * @return {Promise<Array>} - Список компаний.
 */
async function getMany({ status, type, sort = 'name', order = 'ASC', page = 1, limit = 10 }) {
  if (page < 1 || limit < 1) {
    throw new Error('Page and limit must be greater than 0');
  }

  let filters = [];
  let values = [];

  if (status) {
    filters.push(`status = $${values.length + 1}`);
    values.push(status);
  }

  if (type) {
    filters.push(`type = $${values.length + 1}`);
    values.push(type);
  }

  const filterQuery = filters.length > 0 ? 'WHERE ' + filters.join(' AND ') : '';
  const sortQuery = `ORDER BY ${sort} ${order}`;
  const paginationQuery = `LIMIT $${values.length + 1} OFFSET $${values.length + 2}`;

  const query = `
    SELECT * FROM companies
    ${filterQuery}
    ${sortQuery}
    ${paginationQuery};
  `;

  values.push(limit, (page - 1) * limit);

  const rows = await executeQuery(query, values);

  return rows.map(formatCompanyData);
}

module.exports = { getMany };

