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
    // this.renderErrors = this.renderErrors.bind(this);
  }

  //username, email, password
  //any keys that match our state will get updated
  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  // renderErrors() {
  //   console.log(this.props.errors);
  //   // return (
  //   //   this.props.errors.map((error) => error))
  //   // )
  // }

  //stops errors from being saved and displayed in the login page
  componentWillUnmount() {
    this.props.clearErrors();
  }

  //if we successfully create a new user,
  //we want to have a callback function that will redirect us
  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state).then(() => this.props.history.push('/'));
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
            <label>Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleInput('username')}
                autoFocus
                placeholder="Enter username" />
            </label>
            <label>Email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')} />
            </label>
            <label>Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')} />
            </label>
            <button className="signup-button" onClick={this.handleSubmit}>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }

}

export default SignUpForm;
