--FUNCTIONS
--Q1
-- AVG() MIN() MAX() SUM() COUNT() GROUP_CONCAT()

--Q2
-- if the data base does infact exists the sheilta should be working with no problem and will count the amount of lastnames exluding NULL

--Q3
-- The function will not work due to LASTNAME being a string or a varchar and SUM is used to sum Intergar Values and Numbers

--Q4
-- It will count every row that is not NULL from teamstat

--Q5
-- מייצג מידע על תאריך ושעה. גורמים פנימיים של ערך DATETIME כוללים את המרכיבים הבאים:
-- YEAR , MONTH, DAY, HOUR, MINUTE, SECOND, MICROSECOND

--Q6
--כאשר מדובר בארגון בינלאומי, גורם חיוני בנוגע לייצוג ערכי תאריך ושעה והשוואה ביניהם הוא אזור הזמן (Time Zone). אזור הזמן משפיע על איך מתפרשים ערכים של תאריך ושעה ושאיך יש לבצע השוואות בין ערכים שמגיעים מאזורים שונים.

--Q7
-- לא רצוי לאחסן את גיל האדם במסד הנתונים מכיוון שגיל הוא מידע שמתרקם לאורך זמן. במקום זאת, מומלץ לאחסן את תאריך הלידה, וכך ניתן לחשב את גיל האדם באופן דינמי בכל זמן נתון, מה שמבטיח עדכניות ומונע בעיות כאשר הגיל משתנה.

--Q8
SELECT UnitPrice AS intergar
FROM [Order Details]

--Q9
SELECT SQRT(EmployeeID) AS SqrtID
FROM Employees

--Q10
SELECT DAY (OrderDate - ShippedDate) as Duration
FROM Orders

--Q11
SELECT CONVERT(DATETIME, '2009-07-27', 120) AS datetime_value;

--Q12
SELECT LOWER(FirstName) as LowerFirst, UPPER(LastName) as UpperLast
FROM Employees
WHERE EmployeeID in (3,5)

--Q13
SELECT CategoryName, CategoryID,CHARINDEX('i', Description) AS position
FROM Categories

--Q14
SELECT ProductID, ProductName, REPLACE (ProductName, 'e','-') as Replaced
FROM Products

--Q15
SELECT MIN(LastName) as Shortest, MAX(LastName) as Longest
FROM Employees

--Q16
SELECT COUNT(*) as CountOfTable
FROM Employees

--Q17
SELECT COUNT(Region) as CountRegion
FROM Employees

--Q18
SELECT AVG(UnitPrice) as avgPrice
FROM Products

--Q19
SELECT COUNT(Distinct CustomerID) as AmountOfCustomers
FROM Orders

--Q20
SELECT Top 10 *
From Customers

--Q21
SELECT TOP (10) PERCENT *
FROM Customers
ORDER BY CustomerID