/* SQLEditor (Postgres)*/


CREATE TABLE categories
(
id SERIAL UNIQUE ,
name TEXT,
color TEXT,
CONSTRAINT categories_pkey PRIMARY KEY (id)
);

CREATE TABLE merchants
(
id SERIAL UNIQUE ,
name TEXT,
CONSTRAINT merchants_pkey PRIMARY KEY (id)
);

CREATE TABLE types
(
id SERIAL UNIQUE ,
name TEXT,
CONSTRAINT types_pkey PRIMARY KEY (id)
);

CREATE TABLE users
(
id SERIAL UNIQUE ,
email TEXT UNIQUE ,
first_name TEXT,
last_name TEXT,
CONSTRAINT users_pkey PRIMARY KEY (id)
);

CREATE TABLE transactions
(
id SERIAL UNIQUE ,
category INTEGER,
merchant INTEGER,
"user" INTEGER,
type INTEGER,
date DATE,
sum NUMERIC(12,2),
comment TEXT,
CONSTRAINT transactions_pkey PRIMARY KEY (id)
);

ALTER TABLE transactions ADD CONSTRAINT transaction_category_fk FOREIGN KEY (category) REFERENCES categories (id);

ALTER TABLE transactions ADD CONSTRAINT transaction_merchant_fk FOREIGN KEY (merchant) REFERENCES merchants (id);

ALTER TABLE transactions ADD CONSTRAINT transaction_user_fk FOREIGN KEY ("user") REFERENCES users (id);

ALTER TABLE transactions ADD CONSTRAINT transaction_type_fk FOREIGN KEY (type) REFERENCES types (id);
