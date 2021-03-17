import React from 'react';

const Weather = ({weather, message}) => {
    if(message){
        return (
            <div className='infoWeath'>
                <p>{message}</p>
            </div>
        );
    }
    else{
        return (
            <div className='infoWeath'>
                <p>Location: {weather.country}, {weather.city}</p>
                <p>Temperature: {weather.temp}</p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sunset: {new Date(weather.sunset * 1000).toTimeString()}</p>
            </div>
        );
    }
};

export default Weather;