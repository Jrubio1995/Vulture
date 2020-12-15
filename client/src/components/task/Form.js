import React, { useContext, useState, useEffect } from 'react';
import projectContext from '../../context/Project/ProjectContext';
import taskContext from '../../context/Task/TaskContext';

const Form = () => {
    // extract if a project is active
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    // get state and functions function from taskState
    const tasksContext = useContext(taskContext);
    const { selectedittask, errortask, addTask, validateTask,
        getTasks, updateTask, resetTask } = tasksContext;

    // effect who detect if is a selected task for edit
    useEffect(() => {
        if (selectedittask !== null) {
            setTask(selectedittask)
        } else {
            setTask({
                name: ''
            })
        }
    }, [selectedittask]);

    // state of form
    const [task, setTask] = useState({
        name: '',
    })

    // get project name
    const { name } = task;

    // if is no selected project
    if (!project) return null;

    // array destructuring to get the actual project
    const [actualProject] = project;

    // read form values 
    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        // form validation
        if (name.trim() === '') {
            validateTask();
            return;
        }
        // if is Edit or New Task
        if (selectedittask === null) {
            // add the new task to the state
            task.project = actualProject._id;
            addTask(task);
        } else {
            updateTask(task);
            // eliminate selectedtask from state
            resetTask()
        }
        // get and filter the tasks from actual project
        getTasks(actualProject.id)
        // reinitiate form
        setTask({
            name: '',
        })
    }
    return (
        <div className="task-form">
            <h2 className="task-form-title">ADD TASK TO THIS HOBBY</h2>
            <form
                onSubmit={onSubmit}
            >
                <div className="input-container">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Task name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <input
                        type="submit"
                        className="btn btn-primary btn-block btn-submit"
                        value={selectedittask ? 'Edit Task' : 'Add New Task'}
                    />
                </div>
            </form>
            {errortask ? <p className="message error">HOBBY NAME IS A REQUUIRED FEILD</p>
                : null}
        </div>
    )
}

export default Form;