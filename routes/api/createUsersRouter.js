const express = require('express');
const router = express.Router();
const createUsers = require('../../datasources/users/createUsers');
const { Response } = require('../../model/Response');

router.post('/', async (req, res, next) => {
    try {
        const newUser = await createUsers.add(req.body);
        res.json(new Response(true, 'success', newUser))
    } catch (e) {
        next(e);
    }
});

module.exports = {
    router,
};