import React from 'react';
import './style.scss';

export default function ({ itemImage, itemName, itemDescription, itemPrice }) {
    return (
        <div className="Item">
            <img src={itemImage} alt="" className="item-image" />
            <p className="item-name">{itemName}</p>
            <p className='item-description'>{itemDescription}</p>
            <p className="item-price">${itemPrice}</p>
        </div>
    )
}