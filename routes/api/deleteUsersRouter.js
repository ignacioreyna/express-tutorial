const express = require('express');
const router = express.Router();
const deleteUsers = require('../../datasources/users/deleteUsers');
const { Response } = require('../../model/Response');

router.delete('/', (req, res, next) => {
    const userId = req.query.userId;
    try {
        const deletedUser = deleteUsers.deleteById(userId);
        res.json(new Response(true, 'success', deletedUser))
    } catch (e) {
        next(e);
    }

})

module.exports = {
    router,
};