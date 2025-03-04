/**
 * Нормализует данные контакта перед возвратом.
 * @param {Object} contact - Данные контакта из БД.
 * @returns {Object} - Нормализованные данные контакта.
 */
export function formatContactData(contact) {
    return {
      id: contact.id,
      lastname: contact.lastname,
      firstname: contact.firstname,
      patronymic: contact.patronymic || null,
      phone: contact.phone,
      email: contact.email,
      createdAt: contact.createdAt,
      updatedAt: contact.updatedAt,
    };
  }