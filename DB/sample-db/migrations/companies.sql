CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    contact_id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    short_name VARCHAR(255),
    business_entity VARCHAR(255),
    contract JSONB,
    type TEXT[], 
    status VARCHAR(50),
    photos JSONB,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO companies (id, contact_id, name, short_name, business_entity, contract, type, status, photos, created_at, updated_at)
VALUES 
(12, 
  16, 
  'ООО Фирма «Перспективные захоронения»', 
  'Перспективные захоронения', 
  'ООО', 
  '{"no": "12345", "issue_date": "2015-03-12T00:00:00Z"}', 
  ARRAY['agent', 'contractor'], 
  'active', 
  '[{"name": "0b8fc462dcabf7610a91.png", "filepath": "0b8fc462dcabf7610a91.png", "thumbpath": "0b8fc462dcabf7610a91_160x160.png"}]', 
  '2020-11-21T08:03:00Z', 
  '2020-11-23T09:30:00Z'
),
(13, 
  17, 
  'ООО Фирма «Новые горизонты»', 
  'Новые горизонты', 
  'ООО', 
  '{"no": "54321", "issue_date": "2016-06-15T00:00:00Z"}', 
  ARRAY['contractor'], 
  'inactive', 
  '[{"name": "1a2b3c4d5e6f7g8h9i0j.png", "filepath": "1a2b3c4d5e6f7g8h9i0j.png", "thumbpath": "1a2b3c4d5e6f7g8h9i0j_160x160.png"}]', 
  '2021-01-10T09:00:00Z', 
  '2021-01-12T10:15:00Z'
),
(14, 
  18, 
  'ООО Фирма «Будущие проекты»', 
  'Будущие проекты', 
  'ООО', 
  '{"no": "98765", "issue_date": "2018-08-20T00:00:00Z"}', 
  ARRAY['agent'], 
  'active', 
  '[{"name": "7g6f5e4d3c2b1a0k9l8m.png", "filepath": "7g6f5e4d3c2b1a0k9l8m.png", "thumbpath": "7g6f5e4d3c2b1a0k9l8m_160x160.png"}]', 
  '2022-02-05T11:00:00Z', 
  '2022-02-06T12:30:00Z'
);