import React, { useEffect } from 'react';
import './style.scss';
import MovieDetail from '../../components/MovieDetail';
import ThreaterRoom from '../../components/ThreaterRoom';
import { useState } from 'react';
import SeatChart from '../../components/SeatChart';
import AddPriceRateButton from '../../components/AddPriceRateBtn'
import { colors } from '../../utils/utils.js'
import PriceRate from '../../components/PriceRate';
export default function () {
    console.log('render');
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
            roomName: 'Room C24',
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

    const setupDefaultRowColors = () => {
        const colorsArr = []
        for (let i = 0; i < roomData[currentRoomIndex].rowNum; i++) {
            colorsArr.push("#F8F6F4") // default color  
        }
        return colorsArr
    }

    const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
    const handleClick = (index) => {
        setCurrentRoomIndex(index);
    }
    const [priceRates, setPriceRates] = useState([]);
    const [showAddPriceBtn, setShowAddPriceBtn] = useState(false)
    const [rowColors, setRowColors] = useState(() => setupDefaultRowColors())
    const [priceRateLastRowNum, setPriceRateLastRowNum] = useState(1)


    useEffect(() => {
        const colosArr = setupDefaultRowColors()
        setRowColors(colosArr)
    }, [currentRoomIndex])

    useEffect(() => {

        // set the colors for rows based on the price rates
        let currentRow = 0;
        const colorArr = []
        for (let i = 0; i < priceRates.length; i++) {
            const color = colors[i % colors.length]
            for (let j = currentRow; j <= priceRates[i].toRow; j++) {
                colorArr[j - 1] = color // index starts rrom 0, it first row is 1
                currentRow ++
            }
        }

        
        // set the rest of the rows to default color
        for (let i = currentRow; i <= roomData[currentRoomIndex].rowNum; i++) {
            colorArr[i - 1] = "#F8F6F4" // index starts rrom 0, it first row is 1
        }
        

        setRowColors(colorArr)

    }, [priceRates.length])

    const addMorePriceRate = () => {
        setShowAddPriceBtn(true)
    }

    const deleteLastPriceRate = () => {
        // remove the last element from the array priceRates
        const lastPriceRate = priceRates[priceRates.length - 1]
        setPriceRates(prevArr => prevArr.slice(0, prevArr.length - 1))

        setPriceRateLastRowNum(lastPriceRate.fromRow) // the next price will the starts from the "from row" of the deleted price rate

    }

    const handleAdd = (from, to, price) => {
        setPriceRates([...priceRates, {
            fromRow: from,
            toRow: to,
            price: price,
        }])
        setPriceRateLastRowNum(Number(to) + 1)
        setShowAddPriceBtn(false)

    }

    const handleCancel = () => {
        setShowAddPriceBtn(false)
    }


    return (
        <div className='MovieSchedulingPage'>
            <p className="movie-scheduling-text">Movie Scheduling</p>

            <MovieDetail
                displayLargePoster={false}
            />

            <div className="picker-container">
                <div className="showtime-picker">
                    <p className="text">Pick a date: </p>
                    <input type="date" />
                </div>
                <div className="showtime-spot-picker">
                    <p className="text">Choose showtime spot: </p>
                    <select name="" id="">
                        <option value="10-12">10 AM - 12 AM</option>
                        <option value="12-14">12 AM - 14 AM</option>
                        <option value="14-16">14 AM - 16 AM</option>
                        <option value="16-18">16 AM - 18 AM</option>
                        <option value="18-20">18 AM - 20 AM</option>
                        <option value="20-22">20 AM - 22 AM</option>
                    </select>
                </div>


            </div>

            <div className="theater-room-picker">
                <p className="text">Choose Theater room: </p>
                <div className="theater-room-container">
                    {roomData.map((room, index) => {
                        return <ThreaterRoom
                            roomName={room.roomName}
                            roomImage={room.roomImage}
                            active={currentRoomIndex == index}
                            onClick={() => handleClick(index)}
                        />
                    })}
                </div>
            </div>


            <div className="price-setter">
                <div className="text">Set the pricing:</div>
                <div className="setter">
                    <div className="room-info">
                        <h1 className="room-name">
                            {roomData[currentRoomIndex].roomName}
                        </h1>
                        <p><span className="bold">Number of rows:</span> {roomData[currentRoomIndex].rowNum}</p>
                        <p><span className="bold">Number of seats per row:</span> {roomData[currentRoomIndex].seatNumPerRow}</p>
                        <p><span className="bold">Capacity:</span> {roomData[currentRoomIndex].rowNum * roomData[currentRoomIndex].seatNumPerRow}</p>


                        <div className="price-rate-container">
                            {priceRates.map((priceRate, index) => {
                                return <PriceRate
                                    color={colors[index % colors.length]}
                                    deleteable={index == priceRates.length - 1} // user can only delete the last price in the list
                                    onDelete={deleteLastPriceRate}
                                    from={priceRate.fromRow}
                                    to={priceRate.toRow}
                                    price={priceRate.price}
                                />
                            })}
                        </div>

                        {
                            showAddPriceBtn ?
                                <AddPriceRateButton
                                    handleAdd={handleAdd}
                                    handleCancel={handleCancel}
                                    min={priceRateLastRowNum}
                                    max={roomData[currentRoomIndex].rowNum}
                                    setPriceRateLastRowNum={setPriceRateLastRowNum} // the next price rate will start from the row at the position priceRateLastRowNum
                                    color={colors[priceRates.length % colors.length]}
                                />
                                :
                                <div className="add-price-rate-btn" onClick={addMorePriceRate}>
                                    <p>Add price rate</p>
                                </div>
                        }

                    </div>
                    <SeatChart
                        seatNumPerRow={roomData[currentRoomIndex].seatNumPerRow}
                        rowNum={roomData[currentRoomIndex].rowNum}
                        rowColors={rowColors}
                    />
                </div>

            </div>
        </div>
    )
}