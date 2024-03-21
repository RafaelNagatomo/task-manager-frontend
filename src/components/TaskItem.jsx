import Moment from "react-moment";
import moment from "moment";
import { RiDeleteBin7Fill } from "react-icons/ri";
import "moment/locale/pt-br";
import "./TaskItem.scss";

const TaskItem = ({ task }) => {
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
                <RiDeleteBin7Fill size={18} color="#F97474" />
            </div>
        </div>
    );
};

export default TaskItem;
