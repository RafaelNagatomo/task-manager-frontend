import { useState, useEffect } from "react";
import axios from "axios";

import TaskItem from "./components/TaskItem";

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: "1",
            description: "Estudar Programação",
            isCompleted: false,
            date: Date.now(),
        },
        {
            id: "2",
            description: "Ler 30 páginas",
            isCompleted: true,
            date: Date.now(),
        },
    ]);

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get("http://localhost:3001");

            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </>
    );
};

export default App;
