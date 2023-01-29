import express from "express";
const app = express();
import people from "./PeopleR";
import Grades from "./GradesR";
import Tasks from "./TasksR";


const port = 3000;

app.use("/app", people);
app.use("/app",Grades);
app.use("/app",Tasks)

  app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  });