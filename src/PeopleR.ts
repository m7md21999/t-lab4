import express from "express";
import Person from "./types/PersonType";

const app = express.Router();
app.use(express.json());
import { v4 as uuidv4 } from "uuid";

let People:Person[] = [];

app.get('/api/people',(req , res) => {
    try {
        res.json({
            People
        });
    } catch (error){
        console.log(error)
    }
});

app.post('/api/people', (req,res)=> {
    try{
        const newPerson = req.body as Person;
        newPerson.id = uuidv4();
        People.push(newPerson);
        res.json({
            message:'Person is Added!'
        });
    } catch (error) {
        console.log(error);
    }

});

app.put('/api/people/:id', (req,res)=> {
    try {
        const { id } = req.params;
        const updatedPerson = req.body as Person;
        const updetedPeopleList = People.filter((item) => {
            return item.id !== id;
          });
          updetedPeopleList.push(updatedPerson);
          People = updetedPeopleList;
          res.json({
            message:'Person is updated!'
          });
    } catch(error){
        console.log(error);
    }

});

app.delete('/api/people/:id', (req ,res)=> {
    const {id} = req.params;
    const deletedPerson = People.filter((item) => {
        return item.id !== id;
      });
      People = deletedPerson;
      res.json({
        message:'Person is Deleted!'
      });


});

export default app;
