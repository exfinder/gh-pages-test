CREATE TABLE Users (
    user_id INT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE Products (
    product_id INT PRIMARY KEY,
    name VARCHAR(255),
    brand VARCHAR(255),
    description TEXT,
    price DECIMAL(10, 2),
    size VARCHAR(50),
    category VARCHAR(255)
);

CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    order_date TIMESTAMP,
    order_status VARCHAR(50),
    total_amount DECIMAL(10, 2),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Order_Items (
    order_item_id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

CREATE TABLE Clothing_Sizes (
    size_id INT PRIMARY KEY,
    clothing_type VARCHAR(255),
    size_value VARCHAR(50)
);

-- Test data

INSERT INTO Clothing_Sizes (size_id, clothing_type, size_value) VALUES
(1, 'Футболка', 'S'),
(2, 'Футболка', 'M'),
(3, 'Футболка', 'L'),
(4, 'Сукня', 'S'),
(5, 'Сукня', 'M'),
(6, 'Сукня', 'L'),
(7, 'Штани', '32'),
(8, 'Штани', '34'),
(9, 'Штани', '36');

INSERT INTO Users (user_id, name, email, password) VALUES
(1, 'Іван Іваненко', 'ivan@example.com', 'password1'),
(2, 'Петро Петренко', 'petro@example.com', 'password2'),
(3, 'Олена Олененко', 'olena@example.com', 'password3');

INSERT INTO Products (product_id, name, brand, description, price, size, category) VALUES
(1, 'Футболка Basic', 'BrandA', 'Зручна чоловіча футболка', 199.99, 'M', 'Одяг'),
(2, 'Джинси Classic', 'BrandB', 'Стандартні чоловічі джинси', 599.99, '32', 'Одяг'),
(3, 'Сукня Summer', 'BrandC', 'Літня сукня для жінок', 799.99, 'S', 'Одяг');

INSERT INTO Orders (order_id, user_id, order_date, order_status, total_amount) VALUES
(1, 1, '2024-02-01 10:00:00', 'Нове', 799.98),
(2, 2, '2024-02-02 15:30:00', 'В обробці', 199.99),
(3, 3, '2024-02-03 12:45:00', 'Доставлено', 599.99);

INSERT INTO Order_Items (order_item_id, order_id, product_id, quantity) VALUES
(1, 1, 1, 2),
(2, 2, 1, 1),
(3, 3, 2, 1);
