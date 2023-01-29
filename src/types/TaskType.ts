interface Task {
    id: string,
    title: string,
    description: string,
    status: "Done" | "in progress" | "To do",

}
export default Task;
