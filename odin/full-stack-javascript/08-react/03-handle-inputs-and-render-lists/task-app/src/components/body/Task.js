import React from "react";



const Task = (props) => {

    const { task } = props;    

    return (
        <li className="task">
            <div className="task-name">
                {task.name}
            </div>
            <div className="task-details">
                {task.details}
            </div>
        </li>
    )
}

export default Task;