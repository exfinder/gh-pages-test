CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `products` VALUES (1,'Продукт 1',10.99,'Це перший продукт.'),(2,'Продукт 2',19.99,'Це другий продукт.'),(3,'Продукт 3',5.99,'Це третій продукт.');
