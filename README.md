## Добавлена  зависимость  H2 в pom.xml. 
## Создан файл ata.sql для добавления начальных данных.
## Вы можете запустить приложение и начать писать SQL-запросы.
## Для этого удобно использовать консоль H2, которую можно открыть по адресу [http://localhost:8080/h2-console].

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