const router = require('express').Router();
let User = require('../models/user.model');

//т.е. когато имаме localhost:5000/users/
router.route('/').get((req, res) => {
    //find ще ни даде всички user-и в базата
    User.find()
        // връща юзърите от базата
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    //новото име , което искаме да постнем(добавим) е част от body-то на request-а 
    const username = req.body.username;

    //mongodb автоматично създава пропърти id, което е уникално
    const newUser = new User({username});

    //чрез save новият user се запазва в базата
    newUser.save()
        //връщаме съобщение , че е запазен успешно
        .then(() => res.json('User added !'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;