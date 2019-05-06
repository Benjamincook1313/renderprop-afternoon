import React, { Component } from 'react'
import CurrencyDisplay from '../Components/CurrencyDisplay'

class Currency extends Component {
    state = {
      currencyChosen: false,
      selectedCurrency: 'Selected Currency',
      amount: 0
    }

    handleAmountIncrease = () => {
      this.setState((prevstate) => {
        return { 
          amount: (prevState.amount += 1)
        }
      })
    }

    handleAmountDecrease = () => {
      this.setState((prevState) => {
        return {
          amount: (prevState.amount -= 1)
        }
      })
    }

    handleOptionSelect = () => {
      const userValue = e.target.valuethis.setState(() => {
        return {
          selectedCurrency: userValue,
          currencyChosen: userValue === 'Select Currency' ? false : true
        }
      })
    }
  
  render() {
    const currencyData = [
      { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
      { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
      { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
      { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
      { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
    ]

    const currencyOption = currencyData.map((currency, index) => (
      <option key={index} value={index}>
        {currency.name}
      </option>
    ))

    return(
      <div>
        <select 
          value={this.state.selectedCurrency} 
          onChange={this.handleOptionSelect}>
          <option value='Select Currency'>Select Currency</option>
          {currencyOptions}
        </select>
        <div>
          <button className='add' onClick={this.handleAmountIncrease}>+</button>
          <button className='minus' onClick={this.handleAmountDecrease}>-</button>
        </div>
        {this.props.render(
          currencyData[this.state.state.selectedCurrency],
          this.state.amount
        )}

        {this.state.currencyChosen ? (
          this.props.render(
            currencyData[this.state.selectedCurrency],
            this.state.amount
          )
        ) : (
              <p>Please Select Currency</p>
        )}
      </div>
    )
  }
}

const ExchangedCurrency = withCurrency(CurrencyDisplay)

export default ExchagedCurrency 