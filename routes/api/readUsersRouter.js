const express = require('express');
const router = express.Router();
const readUsers = require('../../datasources/users/readUsers');
const { Response } = require('../../model/Response');

function test(req, res, next) {
    console.log('testing read users');
    next();
}
router.get('/', test, (req, res, next) => {
    try {
        res.json(new Response(true, 'success', readUsers.getAllUsers()));
    } catch (e) {
        next(e);
    }
});

router.get('/:userId', (req, res, next) => {
    const userid = req.params.userId;
    if(userid){
        try {
            res.json(new Response(true, 'success', readUsers.getUserById(userid)));
        } catch (e) {
            next(e);
        }
    }
});

module.exports = {
    router,
};