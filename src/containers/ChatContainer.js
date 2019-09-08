import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Chat from '../components/Chat/Chat';
import { 
  getMessages,
  toggleIsFetching,
} from '../actions/index';

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  messages: state.messages,
  userName: state.userName,
});
const mapDispatchToProps = {
  getMessages,
  toggleIsFetching,
};
export const ChatContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chat));

export default ChatContainer;
