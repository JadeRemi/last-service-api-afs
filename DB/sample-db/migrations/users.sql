CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    login VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL, -- this pass must be salted in prod
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, login, password)
VALUES
('J Norah', 'norahj', 'password'),
('Alice Johnson', 'alice_j', 'password123'),
('Bob Smith', 'bob_smith', 'securepass456'),
('Charlie Brown', 'charlie_b', 'charlie2022'),
('David Miller', 'david_m', 'mypass789'),
('Emily Davis', 'emily_d', 'emilysecure');