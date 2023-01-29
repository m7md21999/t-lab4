import express from "express";
import Grade from "./types/GradesTypes";

const app = express.Router();
app.use(express.json());
import { v4 as uuidv4 } from "uuid";

let Grades:Grade[] = [];

app.get('/api/grades',(req , res) => {
    try {
        res.json({
            Grades
        });
    } catch (error){
        console.log(error)
    }
});

app.post('/api/grades', (req,res)=> {
    try{
        const newGrades = req.body as Grade;
        newGrades.classId = uuidv4();
        Grades.push(newGrades);
        res.json({
            message:'Grades are Added!'
        });
    } catch (error) {
        console.log(error);
    }

});

app.put('/api/grades/:id', (req,res)=> {
    try {
        const { id } = req.params;
        const updatedGrades = req.body as Grade;
        const updetedGradesList = Grades.filter((item) => {
            return item.classId !== id;
          });
          updetedGradesList.push(updatedGrades);
          Grades = updetedGradesList;
          res.json({
            message:'Grades are updated!'
          });
    } catch(error){
        console.log(error);
    }

});

app.delete('/api/grades/:id', (req ,res)=> {
    const {id} = req.params;
    const deleteGrades = Grades.filter((item) => {
        return item.classId !== id;
      });
      Grades = deleteGrades;
      res.json({
        message:'Grades are Deleted!'
      });


});

export default app;
