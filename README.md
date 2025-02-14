- Добавлена  зависимость  H2 в pom.xml. 
- Создан файл ata.sql для добавления начальных данных.
- Вы можете запустить приложение и начать писать SQL-запросы.
- Для этого удобно использовать консоль H2, которую можно открыть по адресу http://localhost:8080/h2-console

1. SELECT
- выводим поля `id`, `name` из таблицы `good`, где `count` = 0
```bash
SELECT id, name
FROM good
WHERE count = 0;
```
- выводим все поля, кроме тех, где статус заказа не равен 'NEW'
```bash
SELECT *
FROM orders
WHERE status_id != (SELECT id FROM order_status WHERE code = 'NEW');
```

- фильтрация по дате
```bash
SELECT *
FROM orders
WHERE creation_date BETWEEN '2023-01-01' AND '2023-12-31';
```
2. LIKE (оператор сравнения с масками)
- находим все записи, в которых имя начинается с 'J'
```bash
SELECT *
FROM users
WHERE name LIKE 'J%';
```
- выводим все записи, содержащие слово 'чай' в имени товара
```bash
SELECT *
FROM good
WHERE name LIKE '%чай%';
```
3. NULL
- выбираем категории без родительской категории
```bash
SELECT *
FROM good_category
WHERE parent_id IS NULL;
```
4. IN/OR/AND
- выбираем товары, относящиеся к категориям 1, 2 или 3
```bash
   SELECT *
   FROM good
   WHERE category_id IN (1, 2, 3);
   ```
- выбираем товары, цена которых больше 500 или меньше 200
```bash
SELECT *
FROM good
WHERE price > 500 OR price < 200;
```
- выбираем товары, цена которых больше 300 и количество больше 50
```bash
SELECT *
FROM good
WHERE price > 300 AND count > 50;
```
   5. ORDER BY
- сортируем товары по возрастанию цены
```bash
   SELECT *
   FROM good
   ORDER BY price ASC;
   ```
- сортируем товары по убыванию количества
```bash
   SELECT *
   FROM good
   ORDER BY count DESC;
   ```
- множественная сортировка: сначала по цене, затем по количеству
```bash
   SELECT *
   FROM good
   ORDER BY price, count;
   ```
6. LIMIT/OFFSET
- ограничиваем результат до первых 100 записей
```bash
   SELECT *
   FROM good
   LIMIT 100;
   ```
- постраничная навигация: пропускаем первые 10 записей, берем следующие 20
```bash
   SELECT *
   FROM good
   LIMIT 10 OFFSET 20;
```
7. Оператор JOIN
- Получение списка товаров вместе с категориями тот запрос объединяет таблицу good с таблицей good_category по полю category_id. В результате вы получите список всех товаров с указанием их категорий.
```bash
   SELECT g.id AS good_id, g.name AS good_name, gc.name AS category_name
   FROM good g
   JOIN good_category gc ON g.category_id = gc.id;
```
- Список заказов с именами пользователей
```bash
   SELECT o.id AS order_id, u.name AS user_name, os.code AS status_code
   FROM orders o
   JOIN users u ON o.user_id = u.id
   JOIN order_status os ON o.status_id = os.id;
 ```
- 8. Оператор SQL GROUP BY Функции SQL COUNT(),  AVG() и SUM()

- Среднее значение цены товаров в каждой категории:
```bash
   SELECT category_id, AVG(price) AS average_price
   FROM good
   GROUP BY category_id;
   ```

-  Суммарная стоимость всех товаров в каждой категории:
```bash
   SELECT category_id, SUM(price) AS total_value
   FROM good
   GROUP BY category_id;
  ```
-  Количество уникальных товаров в каждой категории:
```bash
   SELECT category_id, COUNT(DISTINCT name) AS unique_items
   FROM good
   GROUP BY category_id;
```
-  Этот запрос объединяет несколько агрегатных функций для получения сразу трёх показателей: общего количества товаров, общей суммы стоимости и средней цены в каждой категории.
```bash
   SELECT category_id,
   COUNT(*) AS total_items,
   SUM(price) AS total_value,
   AVG(price) AS average_price
   FROM good
   GROUP BY category_id;
 ```
- 9. Оператор UNION позволяет объединить результаты двух или более SQL-запросов, формируя единый набор данных. Он принимает два или более запроса, объединяет их результаты и возвращает общий набор данных. При использовании оператора UNION действуют следующие правила:
    

 - Предположим, нам нужно выбрать товары с низкой и высокой ценой. Мы можем использовать оператор UNION, чтобы объединить два запроса: первый запрос выбирает товары с минимальной ценой, а второй — с максимальной ценой.
 ```bash
 SELECT 'low_price', category_id, name
    FROM good
    WHERE price = (SELECT MIN(price) FROM good)
    UNION ALL
    SELECT 'high_price', category_id, name
    FROM good
    WHERE price = (SELECT MAX(price) FROM good);
    Этот запрос выбирает товары с минимальной ценой и добавляет метку low_price, а затем выбирает товары с максимальной ценой и добавляет метку high_price. Оба запроса объединяются в один набор данных.
    Пример 2: Объединение товаров с разными категориями
    Допустим, нам нужно объединить товары из двух разных категорий. Мы можем использовать оператор UNION, чтобы объединить два запроса: первый запрос выбирает товары из одной категории, а второй — из другой.
    SELECT category_id, name
    FROM good
    WHERE category_id = 1
    UNION ALL
    SELECT category_id, name
    FROM good
    WHERE category_id = 2;   
```

 