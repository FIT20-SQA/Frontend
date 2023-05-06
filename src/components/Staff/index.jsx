import React from 'react';
import './style.scss';

export default function ({staffImage, staffName, staffTitle, createdAt, staffEmail, staffPhoneNumber}) {
    return (
        <div className="Staff">
            <p className='unlocked'>Unlocked</p>

            <div className="staff-info">
                <img src={staffImage} alt="" />
                <p className="staff-name">{staffName}</p>
                <p className="staff-title">{staffTitle}</p>
            </div>
            <div className="staff-account">
                <p className='created-date'><span className="bold">Created at:</span> {createdAt}</p>
            </div>
            <div className="staff-contact">
                <div className="staff-email">
                    <i class="fa-solid fa-envelope"></i>
                    <p>{staffEmail}</p>
                </div>
                <div className="staff-phone-number">
                    <i class="fa-solid fa-phone"></i>
                    <p>{staffPhoneNumber}</p>
                </div>
            </div>
        </div>
    )
}