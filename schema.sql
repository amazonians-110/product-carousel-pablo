

CREATE TABLE products (
  id          INT     PRIMARY KEY,
  name        VARCHAR(128),
  price       INT,
  avg_review  INT,
  is_prime    BOOLEAN,
  cat_name    VARCHAR(128),
  man_name    VARCHAR(64)
);

CREATE TABLE related_items (
  product_id1    INT,
  product_id2    INT
);

INSERT INTO products
  (id, name, price, avg_review, is_prime, cat_name, man_name)
VALUES
  (01, 'laptop', 399.99, 4.2, true, 'Electronics', 'Dell'),
  (02, 'phone', 749.99, 3.5, false, 'Electronics', 'Huawei');
