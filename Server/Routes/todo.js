const ObjectID = require('mongodb').ObjectID;
const router = require('express').Router();
const mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/todo';

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
        res.status(200).send('Home TODO');
    };
    (error) => {
        res.sendStatus(500)
        console.error(error)
    }
});

// afficher toodo avec id utilisateur
router.get('/:id', async (req, res) => {
   let idUser = {_id: ObjectID(req.params.id)};
    const result = await userModel.findById(req.params.id);
    res.status(200).json(result.todo);

});

// mise à jour Todo
router.post('/:id', async (req, res)=>{
    let idUser = {_id: ObjectID(req.params.id)};
    const result = await userModel.updateOne(idUser, {$addToSet:{ todo: req.body}});
    res.send(result);

})

// supprimer element todo avec index
router.delete('/:id/:index', async (req, res) => {
    const obj = await userModel.findById(req.params.id); // id à supprimer son todo
   const result = await userModel.updateOne({_id: req.params.id}, {$pull : { todo: obj.todo[req.params.index]}} );
    res.send(result);
})

// modifier contenu todo // {$set : { ['todo.'+req.params.index]: req.body } } concaténation du chaine de caractére
router.put('/:id/:index', async (req, res) => {
  console.log('update', req.params.id, req.params.index)
   const result = await userModel.updateOne({_id: req.params.id}, {$set : { ['todo.'+req.params.index]: req.body } });
    res.send(result);
})


module.exports = router;
