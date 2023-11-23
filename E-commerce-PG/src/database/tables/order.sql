CREATE TABLE Orders (
    order_id VARCHAR(200),
    customer_id VARCHAR(200),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount INTEGER,
    status VARCHAR(50) DEFAULT 'pending',
    shipping_to VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

