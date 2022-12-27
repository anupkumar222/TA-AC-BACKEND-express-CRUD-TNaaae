var express = require('express');
const { route } = require('.');
var router = express.Router();
var User = require('../model/User')

router.get('/new', (req, res) => {
    res.render('form');
})

router.post('/', (req, res, next) => {
    User.create(req.body, (err, user) => {
        console.log(user)
        res.redirect('/users');
    })
})

router.get('/', (req, res, next) => {
    User.find({}, (err, products) => {
        if(err) return next(err);
        res.render('users', { users : products })
    });
});

router.get('/:id', (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, result) => {
        if(err) return next(err);
        res.render('userdetail', { user : result })
    });
});

router.get('/:id/edit', (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, result) => {
        if(err) return next(err);
        res.render('edituser', {user : result});
    })
})

router.post('/:id/update', (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id, req.body, (err, result) => {
        if(err) return next(err);
        res.redirect(`/users/${id}`);
    })
})

router.get('/:id/delete', (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndDelete(id, (err, result) => {
        if(err) return next(err);
        res.redirect(`/users`);
    })
})

module.exports = router;