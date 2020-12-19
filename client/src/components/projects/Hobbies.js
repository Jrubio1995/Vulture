import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import TaskForm from '../../components/tasks/Form';
import TaskList from '../../components/tasks/List';
import AuthContext from '../../context/autentification/Context';


const Projects = () => {
    // get the login info
    const authContext = useContext(AuthContext);
    const { loggedinUser } = authContext;

    useEffect(() => {
        loggedinUser();
        // eslint-disable-next-line
    }, [])

    return (
        <div className="container-app">
            <Sidebar />

            <div className="principal-section">
                <Header />
                <main>
                    <TaskForm />
                    <div className="task-container">
                        <TaskList />
                    </div>
                </main>
            </div>
        </div>

    )
}

export default Projects;