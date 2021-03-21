import React from 'react';
import {baseURL, key} from "../utils/constants";
import Weather from "./Weather";
import Form from "./FormControl";

class Data extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            message: 'Enter city name'
        }
    }

    getWeather = async (city) => {
        try {
            const response = await fetch(`${baseURL}?q=${city}&appid=${key}&units=metric&lang=ru`);
            const data = await response.json();
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
        } catch (e) {
            this.setState({message: 'Enter correct city name', weatherInfo: null});
        }
    }

        //     .then(response => {
        //         if (response.ok) {
        //             return response.json();
        //         }
        //         if (response.status === 400) {
        //             throw new Error('Empty')
        //         }
        //         if (response.status === 404) {
        //             throw new Error('Unknown city')
        //         }
        //         throw  new Error("Unknown error")
        //     })
        //     .then((data => console.log(data)
        //     ))
        //     .then(data =>
        //         this.setState({
        //             weatherInfo: {
        //                 country: data.sys.country,
        //                 city: data.name,
        //                 temp: data.main.temp,
        //                 pressure: data.main.pressure,
        //                 sunset: data.sys.sunset,
        //             },
        //             message: null
        //         })
        //     )
        //     .catch(e => {
        //         this.setState({message: 'Enter correct city name'});
        //     })
        //


        render()
        {
            return (
                <div>
                    <Form getWeather={this.getWeather}/>
                    <Weather weather={this.state.weatherInfo} message={this.state.message}/>
                </div>
            );
        }

}


export default Data;