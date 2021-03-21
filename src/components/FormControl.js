import React from "react";

class FormControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        }
    }

    handleChange = (e) => {
        this.setState({city:e.target.value})

    }
    handleClick = () => {
        this.props.getWeather(this.state.city)
        this.setState({city: ''})
    }
    render() {
        return (
            <div>
                <input onChange={this.handleChange}
                       type='text'
                       placeholder='City'
                       value={this.state.city}/>
                <button onClick={this.handleClick}>Get Weather</button>
            </div>
        );
    }

}
export default FormControl;