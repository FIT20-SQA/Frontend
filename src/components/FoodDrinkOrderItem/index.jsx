import React from 'react';
import './style.scss';

export default function ({}) {
    return (
        <div className="FoodOrderItem">
            <img className="itemImage" src="https://plus.unsplash.com/premium_photo-1676049461949-185dcea09d77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcGNvcm58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""  />
            <p className="itemName">Savory Golden Kernel Explosion Popcorn Delight</p>
            <p className="unitPrice">$20.5</p>
            <p className="quantity">2</p>
            <p className="total">$50</p>
        </div>
    )
}