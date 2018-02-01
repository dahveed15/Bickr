import { connect } from 'react-redux';
import LoginForm from './login';
import { login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessionErrors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: formUser => dispatch(login(formUser)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
