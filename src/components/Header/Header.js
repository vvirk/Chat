import React from 'react';
import { getLastMessageTime } from '../../utils/getLastMessageTime';
import { getNumberOfUsers } from '../../utils/getNumberOfUsers';

//styles
import s from './styles/Header.module.scss';

export const Header = props => {
  const { messages } = props;
  return ( 
    <header className={s.wrap}>
      <div className="content">
        <div className={s.inner}>
          <div className={s.logo}>
            My chat
          </div>
          <div className={s.chatInfo}>
            <div className={s.chatInfoNumberOf}>
              {getNumberOfUsers(messages)} users &nbsp;
              {messages.length} messages
            </div>
            <div className={s.chatInfoLastMessage}>
              Last message: {getLastMessageTime(messages)}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;