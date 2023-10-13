import React from 'react';
import './MealDetails.css';

const MealDetails = (props) => {

    // console.log(props);

    const { idMeal, strMeal, strCategory, strArea } = props.meal;


    return (
        <div className='meals'>
            <h3>Meal Name: {strMeal}</h3>
            <p>Meal Price: {idMeal}</p>
            <p>Country: {strArea}</p>
            <p>Meal Type: {strCategory}</p>
        </div>
    );
};

export default MealDetails;