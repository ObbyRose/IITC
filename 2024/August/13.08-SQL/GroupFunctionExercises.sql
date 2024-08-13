--Group functions exercises

--Q1
SELECT MIN(LastName) AS SmallestLastName
FROM Employees;

--Q2
select MAX(FirstName) as BigFirstName
from Employees

--Q3
select Count(*) as NumberOfCollums
from Employees

--Q4
select Count(Region) as RegionNumber
from Employees

--Q5
select AVG(UnitPrice) as AvgPrice
from Products

--Q6
select MAX(UnitPrice) as MaxPrice, AVG(UnitPrice) as AvgPrice
from Products

--Q7
select FORMAT(MIN(BirthDate), 'dd MMM yyyy') as Earliest ,
FORMAT(MAX(BirthDate), 'dd MMM yyyy') as Latest
from Employees

--Q8
select COUNT(Distinct CustomerID) as CustomerCount
from Customers

--Q9
select COUNT(Distinct CustomerID) as CustomerCount
from Orders

--Q10
select MIN(UnitPrice) as LowestPrice,
MAX(UnitPrice) as HighestPrice,
AVG (UnitPrice) as AvgPrice
from Products
Group by CategoryID

--Q11
select MAX(UnitPrice) as HighestPrice, SupplierID
from Products
Group by SupplierID
order by SupplierID desc

--Q12
select AVG(UnitsInStock) as AvgStock 
from Products
group by SupplierID
order by AvgStock desc

--Q13
select Country, City, Count(*) as customerCount
from Customers
group by Country, City
order by Country, City

--Q14
select AVG(UnitPrice) as AvgPrice
from Products
where UnitPrice > 40
group by CategoryID

--Q15
select Count(*) as CustomerCountByCity, City
from Customers
where City like 'London'
group by City

--Q16
select MIN(UnitPrice) as LowestPrice,
MAX(UnitPrice) as HighestPrice,
AVG (UnitPrice) as AvgPrice,
Count (ProductID) as ProductCount
from Products
group by CategoryID,SupplierID

--Q17
select MAX(UnitPrice) as maxPrice
from Products
Group by CategoryID
having MAX(UnitPrice) > 40

--Q18
select AVG(UnitPrice) as AvgPrice
from Products
Group by SupplierID
having AVG(UnitPrice) > 40

--Q19
select SUM(UnitsOnOrder) as TotalOrdered, SUM(UnitsInStock) as TotalStock, CategoryName
from Products join Categories
on Products.CategoryID = Categories.CategoryID
group by Categories.CategoryID, Categories.CategoryName
having Categories.CategoryName like '%C%' and SUM(UnitsOnOrder) > 100
order by Categories.CategoryName asc

--Q20
SELECT Region, City, COUNT(*) AS CustomerCount
FROM Customers
WHERE (City LIKE '%[ML]%')
  AND Region IS NOT NULL
GROUP BY Region, City
HAVING COUNT(*) >= 2
ORDER BY Region, City;

--Q21
SELECT e.LastName AS EmployeeName,
COUNT(o.OrderID) AS TotalOrders, 
MAX(o.OrderDate) AS LastOrderDate
FROM Employees e JOIN Orders o 
ON e.EmployeeID = o.EmployeeID
GROUP BY e.LastName
HAVING COUNT(o.OrderID) > 100
ORDER BY e.LastName;
