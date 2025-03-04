const { executeQuery } = require('../../../../services/utils/execute-query');

/**
 * Создает новую компанию и возвращает созданную запись.
 * @param {Object} data
 * @return {Object}
 */
async function createNew(data) {
  const newEntity = { ...data, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };

  const query = `
    INSERT INTO companies (
      contact_id, name, short_name, business_entity, address, contract, type, status, photos, created_at, updated_at
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *;
  `;

  const values = [
    newEntity.contactId,
    newEntity.name,
    newEntity.shortName,
    newEntity.businessEntity,
    newEntity.address,
    JSON.stringify(newEntity.contract),
    newEntity.type,
    newEntity.status,
    JSON.stringify(newEntity.photos),
    newEntity.createdAt,
    newEntity.updatedAt,
  ];

  const result = await executeQuery(query, values);

  return result[0];
}

module.exports = { createNew };

