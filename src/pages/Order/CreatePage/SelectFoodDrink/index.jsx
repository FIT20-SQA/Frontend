
import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../../../../context/UserContext';
import axios from 'axios';

import './style.scss';
import ItemTypeSwitchPanel from '../../../../components/ItemTypeSwitchPanel';
import Item from '../../../../components/FoodDrinkItem';

import FoodIcon from '../../../../images/hamburger.png'
import DrinkIcon from '../../../../images/cola.png'
export default function ({ selectedItems, setSelectedItems }) {
    const [currenItemType, setCurrentItemType] = useState('Foods')
    const [foods, setFoods] = useState([])
    const [drinks, setDrinks] = useState([])

    const { jwtToken } = useContext(UserContext)

    const fetchFoods = async () => {
        const config = {
            headers: {
                'Authorization': `Bearer ${jwtToken}`
            }
        };
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/foods`, config);
        if (response.data.success) {
            setFoods(response.data.data)
            console.log('foods from server');
            console.log(response.data.data)
        }
    }


    const fetchDrinks = async () => {
        const config = {
            headers: {
                'Authorization': `Bearer ${jwtToken}`
            }
        };
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/drinks`, config);
        if (response.data.success) {
            setDrinks(response.data.data)
        }
    }

    useEffect(() => {
        fetchFoods()
        fetchDrinks()
    }, [])
    const handleSelect = (newItem) => {
        // TODO: check by id
        // add if not exists
        setSelectedItems(preVal => {
            if (preVal.some(selectedItem => selectedItem.itemName == newItem.itemName)) {
                return preVal
            }
            return [...preVal, newItem]
        })

        console.log(selectedItems);
    }


    const handleUnselect = (newItem) => {
        // TODO: check by id
        // remove if exists
        setSelectedItems(preVal => {
            if (preVal.some(selectedItem => selectedItem.itemName == newItem.itemName)) {
                console.log('filtering');
                console.log(preVal.filter(selectedItem => selectedItem.itemName !== newItem.itemName));
                return preVal.filter(selectedItem => selectedItem.itemName !== newItem.itemName);
            }
            console.log('the same');
            return [...preVal]
        })

        console.log(selectedItems);
    }

    const checkIfItemActive = (item) => {
        return selectedItems
            .some(selectedItem => selectedItem.itemName === item.itemName);
    }

    const itemTypes = [
        {
            name: 'Foods',
            icon: FoodIcon
        },
        {
            name: 'Drinks',
            icon: DrinkIcon
        }
    ]

    return (
        <div className="step-4">
            <ItemTypeSwitchPanel
                itemTypes={itemTypes}
                currentItemType={currenItemType}
                setCurrentItemType={setCurrentItemType}
            />

            <div className="item-container">

                {
                    currenItemType == 'Foods' ?
                        foods.map((food, index) => {
                            return (
                                <Item
                                    key={index}
                                    itemImage={food.image}
                                    itemName={food.name}
                                    itemDescription={food.description}
                                    itemPrice={food.price}
                                    onClick={() => handleSelect(food)}
                                    isActive={checkIfItemActive(food)}
                                    handleUnselect={() => handleUnselect(food)}
                                />
                            )
                        })
                        :
                        drinks.map((drink, index) => {
                            return (
                                <Item
                                    key={index}
                                    itemImage={drink.image}
                                    itemName={drink.name}
                                    itemDescription={drink.description}
                                    itemPrice={drink.price}
                                    onClick={() => handleSelect(drink)}
                                    isActive={checkIfItemActive(drink)}
                                    handleUnselect={() => handleUnselect(drink)}

                                />
                            )
                        })
                }

            </div>

        </div>
    )
}