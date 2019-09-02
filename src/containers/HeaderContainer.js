import { connect } from 'react-redux';
import Header from '../components/Header/Header';

const mapStateToProps = state => ({
  messages: state.messages,
});
const mapDispatchToProps = {};
export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;

