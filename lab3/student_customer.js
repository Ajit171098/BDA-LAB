db.createCollection('Student')

db.Student.insert({ RollNo:10, Age:20, Contact:9988778899,  Email:"name@gmail.com",Name:"DEF"})
db.Student.insert({ RollNo:11, Age:21, Contact:9452364781,  Email:"ABC@gmail.com",Name:"ABC"})
db.Student.insert({ RollNo:12, Age:19, Contact:956245212,  Email:"GH1@gmail.com",Name:"GHI"})

db.Student.update({RollNo:10},{$set:{Email:"DEF@gmail.com"}})
db.Student.find()
db.Student.update({RollNo:11},{$set:{Name:"FEM"}})
db.Student.find()

mongoexport -d Student -c Student -f RollNo,Age,Contact,Email,Name --type=csv -o Student.csv
db.Student.drop()
mongoimport -d Student -c Student --type csv --file Student.csv --headerline



db.createCollection('Customer')

db.Customer.insert({cust_id:1,Acc_bal:1500,Acc_type:"Z"})
db.Customer.insert({cust_id:2,Acc_bal:3000,Acc_type:"A"})
db.Customer.insert({cust_id:1,Acc_bal:1200,Acc_type:"Z"})
db.Customer.insert({cust_id:3,Acc_bal:500,Acc_type:"Z"})
db.Customer.insert({cust_id:3,Acc_bal:1500,Acc_type:"Z"})

db.Customer.aggregate({$match:{Acc_type:"Z"}},{$group:{_id:"$cust_id",totaccbal:{$sum:"$Acc_bal"}}},{$match:{totaccbal:{$gt:1200}}})

db.Customer.aggregate([{$group:{_id:"$cust_id",maxbal:{$max:"$Acc_bal"},minbal:{$min:"Acc_bal"}}}])



db.Customer.find()

mongoexport -d Customer -c Customer -f cust_id,Acc_bal,Acc_type --type=csv -o Customer.csv
db.Customer.drop()
mongoimport -d Customer -c Customer --type csv --file Customer.csv --headerline

