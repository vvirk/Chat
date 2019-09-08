import React from 'react';
import Preloader from '../Preloader/Preloader';
import { Redirect } from 'react-router-dom';
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
    const { userName } = this.props;
    return (
      <div className="chat-wrap">
        {isFetching ? <Preloader /> : null}
        {!userName ? <Redirect to={"/login"} /> : null}
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
