'use client';
import React from 'react';
import ToppingCard, { Topping } from './topping-card';

 const toppings = [
    {id: '1', name: 'Chicken', image: '/Chicken.png', price: 50, isAvailable: true},
    {id: '2', name: 'Jelapeno', image: '/Jelapeno.png', price: 30, isAvailable: true},
    {id: '3', name: 'Cheese', image: '/Cheese.png', price: 20, isAvailable: true},
]

const ToppingList = () =>{
    const [selectedToppings, setSelectedToppings] = React.useState([toppings[0]]);

    const handleCheckBoxCheck = (topping: Topping) =>{
        const isAlreadyExists = selectedToppings.some((element) => element.id === topping.id);

        if(isAlreadyExists){
            setSelectedToppings((prev) => prev.filter(element => element.id !== topping.id));
            return;
        }
        setSelectedToppings((prev) => [...prev, topping]);
};

  return (
    <section className="mt-6">
        <h3>Extra Toppings</h3>
        <div className='grid grid-cols-3 gap-4 mt-2'>
            {
                toppings.map((topping) =>{
                    return (
                    <ToppingCard topping={topping} key={topping.id}
                    selectedToppings={selectedToppings}
                    handleCheckBoxCheck={handleCheckBoxCheck}/>
                    );
                })
            }
        </div>
    </section>
  );
};

export default ToppingList;
