import React from "react";



const Task = (props) => {

    const { task, deleteTask} = props;    

    return (
        <li className={`task ${task.id}`}>
            <div className="task-name">
                {task.name}
            </div>
            <div className="task-details">
                {task.details}
            </div>
            <button onClick={deleteTask} className={`task-delete-button ${task.id}`}>Delete Task</button>
        </li>
    )
}

export default Task;