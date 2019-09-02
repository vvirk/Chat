import React from 'react';
import Preloader from '../Preloader/Preloader';
import HeaderContainer from '../../containers/HeaderContainer';
import ChatListContainer from '../../containers/ChatListContainer';
import MessageInputContainer from '../../containers/MessageInputContainer';
import Footer from '../Footer/Footer';

export class Chat extends React.Component {
  componentDidMount() {
    this.props.getMessages();
  }
  render() {
    const { isFetching } = this.props;
    return (
      <div className="chat-wrap">
        {isFetching ? <Preloader /> : null}
        <main className="main">
          <HeaderContainer />
          <ChatListContainer />
          <MessageInputContainer />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Chat;
