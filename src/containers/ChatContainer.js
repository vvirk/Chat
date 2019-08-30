import { connect } from 'react-redux';
import Chat from '../components/Chat/Chat';
import { getMessages } from '../actions/index';

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  messages: state.messages,
});
const mapDispatchToProps = {
  getMessages,
};
export const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chat);

export default ChatContainer;
