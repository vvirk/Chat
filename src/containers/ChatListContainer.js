import { connect } from 'react-redux';
import ChatList from '../components/ChatList/ChatList';

const mapStateToProps = state => ({
  messages: state.messages,
  newMessage: state.newMessage,
});
const mapDispatchToProps = {
};
export const ChatListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatList);

export default ChatListContainer;
