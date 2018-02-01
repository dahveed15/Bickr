import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  console.log(state);
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
