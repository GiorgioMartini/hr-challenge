import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'

// Components
import Nav from './components/Nav'
import AddFriend from './components/AddFriend'
import FriendsContainer from './containers/FriendsContainer';

function App({ dispatch }) {
  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  return (
    <Router>
      <Nav />
      <Route path='/' exact component={FriendsContainer} />
      <Route path='/add' component={AddFriend} />
    </Router>
  );
}

export default connect()(App);
