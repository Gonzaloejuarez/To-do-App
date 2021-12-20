const {Router} = require('express');
const db = require('../db');
const {getAllTasks, getTasks, deleteTask, postTask, putTask} = require('../controllers/index')
const router = Router();


router.get('/tasks' ,getAllTasks)


router.get('/tasks/:id' ,getTasks)


router.delete('/tasks/:id' , deleteTask)


router.post('/tasks' , postTask )


router.put('/tasks/:id' , putTask )



module.exports = router