import { connect } from 'react-redux';
import MessageInput from '../components/MessageInput/MessageInput';
import { 
  addMessage,
  sendMessage,
  saveEditedMessage,
} from '../actions/index';

const mapStateToProps = state => ({
  message: state.message,
  editId: state.editId,
  editIndex: state.editIndex,
  f: state.f,
});
const mapDispatchToProps = {
  addMessage,
  sendMessage,
  saveEditedMessage,
};
export const MessageInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageInput);

export default MessageInputContainer;
