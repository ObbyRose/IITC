--Q1
select *
from Orders
where Shipcountry = 'USA'

--Q2
select ProductName, 
UnitPrice + 9,
CategoryID
from Products
where ProductName like '%C%'

--Q3
select * 
from Categories
where CategoryID > 3
order by CategoryID desc

--Functions in SQL
select SUM(UnitPrice) as 'SUM',
MIN(UnitPrice) as 'MIN', 
MAX(UnitPrice) as 'MAX',
AVG(UnitPrice) as 'AVG',
Count (UnitPrice) as 'Count'
from Products

--Q4
select AVG(Freight) as 'AVG',
MIN(Freight) as 'Min',
MAX(Freight) as 'Max',
SUM(Freight) as 'Sum',
Count(*) as 'Count' 
from Orders

--Q5
select AVG(UnitPrice) as 'AVG',
MIN(UnitPrice) as 'Min',
MAX(UnitPrice) as 'Max',
SUM(UnitPrice) as 'Sum',
Count(*) as 'Count' 
from Products


--using Join
select ProductID,ProductName,UnitPrice,CategoryName, Description
from Products inner join Categories
on Products.CategoryID = Categories.CategoryID

--Q6
select	FirstName + ' ' + LastName as FullName,
City, orderDate, orderID
from Employees inner join Orders
on Employees.EmployeeID = Orders.EmployeeID
where  Employees.EmployeeID in (3,5,6)

--Where exercises

--Q1
select FirstName, LastName
from Employees
where EmployeeID = 3

--Q2
select ProductName, UnitPrice
from Products
where ProductID = 4

--Q3
select ProductID, ProductName, UnitPrice
from Products
where UnitPrice > 20 
order by UnitPrice asc

--Q4
select FirstName + ' ' + LastName as FullName,
BirthDate, ReportsTo
from Employees
where EmployeeID = 8

--Q5
select EmployeeID, FirstName + ' ' + LastName as FullName, City
from Employees
where City = 'London'

--Q6
select *
from Products
where UnitPrice between 50 and 100

--Q7
select ProductName,UnitPrice
from Products
where UnitPrice between 21.35 and 43.9
order by UnitPrice desc

--Q8
select EmployeeID,LastName, HireDate
from Employees
where City in ('Tacoma', 'London')

--Q9
select EmployeeID, FirstName, LastName
from Employees
where EmployeeID in (1,2,5)

--Q10
select FirstName, LastName, BirthDate
from Employees
where EmployeeID not in (4,5,7)

--Q11
select ProductID, ProductName
from Products 
where CategoryID not in (1,2,7)
order by CategoryID asc

--q12
select FirstName, Region
from Employees
where Region is null

--Q13
select top 3 ProductName, UnitPrice
from Products
order by UnitPrice desc

--Q14
select OrderID, OrderDate, RequiredDate
from Orders
where OrderDate > '1996-10-01'

--Q15
select EmployeeID, LastName, ReportsTo
from Employees
where ReportsTo is not null
--Q16
select *
from Categories
where CategoryName like '%o%'
--Q17
select CompanyName, Country
from Customers
where CompanyName like '%a'

--Q18
select ProductName, CategoryID
from Products
where ProductName like '%a_'

--Q19
select OrderID, CustomerID, EmployeeID, OrderDate
from Orders
where OrderDate between '1997-04-01' and '1997-05-31'

--Q20
select CustomerID, CompanyName, Country, Phone, Region
from Customers
where Country like '[NFG]%' and Region is null

--Q21
select EmployeeID, FirstName + ' ' + LastName as FullName,
BirthDate, Country
from Employees
where LastName like '%[DK]%' or BirthDate between '1963-01-01' and '1963-12-31'
--Q22
select ProductName, UnitPrice,SupplierID
from Products
where UnitPrice > 30 and SupplierID in (1,3)

--Q23
select OrderID, EmployeeID, OrderDate,RequiredDate,ShipName
from Orders
where EmployeeID = 7 and ShipName in ('QUICK-stop','Du mond entire','Eastern Connection') 
and RequiredDate - OrderDate > 20

--Q24
select ProductID, ProductName
from Products
where (SupplierID in (16,8,21) or UnitPrice < 10) and (UnitsInStock not between 10 and 100)
order by UnitPrice asc

-- JOIN EXERCISES

--Q1
select ProductName, CategoryName
from Products join Categories
on Products.CategoryID = Categories.CategoryID

--Q2
select ProductName, CompanyName
from Products join Suppliers
on Products.SupplierID = Suppliers.SupplierID