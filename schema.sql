CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products(
    item_id INTEGER AUTO_INCREMENT,
    product_name VARCHAR(30),
    department_name VARCHAR(50),
    price INTEGER,
    stock_quantity INTEGER,
    PRIMARY KEY(item_id)
);

