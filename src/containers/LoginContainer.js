import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { addUserName } from '../actions/index';
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    addUserName,
};
export const LoginContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login));

export default LoginContainer;
