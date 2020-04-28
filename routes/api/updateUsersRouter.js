const express = require('express');
const router = express.Router();
const updateUsers = require('../../datasources/users/updateUsers');
const { Response } = require('../../model/Response');

router.patch('/', async (req, res, next) => {

    try {
        const updatedUser = await updateUsers.updateById(req);
        res.json(new Response(true, 'success', updatedUser))
    } catch (e) {
        next(e);
    }

    // updateUsers.updateById(req).then(updatedUser => {
    //     res.json(new Response(true, 'success', updatedUser))
    // }).catch(e => {
    //     next(e);
    // })
})

module.exports = {
    router,
};