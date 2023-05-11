import React from 'react';
import './style.scss';

export default function () {
    return (
        <div className='UserProfile'>
            <div className="image-container">
                <img src="https://images.unsplash.com/photo-1570393080660-de4e4a15a247?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" className="cover-image" />
                <div className="avatar-container">
                    <img src="https://plus.unsplash.com/premium_photo-1678935941839-e66f46191c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="" className="avatar-image" />
                    <h1 className="user-name">John Doe</h1>
                </div>
            </div>

            <div className="content-container">
                <div className="user-info">
                    <p> <span className="bold">Role:</span> Staff</p>
                    <p className='joined-date'><span className="bold">Joined at:</span> 19/03/2023</p>
                    <div className="staff-contact">
                        <p className="staff-email">
                            <span className="bold">Email:</span> lorem@gmailcom
                        </p>
                        <p className="staff-phone-number">
                            <span className="bold">Phone Number:</span> 028151661
                        </p>
                    </div>
                </div>
                <div className="btn-container">
                    <p>Change cover image</p>
                    <p>Change avatar image</p>
                    <p>Change password</p>
                </div>
            </div>

            <p className="user-bio">Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, fugit!ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>

        </div>
    )
}