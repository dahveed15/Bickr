import React from 'react';

class SignUpForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //username, email, password
  //any keys that match our state will get updated
  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  //if we successfully create a new user,
  //we want to have a callback function that will redirect us
  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state).then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="session-form">
        <h2>Sign Up!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')} />
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
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    );
  }

}

export default SignUpForm;
