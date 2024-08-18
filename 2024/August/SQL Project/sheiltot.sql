--Q1
select *
from Items

--Q2
select Status , SuppDate, OrderNo
from ExOrders

--Q3
select ExOrders.OrderNo, sum (ExOrders.Quantity * items.UnitPrice) as TotalAmount
from ExOrders join Items
on ExOrders.Code = Items.Code
group by ExOrders.OrderNo

--Q4
select C.CustID, C.CustName, C.CustStatus, E.Status, E.Quantity,  i.Freq
from Customers as C join ExOrders as E
on c.CustID= e.CustID 
join Items as I
on e.Code = i.Code

--Q5
select R.RecNo, R.OrderNo, R.PymtDate,R.PaidAmt,
sum(A.CrdtDebt - R.PaidAmt) as SumOfDebtAndPaid
from Receipts as R join Accounting as A
on R.InvNo = A.InvNo
group by R.OrderNo, r.RecNo, R.PymtDate,R.PaidAmt

--Q6
select e.OrderDate, e.SuppDate, i.TotalAmount
from ExOrders as e join Invoices as i
on e.OrderNo = i.OrderNo
where status = 'Pending'
order by e.OrderDate
