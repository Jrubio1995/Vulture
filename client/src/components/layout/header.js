import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../src/context/autentification/Context';

const Header = () => {
    // get the login info
    const authContext = useContext(AuthContext);
    const { user, loggedinUser, closeSession } = authContext;

    useEffect(() => {
        loggedinUser();
        // eslint-disable-next-line
    }, [])
    return (
        <header className="app-header">
            {user ? <p className="username">Welcome <span>{user.name}</span></p> : null}

            <nav className="main-nav">
                <button className="btn btn-blank close-session"
                    onClick={() => closeSession()}
                >Logout</button>
            </nav>
        </header>
    )
}

export default Header;
