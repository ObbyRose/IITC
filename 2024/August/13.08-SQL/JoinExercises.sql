--Join exercises
--Q3
select OrderID,CompanyName
from Orders join Customers
on Orders.CustomerID = Customers.CustomerID
where CompanyName like 'a%'

--Q4
select RegionDescription, TerritoryDescription
from Region join Territories
on Region.RegionID = Territories.RegionID

--Q5
select ProductName, UnitPrice
from products join Categories
on Products.CategoryID = Categories.CategoryID
where UnitPrice > 50

--Q6
select ProductID, UnitPrice, SupplierID, CategoryName
from Products join Categories
on Products.CategoryID = Categories.CategoryID
where SupplierID = 3

--Q7
select ProductID, UnitPrice, SupplierID, CategoryName
from Products join Categories
on Products.CategoryID = Categories.CategoryID
where CategoryName like '%a'


--Q8
select ProductName,CategoryName, CompanyName
from Products join Categories
on Products.CategoryID = Categories.CategoryID
join Suppliers
on Suppliers.SupplierID = Products.SupplierID

--Q9
select ProductName, Description,City
from Products join Suppliers
on Products.SupplierID = Suppliers.SupplierID
join Categories
on Categories.CategoryID = Products.CategoryID
where City in ('London','Tokyo')

--Q10
select ProductID,Description,Country
from Products join Categories
on Products.CategoryID = Categories.CategoryID
join Suppliers
on Suppliers.SupplierID = Products.SupplierID
where Country like 'a%'

--Q11
select CompanyName, OrderID
from Customers left join Orders
on Customers.CustomerID = Orders.CustomerID

--Q12+Q13
SELECT 
Orders.OrderID, Orders.OrderDate, Orders.ShipAddress, Customers.CustomerID, 
Customers.CompanyName, Customers.Phone, Employees.FirstName, Employees.LastName
FROM Orders JOIN Customers
ON Orders.CustomerID = Customers.CustomerID
JOIN Employees
ON Orders.EmployeeID = Employees.EmployeeID
WHERE YEAR(Orders.OrderDate) = 1996 AND (Customers.CustomerID LIKE '[AC]%' )
ORDER BY Orders.OrderDate DESC;
