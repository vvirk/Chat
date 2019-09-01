import React from 'react';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import ChatListContainer from '../../containers/ChatListContainer';
import MessageInputContainer from '../../containers/MessageInputContainer';
import Footer from '../Footer/Footer';

export class Chat extends React.Component {
  componentDidMount() {
    this.props.getMessages();
  }
  render() {
    console.log(this.props);
    return (
      <div className="chat-wrap">
        {(this.props.isFetching) ? <Preloader /> : null}
        <main className="main">
          <Header />
          <ChatListContainer />
          <MessageInputContainer />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Chat;
