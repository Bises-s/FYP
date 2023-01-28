const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const bcrypt = require("bcryptjs");

const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password: "",
    database: "onlinevoting"
})
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req,res) =>{
    const sqlGet = "SELECT * FROM register";
    db.query(sqlGet, (error,result) => {
        res.send(result);
    });
});


app.post("/api/register", (req,res) =>{
    const sqlInsert = "INSERT INTO register (fname,lname,email,password,cpassword,province,contact,citizennum,gender) VALUES (?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [fname,lname,email,password,cpassword,province,contact,citizennum,gender], (error,result) =>{
        if(error){
            console.log(error);
        }
    })

})
// app.post("/api/register", (req,res) =>{
//     const {fname,lname,email,contact, password : Npassword,cpassword : Wpassword} = req.body;
//     const password = bcrypt.hashSync(Npassword, 10);
//     const cpassword = bcrypt.hashSync(Wpassword,10);
//     db.query('INSERT INTO tenant SET ?', {fname, lname:lname, email: email, contact:contact,password:password,cpassword:cpassword},(error,results)=>{
//         if(error) throw error;
//         return res.json({status: "sucess", sucess: "User has been registered"})
//     })
    

// })

// app.post("/api/post", (req,res) =>{
//     const {email,password} = req.body;
    
//     if (!email || !password) return res.json({status: "error", error: "Please Enter your email and password"});
//     else {
//         db.query('SELECT * FROM tenant WHERE email = ?',[email], async (Err, result) => {
//             if(Err) throw Err;
            
//              if(!result[0] || !await bcrypt.compare(password,result[0].password))
//              {  
//                  console.log("Invalid");
//                  //console.log(result[0]);
//              } 
//             else{
//                 console.log("Sucessfull");
//             };
//         })
//     }
    

// })





app.get("/",(req,res) => {
    //  const sqlInsert = "INSERT INTO login_db (contact, password) VALUES (9807991363,'john@gmail.com')";
    //  db.query(sqlInsert,(error,result) => {
    //      console.log("error",error);
    //      console.log("result",result);
    //      res.send("Hello");
    //  })
    
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})