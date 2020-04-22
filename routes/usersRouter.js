const express = require('express');
const router = express.Router();
const usersdb = require('../model/usersdb')
const Response = require('../model/response').Response

/* GET users listing. */

router.get('/', (req, res) => {
  if (Array.isArray(usersdb.users) && usersdb.users.length) {
    res.render('index', new Response(true, 'success', usersdb.users));
  } else {
    res.render('crappy_error', new Response(false, 'failed'))
  }
});

router.get('/:userId', (req, res) => {
  const user = usersdb.getUserById(req.params.userId)

  if(user !== undefined){
    res.render('user', new Response(true, 'success', user))
  } else {
    res.render('crappy_error', new Response(false, 'failed'))
  }
});

router.delete('/delete', (req, res) => {
  const userId = req.query.userId;
  const deletedUser = usersdb.deleteById(userId)

  if(deletedUser !== undefined){
    res.send(new Response(true, 'success', deletedUser))
  } else{
    res.send(new Response(false, 'failed'))
  }
})

router.post('/create', (req, res) => {
  usersdb.add(req.body).then(user => {
    if(user !== undefined){
      res.send(new Response(true, 'success', user))
    } else {
      res.send(new Response(false, 'failed'))
      //todo esto es una cagada, no?
    }
  })
});


router.patch('/update', (req, res) => {

})


module.exports = {
  router,
}
