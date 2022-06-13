const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const sqlite = require('sqlite3').verbose();

app.use(express.json())

app.listen(port, () => {
    console.log(`listening on ${port}`);
});

let db = new sqlite.Database('./----',sqlite.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });

db.run('CREATE TABLE IF NOT EXISTS user(\
        name VARCHAR(255),\
        password VARCHAR(255),\
        email VARCHAR(255),\
        sex VARCHAR(8)\
    );');
    
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
        console.log('Close the database connection.');
    });


app.get('/user', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    db = new sqlite.Database('./-----',sqlite.OPEN_READWRITE, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
      });
    let user = db.each(`SELECT name, password, email, sex FROM user 
                        WHERE email='${req.query.email}' AND password='${req.query.password}';`, 
            (err, row) => {
                if (err) {
                    res.send(false);
                    throw "NOT FOUND";
                }
                    console.log(row.id + "\t" + row.name + "\t" + row.password + "\t" + row.email + "\t" + row.sex);
                    res.send(true);
            });
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
            console.log('Close the database connection.');
        });
});

app.get('/save-user', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    db = new sqlite.Database('./-------',sqlite.OPEN_READWRITE, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
      });
    let query = 'INSERT INTO user(name, password, email, sex) VALUES (?, ?, ?, ?);';
    db.run(query, [req.query.name, req.query.password, req.query.email, req.query.sex], 
            (err, row) => {
                if (err) {
                    res.send(false);
                }
                else {
                    res.send(true);
                }});
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
            console.log('Close the database connection.');
    });
});
