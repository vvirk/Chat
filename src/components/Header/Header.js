import React from 'react';
import { getLastMessageTime } from '../../utils/getLastMessageTime';
import { getNumberOfUsers } from '../../utils/getNumberOfUsers';

export const Header = props => {
  return( 
    <header className="header">
      <div className="content">
        <div className="header-inner">
          <div className="header-logo">
            My chat
          </div>
          <div className="header-chat-info">
            <div className="header-chat-info-number-of">
              {getNumberOfUsers(props.messages)} users &nbsp;
              {props.messages.length} messages
            </div>
            <div className="header-chat-info-last-message">
              Last message: {getLastMessageTime(props.messages)}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;