const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

let users = [];

app.post('/auth/login', (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ msg: 'Missing information' });
    }

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === req.body.email && users[i].password === req.body.password) {
            return res.send({msg: 'ok', "token" : jwt.sign(users[i], "Secret")});
        }
    }

    return res.status(400).json({ msg: 'User not found' });
});

app.post('/auth/register', (req, res) => {
    if (!req.body.email || !req.body.password || !req.body.firstName || !req.body.lastName  ) {
        return res.status(400).json({ msg: 'Missing information' });
    }

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === req.body.email) {
            return res.status(400).json({ msg: 'User already exists' });
        }
    }

    const newUser = {
        email: req.body.email,
        password: req.body.password,
        fistName: req.body.fistName,
        lastName: req.body.lastName,
    };

    users.push(newUser);
    res.send({msg: 'ok', "token" : jwt.sign(newUser, "Secret")});

});

app.listen(8080);