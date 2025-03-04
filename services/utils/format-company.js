/**
 * Нормализует данные компании перед возвратом.
 * @param {Object} company - Данные компании из БД.
 * @returns {Object} - Нормализованные данные компании.
 */
export function formatCompanyData(company) {
  return {
    id: company.id,
    contactId: company.contact_id,
    name: company.name,
    shortName: company.short_name,
    businessEntity: company.business_entity,
    contract: {
      no: company.contract_no,
      issueDate: company.contract_issue_date,
    },
    type: company.type,
    status: company.status,
    photos: company.photos ?? [],
    createdAt: company.created_at,
    updatedAt: company.updated_at,
  };
}
