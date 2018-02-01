import { connect } from 'react-redux';
import SignUpForm from './signup';
import { signup } from '../../actions/session_actions';

//we don't need state when creating a user
const mapDispatchToProps = (dispatch) => {
  return {
    signup: formUser => dispatch(signup(formUser))
  };
};

export default connect(null, mapDispatchToProps)(SignUpForm);
