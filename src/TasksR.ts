import express from "express";
import Task from "./types/TaskType";

const app = express.Router();
app.use(express.json());
import { v4 as uuidv4 } from "uuid";

let Tasks:Task[] = [];

// Get all tasks
app.get('/api/alltasks',(req , res) => {
    try { 
        res.json({
            Tasks
        });
    } catch (error){
        console.log(error)
    }
});

//Get Task By ID
app.get('/api/getTask/:id',(req , res) => {
    try {
        const {id} = req.params;
        const selectTask = Tasks.filter((item) => {
            return item.id === id;
          });
        res.json({
            selectTask
        });
    } catch (error){
        console.log(error)
    }
});


//TODO get task by title - should be a search param
app.get('/api/getTaskbytitle',(req , res) => {
    try {
        const title = req.query.title;
        const selectTask = Tasks.filter((item) => {
            return item.title === title;
          });
        res.json({
            selectTask
        });
    } catch (error){
        console.log(error)
    }
});

// create a new task
app.post('/api/createTask', (req,res)=> {
    try{
        const newTask = req.body as Task;
        newTask.id = uuidv4();
        Tasks.push(newTask);
        res.json({
            message:'Task is Added!'
        });
    } catch (error) {
        console.log(error);
    }

});


// update a task - should include all fields
app.put('/api/updatetask/:id', (req,res)=> {
    try {
        const { id } = req.params;
        const updatedTask = req.body as Task;
        const updetedTasksList = Tasks.filter((item) => {
            return item.id !== id;
          });
          updetedTasksList.push(updatedTask);
          Tasks = updetedTasksList;
          res.json({
            message:'Task is updated!'
          });
    } catch(error){
        console.log(error);
    }

});

// Delete a task
app.delete('/api/removetask/:id', (req ,res)=> {
    const {id} = req.params;
    const deleteTask = Tasks.filter((item) => {
        return item.id !== id;
      });
      Tasks = deleteTask;
      res.json({
        message:'Task is Deleted!'
      });


});


export default app;
