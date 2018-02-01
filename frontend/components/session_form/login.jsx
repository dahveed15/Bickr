import React from 'react';

class LoginForm extends React.Component {

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

  componentWillUnmount() {
    this.props.clearErrors();
  }

  //if we successfully create a new user,
  //we want to have a callback function that will redirect us
  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="session-form">
        <h2>Log In!</h2>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {this.props.errors.map((error, idx) => <li key={idx}>{error}</li> )}
          </ul>
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
          <button onClick={this.handleSubmit}>Log In</button>
        </form>
      </div>
    );
  }


}

export default LoginForm;
