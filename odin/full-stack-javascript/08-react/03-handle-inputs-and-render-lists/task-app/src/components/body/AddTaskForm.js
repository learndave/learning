import { render, } from "@testing-library/react";
import React, { Component } from "react";

const AddTaskForm = (props) => {
    const {onNameChange, onDetailChange, onSubmit} = props;

    return (
        <form onSubmit={onSubmit} className="add-task-form">
            <input onChange={onNameChange} className="add-task-name" type="text" required/>
            <textarea onChange={onDetailChange} className="add-task-details" type='textarea'/>
            <button type="submit">Add Task</button>
        </form>
    )
}

export default AddTaskForm;