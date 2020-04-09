import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { searchFriend } from '../actions/friends'

import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

const {
  shape,
  arrayOf,
} = PropTypes;

const Search = ({ dispatch, query, foundFriends }) => {
  return (
    <Paper>
      <TextField onChange={(e) => dispatch(searchFriend(e.target.value))} value={query} />
      Result: {foundFriends.map((item, i) => (
        <p key={i}>{item.name}</p>
      ))}
    </Paper>
  )
};

Search.propTypes = {
  // friends: arrayOf(shape({})),
};

Search.defaultProps = {
  // friends: [],
};

const mapStateToProps = ({ query, friends }) => {
  // check this...
  return {
    foundFriends: (friends && query)
      ? friends.filter(friend => friend.Name.toLowerCase().includes(query.toLocaleLowerCase()))
      : []
  };
}

export default connect(mapStateToProps)(Search);