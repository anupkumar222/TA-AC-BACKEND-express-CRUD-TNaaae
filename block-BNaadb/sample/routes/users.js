var express = require('express');
const User = require('../model/User');
var router = express.Router();
var User1 = require('../model/User')

router.get('/', (req, res, next) => {
    // handle action
    
    User1.find({}, (err, users) => {
        if(err) return next(err);
        res.render('user.ejs', {users : users});
    })
})

router.get('/new', (req, res) => {
    // render the create form
    res.render('userForm.ejs');
})

router.post('/', (req, res) => {
    //capture form data
    User1.create(req.body, (err, user) => {
        if(err) return res.redirect('/users/new');
        res.redirect("/users");
    })
})

router.get('/:id', (req, res, next) => {
    //single user detail
    var id = req.params.id;
    User1.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('singleUser.ejs',{user});
    })
    
});

router.get('/:id/edit', (req, res, next) => {
    //edit form
    var id = req.params.id;
    User.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('editUser', { user })
    })
});

router.post('/:id', (req, res) => {
    var id = req.params.id;
    User.findByIdAndUpdate(id, req.body, (err, updateUser) => {
        if(err) return next(err);
        res.redirect('/users')
    })
});

router.delete('/:id', (req, res) => {
    //delete user detail
    
});

module.exports = router;