import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MealDetails from '../MealDetails/MealDetails';

const Meal = () => {

    const meal = useLoaderData();
    const { idMeal } = meal.meals;
    // console.log(meal);

    return (
        <div>
            <h2>There are total {meal.meals.length} meals.</h2>
            {
                meal.meals.map(meal =>
                    <MealDetails key={idMeal} meal={meal}></MealDetails>)

            }
        </div>
    );
};

export default Meal;