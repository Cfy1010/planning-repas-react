import React, { useState } from 'react';
import MealList from "./components/MealList"

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  const handleChange = (e) => { setCalories(e.target.value)};
  
  const getMealData = () => {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=7f30ad9a028145c4934ac66cb670918b&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log('error');
      });
  }

  return (
    <div className='App'>
      <section className='controls'>
        <input
          type='number '
          placeholder='Calories'
          onChange={handleChange}
        />
      </section>
      <button onClick={getMealData}>Mon plan repas quotidien</button>
      {mealData && <MealList MealList={ mealData}/>}
    </div>
  );
}

export default App;
