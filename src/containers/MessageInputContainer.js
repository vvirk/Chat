import { connect } from 'react-redux';
import MessageInput from '../components/MessageInput/MessageInput';
import { addNewMessage } from '../actions/index';

const mapStateToProps = state => ({
  messages: state.messages,
});
const mapDispatchToProps = {
  addNewMessage,
};
export const MessageInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageInput);

export default MessageInputContainer;
