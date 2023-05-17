import React, { useState } from 'react';
import './style.scss';

import AppLogo from '../../../images/logo.png'
export default function () {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState(false)


    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleLogin = () => {
        console.log('handleLogin');
    }
    return (
        <div className="Login">
            <div className="page-content">
                <div className="left">
                    <img src="https://plus.unsplash.com/premium_photo-1683740128681-a2da98002093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGNpbmVtYXxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />
                </div>
                <div className="right">
                    <div className="form">
                        <div className="app-info">
                            <img className='app-logo' src={AppLogo} alt="" />
                            <span className="app-name">MovieMate</span>
                        </div>
                        <p className="text">Login</p>

                        <div className="item">
                            <p className="item-text">Email: </p>
                            <input type="text"
                                required={true}
                                placeholder='Enter your email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                        </div>

                        <div className="item">
                            <p className="item-text">Password: </p>
                            <input type={showPassword ? 'text' : 'password'}
                                placeholder='Enter password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={e => {
                                    if (e.key == "Enter") {
                                        handleLogin()
                                    }
                                }}
                            />
                        </div>

                        <p className="show-password-btn" onClick={toggleShowPassword}>
                            {showPassword ? 'Hide password' : 'Show password'}
                        </p>
                        <div className="gradient-btn login-btn" onClick={handleLogin}>Login</div>
                    </div>
                </div>
            </div>
        </div>
    )
}