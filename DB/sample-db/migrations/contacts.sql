CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    lastname VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    patronymic VARCHAR(255),
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO contacts (id, lastname, firstname, patronymic, phone, email, createdAt, updatedAt)
VALUES 
(16, 
  'Григорьев', 
  'Сергей', 
  'Петрович', 
  '79162165588', 
  'grigoriev@funeral.com', 
  '2020-11-21T08:03:26.589Z', 
  '2020-11-23T09:30:00Z'
),
(17, 
  'Иванов', 
  'Алексей', 
  'Иванович', 
  '79215673412', 
  'alexey.ivanov@example.com', 
  '2021-01-15T10:45:00Z', 
  '2021-01-16T11:15:00Z'
),
(18, 
  'Сидоров', 
  'Петр', 
  'Александрович', 
  '79267654321', 
  'p.sidorov@example.com', 
  '2022-03-12T09:00:00Z', 
  '2022-03-13T12:30:00Z'
);