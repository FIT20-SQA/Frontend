import React from 'react';
import './style.scss';
import { truncateString } from '../../utils/utils';
export default function ({ itemImage, itemName, itemDescription, itemPrice, onClick }) {
    return (
        <div className="Item" onClick={onClick}>
            <img src={itemImage} alt="" className="item-image" />
            <p className="item-name">{truncateString(itemName, 10)}</p>
            <p className='item-description'>{truncateString(itemDescription, 15)}</p>
            <p className="item-price">${itemPrice}</p>
        </div>
    )
}