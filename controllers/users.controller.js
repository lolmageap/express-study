const model = require('../models/users.model')

function getUsers(req, res) {
    res.send(model);
}

function getUser(req, res) {
    const userId = Number(req.params.userId);
    const user = model[userId];
    if (user) {
        res.json(user);
    } else {
        res.sendStatus(404);
    }
}

function postUser(req, res) {
    const newUser = {
        name: req.body.name,
        id: model.length,
    };
    model.push(newUser);
    res.json(newUser);
}

module.exports = {
    getUsers,
    getUser,
    postUser
}