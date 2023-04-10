import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {
    
    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        //history.push('/marvel'); // agrega la pagina a la historia de navegacio

        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload:{
                name:'Pablo'
            }
        });
        
        history.replace(lastPath); // reemplaza la pagina actual por la nueva en el historial
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button className="btn btn-primary" onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}
