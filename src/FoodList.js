import React, { useState, useEffect } from 'react';

 
function FoodList() {
  const [food, setFood] = useState([
    {
      id : 1,
      name : 'Bún chả'
    },
    {
      id : 2,
      name : 'Phở'
    },
    {
      id : 3,
      name : 'Bánh mì'
    },
  ]);
  useEffect(() => {
    console.log('FoodList mounted');
  return() => {
    console.log('FoodList unmounted');
  };
  },
  []);
  const addFood = (newFoodName) => {
    if (food.some((foods) => foods.name === newFoodName)) {
      console.log('Tên món ăn đã tồn tại')
      return;
    }
    setFood(NFoods => [
    ...NFoods,
    {
    id: NFoods.length + 1,
    name: newFoodName
    }
    ]);
    };
  const removeFood = (id) => {
    setFood(food.filter(foods => foods.id !== id));
  };
  console.log('FoodList mounted');
  return (
    <div>
      <h1>Food List</h1>
      <ul>
      {food.map(food => (
        <li><food key={food.id}>{food.id}.{food.name} </food></li>
      ) )}
      </ul>
        <button onClick={() => addFood('Gà')}>Thêm món mới </button>
        <button onClick={() => removeFood(4)}>Xóa món ăn</button>
    </div>
  );
}

export default FoodList;
