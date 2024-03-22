import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import axios from "axios";
import { useAlert } from "react-alert";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";

const AddTask = ({ fetchTasks }) => {
    const [task, setTask] = useState("");

    const alert = useAlert();

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            if (task.length === 0) {
                return alert.error(
                    "A tarefa precisa de uma descrição para ser adicionada"
                );
            }

            await axios.post("http://localhost:3001/create", {
                task: task,
                isCompleted: false,
                date: Date.now(),
            });

            await fetchTasks();

            setTask("");

            await alert.success("A tarefa foi adicionada com sucesso!");
        } catch (_error) {
            alert.error("Algo deu errado.");
        }
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange}
                onEnterPress={handleTaskAddition}
            />
            {}
            <CustomButton onClick={handleTaskAddition}>
                <CiSquarePlus size={28} color="#ffffff" />
            </CustomButton>
        </div>
    );
};

export default AddTask;
