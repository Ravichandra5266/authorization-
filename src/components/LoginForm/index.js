import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    initialUserName: '',
    initialPassword: '',
  }

  onChangeUserName = event => {
    this.setState({initialUserName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({initialPassword: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {initialUserName, initialPassword} = this.state

    const url = 'https://apis.ccbp.in/login'

    console.log(url)

    const userData = {initialUserName, initialPassword}

    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }

    console.log(options)

    const requestUrl = await fetch(url, options)

    console.log(requestUrl)
  }

  render() {
    const {initialUserName, initialPassword} = this.state
    return (
      <div className="login-form-page-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-login-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login-img"
        />
        <div className="login-form-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-login-logo-lg"
          />
          <form className="form" onSubmit={this.onSubmitForm}>
            <label htmlFor="username" className="label">
              USERNAME
            </label>
            <input
              className="input"
              placeholder="Username"
              id="username"
              type="text"
              value={initialUserName}
              onChange={this.onChangeUserName}
            />
            <label htmlFor="password" className="label">
              PASSWORD
            </label>
            <input
              className="input"
              type="password"
              placeholder="Password"
              id="password"
              value={initialPassword}
              onChange={this.onChangePassword}
            />
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
