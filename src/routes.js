import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import ChatContainer from './containers/ChatContainer';

export const MainRouter = () => (
  <Router>
    <Route path="/" exact component={ChatContainer} />     
    <Route path="/login" exact component={LoginContainer} />
  </Router>  
);

export default MainRouter;
