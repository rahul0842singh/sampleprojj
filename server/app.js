const express = require("express")
const app = express()
const cors = require("cors")
const bodyparser = require("body-parser")
const cookieParser = require("cookie-parser");
const mysql = require("mysql2")
const bcrypt = require("bcryptjs")

app.use(cors())
app.use(express.json())
app.use(cookieParser());
app.use(bodyparser.urlencoded({ extended: true }))



const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Kashmir@4india",
  database: "payroll",
})

//register user
app.post('/userregister', (req, res) => {
  const { name, company, email, phone, location, photo, address, cpassword, } = req.body;
  try {
    const [existingUser] = db.execute('SELECT * FROM employee WHERE email = ?', [email]);
    if (existingUser.length) {
      return res.status(409).send({ message: 'Email already registered' });
    }
    // Hash the password before inserting into the database
    const hashedPassword = bcrypt.hash(password, 10);
    db.query('INSERT INTO employee (name,company,email,phone,location,photo,address,password,cpassword) VALUES (?,?,?,?,?,?,?,?,?)', [
      name,
      company,
      email,
      phone,
      location,
      photo,
      address,
      hashedPassword,
      cpassword,]);
    return res.status(201).send({ message: 'User created' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
});


// --------------------------------------
app.post('/submit-form', async (req, res) => {
  const { name, company, email, phone, location, photo, address, password, cpassword, } = req.body;

  const sql = `INSERT INTO employee (name,company,email,phone,location,photo,address,password,cpassword) VALUES (?, ?, ?,?, ?, ?,?, ?, ?)`;

  await db.query(sql, [
    name,
    company,
    email,
    phone,
    location,
    photo,
    address,
    password,
    cpassword], (err, result) => {
      if (err) {
        console.error('Error inserting data into MySQL: ' + err.stack);
        return;
      }
      console.log('Data inserted into MySQL: ' + result.affectedRows);
    });
});

app.listen(9000, () => {
  console.log("server is listening at 9000");
})