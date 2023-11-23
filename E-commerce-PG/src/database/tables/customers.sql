CREATE TABLE Customers(
    customer_id VARCHAR(200),
    name VARCHAR(200),
    email VARCHAR(200),
    password VARCHAR(200),
    phone_number VARCHAR(20),
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    address VARCHAR(200)
);