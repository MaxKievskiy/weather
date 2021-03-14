import React from 'react';

const Form = () => {
    const handleGetCitySubmit = e => {
        const city = e.currentTarget.city.value.trim();
        console.log(city);
    }
    return (
        <form onSubmit={handleGetCitySubmit}>
            <input type='text' name='city' placeholder='City'/>
            <button type='submit'>Get weather</button>
        </form>
    );
};

export default Form;