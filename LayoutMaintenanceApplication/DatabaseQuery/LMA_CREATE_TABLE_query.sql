CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    role user_role NOT NULL,
    phone VARCHAR(15) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

ALTER TABLE users
ADD COLUMN password varchar(20);

CREATE TABLE sites (
    site_id SERIAL PRIMARY KEY,
    site_type site_type NOT NULL,
    length INT NOT NULL,
    width INT NOT NULL,
    is_open BOOLEAN NOT NULL,
    owner_id INT,
    CONSTRAINT fk_site_owner
        FOREIGN KEY (owner_id)
        REFERENCES users(user_id)
        ON DELETE SET NULL
);

CREATE TABLE maintenance (
    maintenance_id SERIAL PRIMARY KEY,
    site_id INT NOT NULL,
    total_amount NUMERIC(10,2) NOT NULL,
    month VARCHAR(20) NOT NULL,
    status maintenance_status DEFAULT 'PENDING',
    CONSTRAINT fk_maintenance_site
        FOREIGN KEY (site_id)
        REFERENCES sites(site_id)
        ON DELETE CASCADE
);

CREATE TABLE payments (
    payment_id SERIAL PRIMARY KEY,
    maintenance_id INT NOT NULL,
    paid_amount NUMERIC(10,2) NOT NULL,
    payment_date DATE DEFAULT CURRENT_DATE,
    CONSTRAINT fk_payment_maintenance
        FOREIGN KEY (maintenance_id)
        REFERENCES maintenance(maintenance_id)
        ON DELETE CASCADE
);

CREATE TABLE update_request (
    request_id SERIAL PRIMARY KEY,
    site_id INT NOT NULL,
    requested_field VARCHAR(50) NOT NULL,
    old_value VARCHAR(100),
    new_value VARCHAR(100),
    status request_status DEFAULT 'PENDING',
    CONSTRAINT fk_request_site
        FOREIGN KEY (site_id)
        REFERENCES sites(site_id)
        ON DELETE CASCADE
);

---------- SELECT -------------
SELECT * FROM users;
SELECT * FROM maintenance;
SELECT * FROM payments;
SELECT * FROM sites;
SELECT * FROM update_request;
--------- DELETE --------------
DELETE FROM users;
DELETE FROM maintenance;
DELETE FROM payments;
DELETE FROM sites;
DELETE FROM update_request;
--------- INSERT --------------

INSERT INTO users VALUES (102, 'Akash Nahak', 'OWNER', '9999988888', 'ak@gmail.com');
INSERT INTO users VALUES (101, 'John Doe', 'OWNER', '9999988882', 'john@gmail.com');


