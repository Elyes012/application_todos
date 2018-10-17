const router = require('express').Router();
const mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/todo';
const jwt = require('jsonwebtoken');
// Importation du model
const userSchema = require('../models/user');

// Connection au base de donnee
mongoose.connect(db, (err) => {
    console.log("Database connection in port 27017")
})
// Collection dans la base de donnee
const userModel = mongoose.model('users', userSchema)

//Test backend
router.get('/', (req, res) => {
    {
        res.status(200).send('Home Auth');
    };
    (error) => {
        res.sendStatus(500)
        console.error(error)
    }
});

// Enregistrement nouveau utilisateur
router.post('/register', (req, res) => {
    {
        var newUser = new userModel(req.body);
        newUser.save();
        res.status(200).send('Success register');
    };
    (error) => {
        res.sendStatus(500)
        console.error(error)
    }
});

//s'identifier
router.post('/login', async(req, res) => {
    const result = await userModel.findOne({
        email: req.body.email
    });
    if(!result) {res.send({message: 'user not found'})}
    console.log(result , req.body.password)
    if(result.password !== req.body.password) {res.send({message:'bad password'})}
    else { res.send({message:'ok', userToken : jwt.sign({data:result},'my_secreeeet')})
    jwt.verify()

  }

});




module.exports = router;
