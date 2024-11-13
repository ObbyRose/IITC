const express = require("express");
const fs = require("fs")

const app = express()
const PORT = process.env.PORT || 3000;

function getRandomItems(data, count = 5) {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// all Data
app.get("/api/projects/all/jokes", (req, res) => {
    fs.readFile("Data/jokes.json", 'utf8', (err, data) => {
        if (err) throw err
        res.send(JSON.parse(data))
    });
});

app.get("/api/projects/all/products", (req, res) => {
    fs.readFile("Data/products.json", 'utf8', (err, data) => {
        if (err) throw err
        res.send(JSON.parse(data))
    });
});

app.get("/api/projects/all/users", (req, res) => {
    fs.readFile("Data/users.json", 'utf8', (err, data) => {
        if (err) throw err
        res.send(JSON.parse(data))
    });
});

// random Data
app.get("/api/projects/random/jokes", (req, res) => {
    fs.readFile("Data/jokes.json", 'utf8', (err, data) => {
        if (err) throw err;
        try {
            const jokes = JSON.parse(data);
            res.send(getRandomItems(jokes, 5));
        } catch (parseErr) {
            res.status(500).send("Error parsing JSON data");
        }
    });
});

app.get("/api/projects/random/products", (req, res) => {
    fs.readFile("Data/products.json", 'utf8', (err, data) => {
        if (err) throw err;
        try {
            const products = JSON.parse(data);
            res.send(getRandomItems(products, 5));
        } catch (parseErr) {
            res.status(500).send("Error parsing JSON data");
        }
    });
});

app.get("/api/projects/random/users", (req, res) => {
    fs.readFile("Data/users.json", 'utf8', (err, data) => {
        if (err) throw err;
        try {
            const users = JSON.parse(data);
            res.send(getRandomItems(users, 5));
        } catch (parseErr) {
            res.status(500).send("Error parsing JSON data");
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});