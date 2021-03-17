import React from 'react';
import {baseURL, key} from "../utils/constants";
import Form from "./Form";
import Weather from "./Weather";

class Data extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            message: 'Enter city name'
        }
    }

    getWeather = (city) =>
        fetch(`${baseURL}?q=${city}&appid=${key}&units=metric&lang=ru`)
            .then(response => response.json())
            .then((data => console.log(data)
            ))
            .then(data =>
                this.setState({
                    weatherInfo: {
                        country: data.sys.country,
                        city: data.name,
                        temp: data.main.temp,
                        pressure: data.main.pressure,
                        sunset: data.sys.sunset,
                    },
                    message: null
                })
            )
            .catch(e => {
                this.setState({message: 'Enter correct city name'});
            })


    render() {
        return (
            <div>
                <Form getWeather={this.getWeather}/>
                <Weather weather={this.state.weatherInfo} message={this.state.message}/>
            </div>
        );
    }
}


export default Data;