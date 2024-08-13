-- SUBQuaries exercises
--Q1
SELECT ProductName, UnitPrice
FROM Products
WHERE  UnitPrice < (SELECT UnitPrice
		             FROM Products
		             WHERE ProductID =8)

--Q2
SELECT ProductName, UnitPrice
FROM Products
WHERE UnitPrice > (SELECT UnitPrice 
                   FROM Products 
                   WHERE ProductName like 'Tofu')

--Q3
SELECT FirstName, HireDate
FROM Employees
WHERE HireDate > (SELECT HireDate
                  FROM Employees
				  WHERE EmployeeID = 6)

--Q4
SELECT ProductID, ProductName, UnitPrice
FROM Products
WHERE UnitPrice > (SELECT AVG(UnitPrice) as AvgPrice
                   FROM Products)

--Q5
SELECT ProductName, UnitsInStock
FROM Products
WHERE UnitsInStock < (SELECT MIN(UnitsInStock)
                      FROM Products
					  WHERE CategoryID = 5)

--Q6
SELECT *
FROM Products
WHERE CategoryID = (SELECT CategoryID
                    FROM Products
					WHERE ProductName = 'Chai')
and ProductName <> 'Chai'

--Q7
SELECT ProductName, UnitPrice, CategoryID
FROM Products
WHERE UnitPrice in (SELECT UnitPrice
                   FROM Products
				   WHERE CategoryID = 5)

--Q8
SELECT ProductName, UnitPrice
FROM Products
WHERE UnitPrice > any (SELECT UnitPrice
                   FROM Products
				   WHERE CategoryID = 5)

--Q9
SELECT  productName , UnitPrice
FROM products
WHERE unitPrice > all (SELECT unitPrice
			           FROM products
                       WHERE categoryID = 5)

--Q10
SELECT OrderID, OrderDate
FROM Orders
WHERE CustomerID IN (SELECT CustomerID 
			         FROM customers 
			         WHERE country IN('germany','France','sweden'))
AND YEAR(OrderDate) = 1997

--Q11
SELECT ProductName,ProductID
FROM products
WHERE UnitPrice > (SELECT AVG(UnitPrice) 
		           FROM products 
			       WHERE UnitsInStock>50)

--Q12
SELECT ProductName
FROM products
WHERE CategoryID IN (SELECT CategoryID
			         FROM categories 
			         WHERE CategoryName IN ('Beverages','Condiments'))
AND SupplierID IN (	SELECT SupplierID
			FROM suppliers 
			WHERE region IS NULL)

--Q13
SELECT CompanyName
FROM Suppliers
WHERE SupplierID IN (SELECT SupplierID
                     FROM Products
					 WHERE CategoryID = (SELECT CategoryID
					                     FROM Categories
										 where CategoryName = 'Beverages'))
