var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    // handle action
    res.render('users.ejs')
})

router.get('/new', (req, res) => {
    // render the create form
    res.render('userForm.ejs');
})

router.post('/', (req, res) => {
    //capture form data
})

router.get('/:id', (req, res) => {
    //single user detail
    res.render('singleUser.ejs');
});

router.get('/:id/edit', (req, res) => {
    //edit form
});

router.put('/:id', (req, res) => {
    //capture the data from update form
});

router.delete('/:id', (req, res) => {
    //delete user detail
});

module.exports = router;