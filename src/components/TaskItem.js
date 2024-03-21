import moment from "moment";
import "moment/locale/pt-br";

const TaskItem = ({ task }) => {
    return (
        <>
            <h1>
                {task.task} {moment(task.date).format(" - (ddd) DD/MM/YYYY")}
            </h1>
            <p>{task.isCompleted ? "Completa" : "Não completa"}</p>
        </>
    );
};

export default TaskItem;
