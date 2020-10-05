db.createCollection("Department")
db.createCollection("Employee")

//insert using 3 methods
db.Department.insert({_id:1,Name:"IT",NoOfEmp:200,HOD:"Ajay"})
db.Department.update({_id:2,Name:"HR",NoOfEmp:100},{$set:{HOD:"Aditya"}},{upsert:true})
db.Department.save({_id:3,Name:"Customer Division",NoOfEmp:300,HOD:"Akash"})
db.Department.insert({_id:4,Name:"Sports",NoOfEmp:150,HOD:"Ravi"})
db.Department.insert({_id:5,Name:"Operations",NoOfEmp:250,HOD:"Vignesh"})

db.Employee.insert({_id: 1,name: "Yash", age: 25, salary: 120000, position: "CEO"})
db.Employee.update({_id: 2,name: "Aryan", age: 21, salary: 240000},{$set:{position: "COO"}},{upsert:true})
db.Employee.save({_id: 3,name: "Rahul", age: 22, salary: 350000, position: "CFO"})
db.Employee.insert({_id: 4,name: "Viren", age: 30, salary: 4500000, position: "CFO"})
db.Employee.insert({_id: 5,name: "Shreya", age: 25, salary: 500000, position: "Junior Associate"})

//updating to add a field in employee collection
db.Employee.update({_id:1},{$set:{DeptNum:1002}})
db.Employee.update({_id:2},{$set:{DeptNum:1007}})
db.Employee.update({_id:3},{$set:{DeptNum:1004}})
db.Employee.update({_id:4},{$set:{DeptNum:1010}})
db.Employee.update({_id:5},{$set:{DeptNum:1005}})

//remove a field from employee collection
db.Employee.update({_id:3},{$unset:{age:30}})

//find all documents in both the collections
db.Employee.find()
db.Department.find()

//select emp name and dept num where dept num is between 1001 and 1005
db.Employee.find({DeptNum: {$gt : 1000, $lt : 1006}},{name:1,DeptNum:1})

//find all employees with age greater than 25
db.Employee.find({age:{$gt:25}})

//find names of all employees with name starting with A
db.Employee.find({name:/^A/})
