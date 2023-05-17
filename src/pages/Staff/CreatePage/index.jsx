import React, { useState } from 'react';
import './style.scss';

export default function () {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    return (
        <div className='StaffAddPage'>
            <div className="text">Add Staff</div>
            <div className="form">
                <div className="item">
                    <p className="item-text">Name: </p>
                    <input type="text"
                        placeholder='Enter staff first name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div className="item">
                    <p className="item-text">Last Name: </p>
                    <input type="text"
                        placeholder='Enter staff last name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div className="item">
                    <p className="item-text">Email: </p>
                    <input type="email"
                        placeholder='Enter staff email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="item password">
                    <p className="item-text">Password: </p>
                    <input type={showPassword ? 'text' : 'password'}
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="show-password-btn" onClick={toggleShowPassword}>
                        {showPassword ? 'Hide' : 'Show'}

                    </p>
                </div>

                <div className="item confirm-password">
                    <p className="item-text">Confirm  Password: </p>
                    <input type={showConfirmPassword ? 'text' : 'password'}
                        placeholder='Confirm password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <p className="show-password-btn" onClick={toggleShowConfirmPassword}>
                        {showConfirmPassword ? 'Hide' : 'Show'}
                    </p>
                </div>


                <p className="gradient-btn save-btn">
                    Save
                </p>
            </div>
        </div >
    )
}