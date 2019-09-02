import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { addUserName } from '../actions/index';

const mapStateToProps = state => ({
});
const mapDispatchToProps = {
    addUserName,
};
export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default LoginContainer;
