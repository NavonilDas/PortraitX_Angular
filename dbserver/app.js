const express = require('express');
const jwt = require('jsonwebtoken');    // For Credential
const sql = require('mysql');
const cors = require('cors');
const formidable = require('express-formidable');
const sha512 = require('js-sha512').sha512;
const fs = require('fs');
const path = require('path');

const secretKey = "APotraitIsAPoemWithoutWords";

app = express();
app.use(cors({ credentials: true, origin: true }));
app.use(formidable());

const db = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'portraitx'
});

db.connect(err => {
    if (err) {
        console.log("Error Not Connected With Sql");
        throw err;
    }
    console.log("Connected to Sql");
});

function getPass(password) {
    const s = password.length / 2;
    return sha512(password.substr(0, s) + secretKey + password.substr(s));
}

app.use(express.static(path.join(__dirname, '/')));

app.post('/api/signup', (req, res) => {
    const {
        name, email, password, address, phNo
    } = req.fields;
    const pass = getPass(password);
    const query = `INSERT INTO users(name,email,password,phno,role,address) value ('${name}','${email}','${pass}','${phNo}',0,'${address}')`;
    try {
        db.query(query, (err, resl, fiel) => {
            let errCode = 0;
            if (err) {
                if (err.errno == 1062)
                    errCode = 255;
            }
            res.json({ err: errCode });
        });
    } catch (ex) { }
});

app.post('/api/login', (req, res) => {
    const email = req.fields.email;
    const pass = getPass(req.fields.pass);
    const query = `SELECT id,name FROM users WHERE email = '${email}' AND password = '${pass}';`
    db.query(query, (err, resl, _) => {
        if (err) {
            console.log(err);
            res.json({ err: 1 });
        } else {
            if (resl.length == 0) {
                res.json({ err: 101 });
            } else {
                jwt.sign({
                    id: resl[0].id,
                    name: resl[0].name,
                    email: email
                }, secretKey, { expiresIn: '1d' }, (err, token) => {
                    res.json({ id: token, err: 0 });
                });
            }
        }
    })
});

app.post('/api/valid', (req, res) => {
    jwt.verify(req.fields.id, secretKey, (err, _) => {
        if (err) {
            res.json({ err: true });
        } else {
            res.json({ err: false });
        }
    });
});

app.post('/api/allproducts', (req, res) => {
    let getProduct = `select * from product;`;
    db.query(getProduct, (err, resl, fiel) => {
        if (err) {
            res.json({ err: 1 });
            throw err;
        }
        res.json(resl);
    });
});

app.post('/api/getproduct/:id', (req, res) => {
    if (req.params.id == null || req.params.id == undefined) throw "ERRRRR";
    const getProduct = "SELECT * FROM product WHERE id = " + req.params.id;
    db.query(getProduct, (err, resl, fiel) => {
        if (err) {
            res.json({ err: 1 });
            throw err;
        }
        res.json(resl);
    });
});

app.post('/api/isadmin', (req, res) => {
    jwt.verify(req.fields.id, secretKey, (err, authData) => {
        if (err) {
            res.json({ admin: false });
        } else {
            const query = "SELECT role from users WHERE id = " + authData.id;
            db.query(query, (err, resl, _) => {
                if (err) {
                    res.json({ admin: false });
                } else
                    if (resl[0].role == 101)
                        res.json({ admin: true });
            });
        }
    });
});

app.post('/api/addproduct', (req, res) => {
    jwt.verify(req.fields.id, secretKey, (err, authData) => {
        if (err) {
            res.json({ err: 1 });
        } else {

        }
    });
});

app.post('/api/delproduct/:id', (req, res) => {

});
app.post('/api/addtocart/:pid', (req, res) => {
    jwt.verify(req.fields.id, secretKey, (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            let query = `INSERT INTO cart VALUE(${authData.id},${req.params.pid})`;
            db.query(query, (err, resl, _) => {
                if (err) {
                    res.json({ err: 1 });
                    throw err;
                }
                res.json({ err: 0 });
            });
        }
    });
});
app.post('/api/delcart/:uid/:pid', (req, res) => {
    let query = `DELETE FROM cart WHERE uid = ${req.params.uid} AND pid = ${req.params.pid};`;
    db.query(query, (err, resl, fiel) => {
        if (err) {
            res.json({ err: 1 });
            throw err;
        }
        res.json({ err: 0 });
    });
});
app.post('/api/cart', (req, res) => {
    jwt.verify(req.fields.id, secretKey, (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            let getProduct = `SELECT DISTINCT product.* FROM product,cart where product.id = cart.pid and cart.uid = ${authData.id};`;
            db.query(getProduct, (err, resl, fiel) => {
                if (err) {
                    res.json({ err: 1 });
                    throw err;
                }
                res.json(resl);
            });
        }
    });
});

app.post('/api/addimage', (req, res) => {
    const file = (req.files.file);
    const sp = file.name.split('.');
    const savepath = `/upload/${Date.now()}.${sp[sp.length - 1]}`
    fs.copyFile(file.path, __dirname + savepath, (err) => {
        if (err) console.log(err);
        else {
            fs.unlink(file.path, (errr) => {
                if (errr) console.log(errr);
                else {
                    res.json({
                        path: savepath
                    })
                }
            })
        }
    })
});


app.listen(1011, () => console.log("Server Started at http://localhost:1011"));