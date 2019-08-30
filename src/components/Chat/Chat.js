import React from 'react';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import ChatListContainer from '../../containers/ChatListContainer';
import Footer from '../Footer/Footer';

export class Chat extends React.Component {
  componentDidMount() {
    this.props.getMessages();
  }
  render() {
    console.log(this.props.messages);
    return (
      <div className="chat-wrap">
        {(this.props.isFetching) ? <Preloader /> : null}
        <main className="main">
          <Header />
          <ChatListContainer />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Chat;
