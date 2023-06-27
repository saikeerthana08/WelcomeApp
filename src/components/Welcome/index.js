import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  buttonClick = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const text = this.getText()

    return (
      <div className="bg-container">
        <h1 className="title">Welcome</h1>
        <h1 className="greeting">Thank you! Happy Learning</h1>
        <button type="button" className="button" onClick={this.buttonClick}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
