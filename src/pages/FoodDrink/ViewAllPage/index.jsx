import React, { useState } from 'react';
import './style.scss';
import FoodIcon from '../../../images/hamburger.png'
import DrinkIcon from '../../../images/cola.png'
import Item from '../../../components/FoodDrinkItem'
export default function () {
    const foods = [
        {
            itemImage: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGFtYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            itemName: "The Juicy Stack",
            itemDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, error!",
            itemPrice: 12.2
        },
        {
            itemImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            itemName: "Veggie Delight",
            itemDescription: "A delicious medley of fresh veggies with a tangy dressing.",
            itemPrice: 8.5
        },
        {
            itemImage: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
            itemName: "Cheeseburger",
            itemDescription: "A classic burger with a juicy patty and melted cheddar cheese.",
            itemPrice: 10.0
        },
        {
            itemImage: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
            itemName: "BBQ Ribs",
            itemDescription: "Fall-off-the-bone tender ribs smothered in tangy BBQ sauce.",
            itemPrice: 15.5
        },
        {
            itemImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            itemName: "Margherita Pizza",
            itemDescription: "A thin-crust pizza topped with fresh tomatoes, basil, and mozzarella cheese.",
            itemPrice: 11.5
        },
        {
            itemImage: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            itemName: "Fish Tacos",
            itemDescription: "Soft tortillas filled with crispy battered fish, slaw, and a spicy mayo sauce.",
            itemPrice: 9.5
        },
        {
            itemImage: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
            itemName: "Caesar Salad",
            itemDescription: "Crisp romaine lettuce, garlicky croutons, and tangy Caesar dressing.",
            itemPrice: 7.5
        },
        {
            itemImage: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
            itemName: "Chicken Alfredo",
            itemDescription: "Pasta in a creamy alfredo sauce with juicy grilled chicken.",
            itemPrice: 13.5
        },
        {
            itemImage: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
            itemName: "Beef Stir Fry",
            itemDescription: "Tender beef, crisp veggies, and savory soy sauce served over rice.",
            itemPrice: 12.0
        },
        {
            itemImage: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
            itemName: "Sushi Platter",
            itemDescription: "A selection of fresh sushi rolls, nigiri, and sashimi.",
            itemPrice: 18.0
        }
    ];


    const drinks = [
        {
            itemImage: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            itemName: "Iced Coffee",
            itemDescription: "Chilled coffee served over ice",
            itemPrice: 3.99
        },
        {
            itemImage: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            itemName: "Classic Milkshake",
            itemDescription: "Creamy vanilla ice cream blended with milk and topped with whipped cream",
            itemPrice: 5.99
        },
        {
            itemImage: "https://images.unsplash.com/photo-1619158401201-8fa932695178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            itemName: "Green Tea",
            itemDescription: "Organic green tea leaves steeped in hot water",
            itemPrice: 2.99
        },
        {
            itemImage: "https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            itemName: "Hot Chocolate",
            itemDescription: "Rich and creamy hot cocoa topped with marshmallows",
            itemPrice: 4.99
        },
        {
            itemImage: "https://images.unsplash.com/photo-1592858167090-2473780d894d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            itemName: "Lemonade",
            itemDescription: "Freshly squeezed lemons mixed with water and sugar",
            itemPrice: 3.49
        },
        {
            itemImage: "https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
            itemName: "Mango Lassi",
            itemDescription: "A sweet and creamy Indian drink made with mango and yogurt",
            itemPrice: 4.99
        },
        {
            itemImage: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            itemName: "Orange Juice",
            itemDescription: "Freshly squeezed oranges for a burst of vitamin C",
            itemPrice: 3.49
        },
        {
            itemImage: "https://images.unsplash.com/photo-1587888637140-849b25d80ef9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            itemName: "Peppermint Tea",
            itemDescription: "A refreshing blend of peppermint leaves and hot water",
            itemPrice: 2.99
        },
        {
            itemImage: "https://images.unsplash.com/photo-1560526860-1f0e56046c85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            itemName: "Strawberry Smoothie",
            itemDescription: "Frozen strawberries blended with yogurt and honey",
            itemPrice: 5.99
        },
        {
            itemImage: "https://images.unsplash.com/photo-1571950006418-f226dc106482?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            itemName: "Watermelon Juice",
            itemDescription: "Freshly pressed watermelon juice for a thirst-quenching treat",
            itemPrice: 3.99
        }
    ];


    const [itemType, setItemType] = useState('food')
    const handleSwitchItemtype = (type) => {
        setItemType(type)
    }
    return (
        <div className='FoodDrinkViewAllPage'>
            <div className="switch-btn-container">
                <div className={itemType == 'food' ? 'switch-btn active-btn' : 'switch-btn'} onClick={() => handleSwitchItemtype('food')}>
                    <img src={FoodIcon} alt="" />
                    Foods
                </div>
                <div className={itemType == 'drink' ? 'switch-btn active-btn' : 'switch-btn'} onClick={() => handleSwitchItemtype('drink')}>
                    <img src={DrinkIcon} alt="" />
                    Drinks
                </div>
            </div>

            <div className="item-container">

                {
                    itemType == 'food' ?
                foods.map((food, index) => {
                    return (
                        <Item
                            key={index}
                            itemImage={food.itemImage}
                            itemName={food.itemName}
                            itemDescription={food.itemDescription}
                            itemPrice={food.itemPrice}
                        />
                    )
                })
                :
                drinks.map((drink, index) => {
                    return (
                        <Item
                            key={index}
                            itemImage={drink.itemImage}
                            itemName={drink.itemName}
                            itemDescription={drink.itemDescription}
                            itemPrice={drink.itemPrice}
                        />
                    )
                })
            }

            </div>
        </div>
    )
}