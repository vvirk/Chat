import { connect } from 'react-redux';
import ChatList from '../components/ChatList/ChatList';

const mapStateToProps = state => ({
  messages: state.messages,
});
const mapDispatchToProps = {
};
export const ChatListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatList);

export default ChatListContainer;
