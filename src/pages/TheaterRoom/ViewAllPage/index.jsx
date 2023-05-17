import React, { useState } from 'react';
import './style.scss';
import ThreaterRoom from '../../../components/ThreaterRoom';
import SeatChart from '../../../components/SeatChart';
import RoomDetail from '../../../components/RoomDetail';
import AddTheaterRoomBtn from '../../../components/AddTheaterRoomBtn';
export default function () {
    const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
    const roomData = [
        {
            roomImage: 'https://images.unsplash.com/photo-1485095329183-d0797cdc5676?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            roomName: 'Room C21',
            rowNum: 12,
            seatNumPerRow: 10,
        },
        {
            roomImage: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            roomName: 'Room C22',
            rowNum: 13,
            seatNumPerRow: 12,
        },
        {
            roomImage: 'https://th.bing.com/th/id/R.84d573dc3c9aa435e95d46e946ac3eb8?rik=sVIy6D3SV4pZKg&pid=ImgRaw&r=0',
            roomName: 'Room C23',
            rowNum: 10,
            seatNumPerRow: 18,
        },
        {
            roomImage: 'https://images.unsplash.com/photo-1577382144834-8a80d92b925c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            roomkName: 'Room C24',
            rowNum: 9,
            seatNumPerRow: 11,
        },
        {
            roomImage: 'https://plus.unsplash.com/premium_photo-1661762437859-c41fa943637c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            roomName: 'Room C25',
            rowNum: 14,
            seatNumPerRow: 19,
        },
        {
            roomImage: 'https://images.unsplash.com/photo-1596445836561-991bcd39a86d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            roomName: 'Room C26',
            rowNum: 8,
            seatNumPerRow: 15,
        }
    ];

    const handleClick = (index) => {
        setCurrentRoomIndex(index);
    }

    const handleNext = () => {
        if (currentRoomIndex < roomData.length - 1) {
            setCurrentRoomIndex(prevIndex => prevIndex + 1);

        }
    }

    const handlePrev = () => {
        if (currentRoomIndex > 0) {
            setCurrentRoomIndex(prevIndex => prevIndex - 1);
        }
    }


    return (
        <div className='TheaterViewAllPage'>
            <div className="image-container">
                {currentRoomIndex > 0
                    ?
                    <div className="image-left">
                        <img src={roomData[currentRoomIndex - 1].roomImage} alt="" />
                        <p className="left-btn" onClick={handlePrev}><i class="fa-solid fa-chevron-left"></i></p>
                    </div>
                    :
                    <div className="empty-box">
                    </div>
                }

                <div className="image-center">
                    <img src={roomData[currentRoomIndex].roomImage} alt="" />
                    <p className="room-name">{roomData[currentRoomIndex].roomName}</p>
                </div>

                {currentRoomIndex < roomData.length - 1
                    ?
                    <div className="image-right">
                        <img src={roomData[currentRoomIndex + 1].roomImage} alt="" />
                        <p className="right-btn" onClick={handleNext}><i class="fa-solid fa-chevron-right"></i></p>
                    </div>
                    :
                    <div className="empty-box">
                    </div>
                }

            </div>

            <div className="room-container">
                <AddTheaterRoomBtn />
                {roomData.map((room, index) => {
                    return <ThreaterRoom
                        roomName={room.roomName}
                        roomImage={room.roomImage}
                        active={currentRoomIndex == index}
                        onClick={() => handleClick(index)}
                    />
                })}
            </div>

            <RoomDetail 
                theaterRoom={roomData[currentRoomIndex]} 
            />



        </div>


    )
}