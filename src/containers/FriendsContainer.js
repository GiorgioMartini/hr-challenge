import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

// Components
import FriendsComponents from '../components/FriendsComponents';

const FriendsContainer = ({ friends = [] }) => {
  return <FriendsComponents friends={friends} />;
}

const { shape, arrayOf } = PropTypes;

FriendsContainer.propTypes = {
  friends: arrayOf(shape({})),
};

const mapStateToProps = ({ friends }) => ({
  friends,
  // filteredFriends
});


export default connect(mapStateToProps)(FriendsContainer);
