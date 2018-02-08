import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  //username, email, password
  //any keys that match our state will get updated
  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  //if we successfully create a new user,
  //we want to have a callback function that will redirect us
  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(() => this.props.history.push('/profile'));
  }

  demoLogin(e) {
    const demoUser = {
      username: 'dahveed15',
      password: 'password'
    };
    e.preventDefault();
    this.props.login(demoUser).then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="outer-login-div">
        <div className="inner-login-div">
          <h2 className="login-title">Log In!</h2>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <ul className="errors">
              {this.props.errors.map((error, idx) => <li key={idx}>{error}</li> )}
            </ul>

              <input
                type="text"
                value={this.state.username}
                onChange={this.handleInput('username')}
                autoFocus
                className='username-input'
                placeholder="Username" />

              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                className='password-input'
                placeholder="Password" />

            <button className="login-button" onClick={this.handleSubmit}>Log In</button>
            <button className="demo-button" onClick={this.demoLogin}>Try it out!</button>
          </form>
        </div>
      </div>
    );
  }


}

export default LoginForm;
