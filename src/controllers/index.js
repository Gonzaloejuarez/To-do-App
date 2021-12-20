
const db = require('../db')

const getAllTasks = async ( req, res) => {
   try{
    const allTasks = await db.query('SELECT * FROM task')
    res.send(allTasks.rows)
   }
   catch(error){
    console.log({error : error.message})
   }
}

const getTasks = async (req, res) => {
   try{
    const {id} = req.params
    const result =await db.query('SELECT * FROM task WHERE id = $1 ' , [id])
    
    if(result.rows.length === 0 ) return res.status(404).json({
        message : 'Task not found'
    })
 
    console.log(result)
 
 
    return res.json(result.rows[0]); 
   }
   catch(error){
    console.log({error: error.message})
   }
};

const deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await db.query("DELETE FROM task WHERE id = $1", [id]);
    
        if (result.rowCount === 0)
          return res.status(404).json({ message: "Task not found" });
        return res.sendStatus(204);
      } catch (error) {
        next(error);
      }
}

const postTask = async (req, res) => {
const {title, description} = req.body; 
try{
    const result = await db.query(
        "INSERT INTO task (title, description) VALUES ($1 , $2) RETURNING *",
        [title, description]
    );
    res.json(result.rows[0])
}catch(error){
    res.json({error: error.message})
}
}

const putTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
    
        const result = await db.query(
          "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
          [title, description, id]
        );
    
        if (result.rows.length === 0)
          return res.status(404).json({ message: "Task not found" });
    
        return res.json(result.rows[0]);
      } catch (error) {
        next(error);
      }
}


module.exports ={
    getAllTasks,
    getTasks,
    deleteTask,
    postTask,
    putTask
}
