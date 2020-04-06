import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'

// Components
import FriendsContainer from './containers/FriendsContainer';

function App({ dispatch }) {

  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  return (
    <FriendsContainer />
  );
}

export default connect()(App);
