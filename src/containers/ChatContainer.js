import { connect } from 'react-redux';
import Chat from '../components/Chat/Chat';
//import  from '../actions/index';

const mapStateToProps = state => ({
});
const mapDispatchToProps = {
};
export const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chat);

export default ChatContainer;
