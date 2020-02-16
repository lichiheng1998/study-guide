import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Login() {
    return (
        <div className='login_container'>
            <div className='login_container__block'>
                <div className='login_container__block__group'>
                    <label>Username: </label>
                    <input type="text" id="username" name="username" />
                    <span><Link to="/login">Don't have an account?</Link></span>
                </div>
                <div className='login_container__block__group'>
                    <label>Password: </label>
                    <input type="password" id="password" name="password" />
                    <span><Link to="/login">Forget your password?</Link></span>
                </div>
                <button className="button"><span>Login</span></button>
            </div>
        </div>
    );
}

export default Login;
