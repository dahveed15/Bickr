import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {

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

  //stops errors from being saved and displayed in the login page
  componentWillUnmount() {
    this.props.clearErrors();
  }

  //if we successfully create a new user,
  //we want to have a callback function that will redirect us
  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state).then(() => this.props.history.push('/profile'));
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
      <div className="outer-signup-div">
        <div className="inner-signup-div">
          <h2 className="signup-title">Sign Up!</h2>
          <form className="signup-form" onSubmit={this.handleSubmit}>
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
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
                className='email-input'
                placeholder="Email" />

              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                className='password-input'
                placeholder="Password" />

              <div className="signup-buttons">
                <button className="signup-button" onClick={this.handleSubmit}>Sign Up</button>
                <button className="demo-button" onClick={this.demoLogin}>Try it out!</button>
              </div>
          </form>
        </div>
      </div>
    );
  }

}

export default SignUpForm;
