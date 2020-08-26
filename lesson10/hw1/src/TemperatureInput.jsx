import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

const TemperatureInput = ({scale, temperature, handleChange}) => 
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={handleChange} />
      </fieldset>;

export default TemperatureInput