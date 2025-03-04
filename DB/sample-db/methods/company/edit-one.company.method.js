const { getOne } = require("./get-one.company.method");
const { executeQuery } = require('../../../../services/utils/execute-query');

/**
 * Редактирует данные компании с указанным идентификатором
 * и возвращает результат.
 * @param {string} id
 * @param {Object} data
 * @return {Object}
 */
async function editOne(id, data) {
  const foundEntity = await getOne(id);
  
  if (!foundEntity) {
    throw new Error('Company not found');
  }

  const updated = { ...foundEntity, ...data, updatedAt: new Date().toISOString() };

  const query = `
    UPDATE companies
    SET
      name = $1,
      short_name = $2,
      business_entity = $3,
      contract = $4,
      type = $5,
      status = $6,
      photos = $7,
      updated_at = $8,
      address = $9
    WHERE id = $10
    RETURNING *;
  `;

  const values = [
    updated.name,
    updated.shortName,
    updated.businessEntity,
    JSON.stringify(updated.contract),
    updated.type,
    updated.status,
    JSON.stringify(updated.photos),
    updated.updatedAt,
    updated.address,
    id,
  ];

  const result = await executeQuery(query, values);

  return result[0];
}

module.exports = { editOne };
