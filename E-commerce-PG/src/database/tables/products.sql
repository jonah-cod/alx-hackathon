CREATE TABLE Products (
    product_id VARCHAR(200),
    name VARCHAR(255),
    description VARCHAR(255),
    price INTEGER,
    quantity INTEGER,
    category VARCHAR(50),
    imageUrl VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE Products