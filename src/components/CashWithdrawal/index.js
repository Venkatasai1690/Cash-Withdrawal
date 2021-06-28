// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  getFirstCharOfName = name => name.slice(0, 1)

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = this.getFirstCharOfName(name)
    return (
      <div className="app-container">
        <div className="withdrawal-container">
          <div className="title-container">
            <div className="title-logo">{initial}</div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <p className="amount">{balance}</p>
          </div>
          <p className="rupee">In Rupees</p>
          <h1 className="withdraw">Withdraw</h1>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="Denomination-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
