import React, { Component } from 'react';
import './App.css';
import CurrencyConverter from './Components/CurrencyConverter'
import CurrentDisplay from './Components/CurrencyDisplay'

class App extends Component {
  render() {
    return (
      <>
        <h2>Render Props</h2>
        <CurrencyConverter render={(currencyData, amount) => {
          <p>
            Us Dollar ${amount.tofixed(2)} - {currencyData.name}{' '}
            {currencyData.symbol}
            {(amount * currencyData.rate).toFixed(2)}
          </p>
        }}
      />
      </>
    );
  }
}

export default App;
