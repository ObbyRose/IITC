select CategoryID,
CategoryName
from Categories
------------------------------------------------
select OrderID,
OrderDate,
CustomerID,
Freight
from Orders
------------------------------------------------
select EmployeeID,
FirstName,
LastName,
FirstName + ' ' + LastName as FullName,
City + ' ' + Country as Origin
from Employees
------------------------------------------------
select ProductID,
ProductName,
UnitPrice,
UnitPrice + 2 as NewPrice
from Products
------------------------------------------------
select OrderID,
Quantity,
Quantity + 2 as NewQuantity,
UnitPrice,
UnitPrice * 3 as NewPrice
from [Order Details]
------------------------------------------------
select * from EmployeeTerritories
select * from Territories

select Distinct EmployeeID
from EmployeeTerritories

select *
from EmployeeTerritories
where EmployeeID = 2

----------------------Q1--------------------------
select *
from Employees
----------------------Q2--------------------------
select*
from Employees
----------------------Q3--------------------------
select FirstName,
HireDate,
Region,
Country
from Employees
----------------------Q4--------------------------
select CustomerID,
OrderID,
OrderDate
from Orders
----------------------Q5--------------------------
select ProductID ProID,
ProductName ProNm,
UnitPrice UntPr
from Products
----------------------Q6--------------------------
select City Ct,
Region reg
from Employees
----------------------Q7--------------------------
select TOP (2) CustomerID,
City + ' ' + Address as FullAddress
from Customers
----------------------Q8--------------------------
select TOP (3) FirstName + ' ' + LastName as FullName,
BirthDate + 8 as [Birth Date],
ReportsTo #Manager
from Employees

----------------------Q9--------------------------
select Distinct City
from Employees
----------------------Q10--------------------------
select Distinct Country
From Employees
----------------------Q11--------------------------
select Distinct Title
from Employees
----------------------Q12--------------------------
select City,
Country
from Customers

select Distinct City, Country
from Customers
----------------------Q13--------------------------
select FirstName,
BirthDate,
BirthDate+5 as NewDate
from Employees
----------------------Q14--------------------------
select ProductName,
UnitPrice,
UnitPrice + 10 as NewPrice
from Products
----------------------Q15--------------------------
select ProductID,
ProductName,
UnitPrice,
UnitPrice * 1.165 as UnitPriceAfterRaise,
UnitsInStock,
UnitsOnOrder,
UnitsInStock - UnitsOnOrder as Intergar
from Products
----------------------Q16--------------------------
select ProductID,
ProductName,
(UnitsInStock - UnitsOnOrder) * UnitPrice as RemaningStockValue
from Products