import React from 'react';
import './style.scss';
import MovieDetail from '../MovieDetail';
import SeatOrderItem from '../SeatOrderItem';
import FoodDrinkOrderItem from '../FoodDrinkOrderItem';

export default function ({ posterLink, movieTitle, releaseDate }) {
    return (
        <div className="OrderDetail">
            <div className="text">Order Details</div>
            <div className="movie-container">
                <MovieDetail
                    posterLink={posterLink}
                    movieTitle={movieTitle}
                    releaseDate={releaseDate}
                    // onClick={() => handleClickMovie(0)}
                    displayLargePoster={false}
                />
            </div>

            <div className="showtime-info-container">
                <h1 className='text'>Showtime information:</h1>
                <div className="showtime-info">
                    <p className="month">May</p>
                    <p className="dayOfMonth">23</p>
                    <p className="dayOfWeek">Tue</p>
                    <p>|</p>
                    <p className="showtime-spot">12 PM - 14 PM</p>
                </div>

            </div>


            <div className="seat-info">
                <h1 className='text'>Purchased Seat:</h1>
                <div className="heading">
                    <p className="seatCode-text">Seatcode</p>
                    <p className="theater-room-text">Theater Room</p>
                    <p className="price-text">Price</p>
                </div>
                <div className="seat-order-item-container">
                    <SeatOrderItem />
                    <SeatOrderItem />
                    <SeatOrderItem />
                    <SeatOrderItem />
                </div>
                <p className="totalPrice">Total: $102</p>
            </div>

            <div className="item-container">


                <h1 className='text'>Purchased Food:</h1>
                <div className="item-container">
                    <FoodDrinkOrderItem />
                    <FoodDrinkOrderItem />
                    <FoodDrinkOrderItem />
                    <FoodDrinkOrderItem />
                </div>
                <p className="totalPrice">Total: $102</p>

                <h1 className='text'>Purchased Drink:</h1>
                <div className="item-container">
                    <FoodDrinkOrderItem />
                    <FoodDrinkOrderItem />
                    <FoodDrinkOrderItem />
                    <FoodDrinkOrderItem />
                </div>
                <p className="totalPrice">Total: $102</p>

            </div>

            <div className="bill">
                <div className="text-container">
                    <p className="seat-price">Seat price:</p>
                    <p className='food-price'>Food price:</p>
                    <p className='drink-price'>Drink price:</p>
                    <p className="order-total-price">Order total price:</p>

                </div>
                <div className="price-container">
                    <p className="seat-price">$10</p>
                    <p className='food-price'>$20</p>
                    <p className='drink-price'>$30</p>
                    <p className="order-total-price">$100.50</p>
                </div>
            </div>

           
        </div>
    )

}