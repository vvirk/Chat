import { connect } from 'react-redux';
import Message from '../components/ChatList/Message/Message';
import { toggleLike } from '../actions/index';

const mapStateToProps = state => ({
  likeMessages: state.likeMessages,
});
const mapDispatchToProps = {
  toggleLike,
};
export const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message);

export default MessageContainer;
