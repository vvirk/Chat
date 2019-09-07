import { connect } from 'react-redux';
import Message from '../components/ChatList/Message/Message';
import { 
  toggleLike,
  deleteMessage,
  changeMessage,
} from '../actions/index';

const mapStateToProps = state => ({
  likeMessages: state.likeMessages,
});
const mapDispatchToProps = {
  toggleLike,
  deleteMessage,
  changeMessage,
};
export const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message);

export default MessageContainer;
