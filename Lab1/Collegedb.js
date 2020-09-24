db.createCollection("student")
db.createCollection("faculty")
db.createCollection("COE")
db.createCollection("Library")
db.createCollection("Admission")
db.createCollection("Festival")

db.Festival.insert({_id:1,Ename:"Infinite hunt",Etype:"Fun",dept:"Math",coordinator:"sneha",phoneno:"6487698764"})
db.Festival.insert({_id:2,Ename:"Battle of brains",Etype:"Fun",dept:"Math",coordinator:"arun",phoneno:"7684698764"})
db.Festival.insert({_id:3,Ename:"codethon",Etype:"coding",dept:"CSE",coordinator:"shreya",phoneno:"8924578764"})
db.Festival.insert({_id:4,Ename:"Deenergize the minibeasts",Etype:"debugging",dept:"CSE",coordinator:"ajit",phoneno:"9898698764"})

db.student.insert({id:1,Name:"Ajit",USN:"1BM17CS154",Age:22,Branch:"CSE",Mobile:7996026361,Email:"ajitjain.cs17@bmsce.ac.in"})
db.student.insert({id:2,Name:"Ravi",USN:"1BM17CS150",Age:22,Branch:"CSE",Mobile:7777777777,Email:"ravikumar.cs17@bmsce.ac.in"})
db.student.insert({id:3,Name:"Yash",USN:"1BM17CS757",Age:21,Branch:"CSE",Mobile:7777778888,Email:"yash.cs17@bmsce.ac.in"})
db.student.insert({id:4,Name:"Rahul",USN:"1BM17CS889",Age:22,Branch:"CSE",Mobile:7777779999,Email:"rahul.cs17@bmsce.ac.in"})

db.faculty.insert({id:1,Name:"Abc",Age:35,Branch:"CSE",Mobile:7777779999,Email:"abc.cse@bmsce.ac.in"})
db.faculty.insert({id:2,Name:"Def",Age:35,Branch:"ECE",Mobile:7777770000,Email:"def.ece@bmsce.ac.in"})
db.faculty.insert({id:3,Name:"Ghi",Age:35,Branch:"ISE",Mobile:7777770011,Email:"ghi.ise@bmsce.ac.in"})
db.faculty.insert({id:4,Name:"Jkl",Age:35,Branch:"ME",Mobile:7777770022,Email:"jkl.ise@bmsce.ac.in"})

db.COE.insert({id:1,Name:"name1",Age:35,Department:"CSE",Mobile:8877779999,Email:"name1@bmsce.ac.in"})
db.COE.insert({id:2,Name:"name2",Age:40,Department:"ISE",Mobile:8977779999,Email:"name2@bmsce.ac.in"})
db.COE.insert({id:3,Name:"name3",Age:45,Department:"CSE",Mobile:9977779999,Email:"name3@bmsce.ac.in"})
db.COE.insert({id:4,Name:"name4",Age:42,Department:"ECE",Mobile:8177779999,Email:"name4@bmsce.ac.in"})


db.Library.insert({id:1,BookName:"book1",Price:350,Subject:"CSE",Author:"Author1",Year:1991})
db.Library.insert({id:2,BookName:"book2",Price:250,Subject:"ISE",Author:"Author2",Year:1811})
db.Library.insert({id:3,BookName:"book3",Price:450,Subject:"CSE",Author:"Author2",Year:2014})
db.Library.insert({id:4,BookName:"book4",Price:550,Subject:"ECE",Author:"Author3",Year:2010})

db.Admission.insert({A_id:1,FName:"fname1",Lname:"lname1",Type:"CET",TenthPercent:90,TwelthPercent:95,Place:"placepqr"})
db.Admission.insert({A_id:2,FName:"fname2",Lname:"lname2",Type:"Comed-K",TenthPercent:91,TwelthPercent:94,Place:"placeabc"})
db.Admission.insert({A_id:3,FName:"fname3",Lname:"lname3",Type:"Comed-K",TenthPercent:90,TwelthPercent:93,Place:"placepqr"})
db.Admission.insert({A_id:4,FName:"fname4",Lname:"lname4",Type:"CET",TenthPercent:92,TwelthPercent:95,Place:"placegpqr"})

db.student.find({Name:"Ajit"})
db.Library.find()
db.Library.find({Subject:"CSE"})
