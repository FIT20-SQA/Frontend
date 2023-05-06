import React from 'react';
import './style.scss';
import Staff from '../../../components/Staff';

export default function () {
    const staffs = [
        {
            staffImage: "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            staffName: "Dat Dang",
            staffTitle: "Staff",
            createdAt: "15/04/2023",
            staffEmail: "as2@gmail.com",
            staffPhoneNumber: "02195125126"
        },
        {
            staffImage: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            staffName: "John Doe",
            staffTitle: "Staff",
            createdAt: "12/05/2023",
            staffEmail: "johndoe@gmail.com",
            staffPhoneNumber: "02195678563"
        },
        {
            staffImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            staffName: "Jane Doe",
            staffTitle: "Staff",
            createdAt: "02/06/2023",
            staffEmail: "janedoe@gmail.com",
            staffPhoneNumber: "02195987654"
        },
        {
            staffImage: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            staffName: "Bob Smith",
            staffTitle: "Staff",
            createdAt: "24/06/2023",
            staffEmail: "bobsmith@gmail.com",
            staffPhoneNumber: "02195432156"
        },
        {
            staffImage: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            staffName: "Emily Jones",
            staffTitle: "Staff",
            createdAt: "06/07/2023",
            staffEmail: "emilyjones@gmail.com",
            staffPhoneNumber: "02195876543"
        },
        {
            staffImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            staffName: "David Lee",
            staffTitle: "Staff",
            createdAt: "16/07/2023",
            staffEmail: "davidlee@gmail.com",
            staffPhoneNumber: "02195765432"
        },
        {
            staffImage: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            staffName: "Sarah Brown",
            staffTitle: "Staff",
            createdAt: "27/07/2023",
            staffEmail: "sarahbrown@gmail.com",
            staffPhoneNumber: "02195213456"
        },
        {
            staffImage: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            staffName: "Tom Wilson",
            staffTitle: "Staff",
            createdAt: "05/08/2023",
            staffEmail: "tomwilson@gmail.com",
            staffPhoneNumber: "02195874563"
        },
        {
            staffImage: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            staffName: "Karen Thompson",
            staffTitle: "Staff",
            createdAt: "16/08/2023",
            staffEmail: "karenthompson@gmail.com",
            staffPhoneNumber: "02195987654"
        },
        {
            staffImage: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            staffName: "Michael Kim",
            staffTitle: "Staff",
            createdAt: "27/08/2023",
            staffEmail: "michaelkim@gmail.com",
            staffPhoneNumber: "02195678543"
        }
    ];

    return (
        <div className='StaffViewAllPage'>
            {staffs.map((staff, index) => {
                return (
                    <Staff
                        key={index}
                        staffImage={staff.staffImage}
                        staffName={staff.staffName}
                        staffTitle={staff.staffTitle}
                        createdAt={staff.createdAt}
                        staffEmail={staff.staffEmail}
                        staffPhoneNumber={staff.staffPhoneNumber}
                    />
                )
            })}



        </div>
    )
}