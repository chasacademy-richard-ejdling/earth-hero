import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import crypto from "crypto";
import cors from "cors";
import mysql from "mysql";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 7000;

// console.log(crypto.randomBytes(64).toString('hex'))

app.use(express.json());
app.use(cors());

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

const tokenSecret = process.env.TOKEN_SECRET

function generateAccessToken(userId) {
  return jwt.sign(userId, tokenSecret, { expiresIn: 1800 })
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", (req, res) => {
    const { username, password, email } = req.body

    db.query("INSERT INTO users (username, password, email) VALUES (?, ?, ?)", 
        [username, password, email], (err, results) => {
        console.log('result register', results)
        if (err) {
            res.sendStatus(500)
        } else {
            res.send('ok')
        }
        }
    )}
);

app.post('/login', (req, res) => {
  console.log(req.body)

  const { username, password } = req.body

  db.query("SELECT id, username, password FROM users", (err, results) => {
      if (err) {
          res.sendStatus(500)
      } else {
          let userId

          console.log('sessions result', results)

          results.forEach(user => {
              if (username == user.username && password == user.password) {
                  userId = user.id
                  return
              }
          })

          if (!userId) {
              res.status(401).send('Wrong username or password')
          } else {
              console.log(userId)
              const token = generateAccessToken({ userId: userId })

              res.send(token)
          }


          /* res.send('ok') */
      }
  })

  /* let userId = ''

  users.forEach(user => {
      if (username == user.username && password == user.password) {
          userId = user.id
          return
      }
  })

  if (!userId) res.status(401).send('Wrong username or password')

  const token = generateAccessToken({ userId: userId })

  res.send(token) */
})


app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
