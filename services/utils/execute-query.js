
const logger = require("../logger.service")(module);
const { sampleDB } = require("../../services/database.service");

/**
 * Выполняет запрос к базе данных и возвращает результат.
 * @param {Database} db - Экземпляр класса базы данных.
 * @param {string} query - SQL-запрос.
 * @param {Array} params - Параметры для SQL-запроса.
 * @returns {Object|null} - Результат запроса.
 */
async function executeQuery(query, params = []) {
  try {
    const result = await sampleDB.query(query, params);

    if (result.rows.length === 0) {
      return null; 
    }

    return result.rows;
  } catch (error) {
    logger.error(`Database query failed: ${error.message}`);
    throw new Error('Database query failed');
  }
}


module.exports = {
  executeQuery,
};