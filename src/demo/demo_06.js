/**
 * Created by lihuima on 2017/7/18.
 * https://facebook.github.io/react/docs/lifting-state-up.html
 */
import React , { Component } from 'react';

const scaleNames = {
    'c': 'celsius',
    'f': 'fahrenheit',
};
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}
class TemperatureInput extends Component {

    changeHandle = (e) => {
        this.props.onTemperatureChange(e.target.value);
    };
    render(){
        const scale = this.props.scale;
        const temperature = this.props.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input type="text" value={temperature} onChange={this.changeHandle}/>
            </fieldset>
        )
    }
}

class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {temperature: '', scale: 'c'};
    }
    handleCelsiusChange = (temperature) => {
        this.setState({scale: 'c', temperature});
    };
    handleFahrenheitChange = (temperature) => {
        this.setState({scale: 'f', temperature});
    };

    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale==='f'?tryConvert(temperature,toCelsius):temperature;
        const fahrenheit = scale==='c'?tryConvert(temperature,toFahrenheit):temperature;
        return(
            <div>
                <TemperatureInput scale="c" onTemperatureChange={this.handleCelsiusChange} temperature={celsius}/>
                <TemperatureInput scale="f" onTemperatureChange={this.handleFahrenheitChange} temperature={fahrenheit}/>
                <BoilingVerdict celsius={parseFloat(celsius)}/>
            </div>
        )
    }
}

export { Calculator };