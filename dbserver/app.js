const express = require('express');
const jwt = require('jsonwebtoken');    // For Credential
const sql = require('mysql');
const bodyParser = require('body-parser');
const uploader = require('express-fileupload');
const cors = require('cors');

app = express();
app.use(cors({ credentials: true, origin: true }));
app.use(uploader());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ parameterLimit: 100000, extended: true, limit: '50mb' }));

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

app.post('/api/signup', (req, res) => {
    var name = req.body.name;
    var password = req.body.password;
    console.log([name, password]);
});

app.post('/api/login', (req, res) => {

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

app.post('/api/addproduct', (req, res) => {
    if (!req.body.name) {
        console.log("NO Body Found");
        res.json({ err: 1 });
        return;
    }
    const addproduct = "INSERT INTO product SET ?";
    let s = db.query(addproduct, req.body, (err, resl, fel) => {
        if (err) {
            res.json({ err: 1 });
            throw err;
        }
        res.json({
            message: "Added Product"
        });
        console.log("Added Product");
    });
});

app.post('/api/delproduct/:id', (req, res) => {

});
app.post('/api/addtocart/:uid/:pid', (req, res) => {
    let query = `INSERT INTO cart VALUE(${req.params.uid},${req.params.pid})`;
    db.query(query, (err, resl, fiel) => {
        if (err) {
            res.json({ err: 1 });
            throw err;
        }
        res.json({ err: 0 });
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
app.post('/api/cart/:uid', (req, res) => {
    let getProduct = `SELECT DISTINCT product.* FROM product,cart where product.id = cart.pid and cart.uid = ${req.params.uid};`;
    db.query(getProduct, (err, resl, fiel) => {
        if (err) {
            res.json({ err: 1 });
            throw err;
        }
        res.json(resl);
    });
});

app.post('/api/addimage', (req, res) => {
    // console.log(req);
    if (req.files) {
        var file = req.files.filename, name = file.name;
        file.mv('./upload/' + name, (err) => {
            if (err) throw err;
        });
    } else {
        res.json({ err: 1 });
    }
});

app.listen(1011, () => console.log("Server Started at http://localhost:1011"));