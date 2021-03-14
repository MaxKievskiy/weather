import React from 'react';
import {baseURL, key} from "../utils/constants";

const Form = () => {
    const handleGetCitySubmit = event => {
        event.preventDefault();
        const city = event.currentTarget.city.value.trim();
        fetch(`${baseURL}?q=${city}&appid=${key}&units=metric&lang=ru`)
            .then(response => response.json())
            .then((data => console.log(data)
            ))
    }
    return (
        <form onSubmit={handleGetCitySubmit}>
            <input type='text' name='city' placeholder='City'/>
            <button type='submit'>Get weather</button>
        </form>
    );
};

export default Form;