import React from 'react';
import ReactDOM from 'react-dom';

function BoilingVerdict(props: any) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }

type scaleNames = {
    [key: string]: boolean
}

function toCelsius(fahrenheit: any) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
function toFahrenheit(celsius: any) {
    return (celsius * 9 / 5) + 32;
  }

function tryConvert(temperature: any, convert: any) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

class TemperatureInput extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e: any) {
      this.props.onTemperatureChange(e.target.value);
    }
  
    render() {
      const scaleNames  = {
        c: 'Celsius',
        f: 'Fahrenheit'
      };
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      console.log(scale)
      return (
        <fieldset>
          <input value={temperature}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }

class CalculatorTemp extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.state = {temperature: '', scale: 'c'};
    }
  
    handleCelsiusChange(temperature: any) {
      this.setState({scale: 'c', temperature});
    }
  
    handleFahrenheitChange(temperature: any) {
      this.setState({scale: 'f', temperature});
    }
  
    render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
      return (
        <div>
          <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange} />
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />
          <BoilingVerdict
            celsius={parseFloat(celsius)} />
        </div>
      );
    }
  }
  
  export default CalculatorTemp
  export {
    CalculatorTemp
  }    