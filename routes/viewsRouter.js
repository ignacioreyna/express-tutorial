

router.get('/get', (req, res) => {
    if (Array.isArray(usersdb.users) && usersdb.users.length) {
        res.render('users_list', new Response(true, 'success', usersdb.users));
    } else {
        res.render('crappy_error', new Response(false, 'failed'))
    }
});

router.get('/get/:userId', (req, res) => {
    const user = usersdb.getUserById(req.params.userId)

    if(user !== undefined){
        res.render('user', new Response(true, 'success', user))
    } else {
        res.render('crappy_error', new Response(false, 'failed'))
    }
});