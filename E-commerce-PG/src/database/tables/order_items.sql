CREATE TABLE Order_items (
    order_item_id VARCHAR(200),
    order_id VARCHAR(200),
    product_id VARCHAR(200),
    quantity INTEGER,
    unit_price INTEGER,
    sub_total INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
