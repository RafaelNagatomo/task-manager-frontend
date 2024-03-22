import Moment from "react-moment";
import moment from "moment";
import axios from "axios";
import { useAlert } from "react-alert";

import { RiDeleteBin7Fill } from "react-icons/ri";

import "moment/locale/pt-br";
import "./TaskItem.scss";

const TaskItem = ({ task, fetchTasks }) => {
    const alert = useAlert();

    const handleTaskDeletion = async () => {
        try {
            await axios.get(`http://localhost:3001/delete/${task._id}`);

            await fetchTasks();

            alert.success("Deletado com sucesso.");
        } catch (error) {
            alert.error("Algo deu errado ao deletar.");
        }
        console.log(task._id);
    };

    return (
        <div className="task-item-container">
            <div className="task-description">
                <label
                    className={
                        task.isCompleted
                            ? "checkbox-container-completed"
                            : "checkbox-container"
                    }
                >
                    {task.task}
                    <input type="checkbox" defaultChecked={task.isCompleted} />
                    <span
                        className={
                            task.isCompleted
                                ? "checkmark completed"
                                : "checkmark"
                        }
                    ></span>
                </label>
            </div>

            <div className="delete">
                <RiDeleteBin7Fill
                    size={18}
                    color="#F97474"
                    onClick={handleTaskDeletion}
                />
            </div>
        </div>
    );
};

export default TaskItem;
