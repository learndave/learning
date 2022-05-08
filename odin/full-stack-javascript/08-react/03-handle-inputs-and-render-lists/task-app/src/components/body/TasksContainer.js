import React, { Component } from "react";

import Task from "./Task";
import AddTaskForm from "./AddTaskForm";
import { render } from "@testing-library/react";

class TasksContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          tasks: [
            {
                name: "Drink Water",
                details: "Ingest at least 8 cups of water a day to keep hydrated"
            },
            {
                name: "Eat Meat",
                details: "Eat meat for the protein needed to grow muscles."
            },
            {
                name: "Make Shake",
                details: "Make a healthy shake enough to fuel your entire day."
            }
          ],
          task: {name: "", details: ""},
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDetailChange = this.handleDetailChange.bind(this);
        this.onSubmitTask = this.onSubmitTask.bind(this);
      }
    
      handleNameChange = (e) => {
        this.setState({
          task: {
            name: e.target.value,
            details: this.state.task.details,
          }
        });
      }
    
      handleDetailChange = (e) => {
        this.setState({
          task: {
            name: this.state.task.name, 
            details: e.target.value,
          }
        });
      }

      onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
          tasks: this.state.tasks.concat(this.state.task),
          task: {name: "", details: ""},
        });
      }



    render() {
        return (
            <ul className="tasks-container">
                <h2 className="task-title">Tasks</h2>
                {this.state.tasks.map(task => {
                    return <Task task={task}/>
                })}
                <AddTaskForm 
                    onNameChange={this.handleNameChange} 
                    onDetailChange={this.handleDetailChange}
                    onSubmit={this.onSubmitTask}
                />
            </ul>
        )
    }
}

export default TasksContainer;