import React, { useState } from 'react';
import classnames from 'classnames';
import * as PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { searchFriend } from '../actions/friends'

import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

const {
  shape,
  arrayOf,
} = PropTypes;

const Search = ({ dispatch, query, filteredItems }) => {

  // const search = (query) => {
  //   dispatch(searchFriend(query))
  // }

  return (
    <Paper>
      <TextField onChange={(e) => dispatch(searchFriend(e.target.value))} value={query} />
      Result: {filteredItems.map(item => (
        <p>{item.name}</p>
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
    filteredItems: (friends && query)
      ? friends.filter(friend => friend.name.toLowerCase().includes(query.toLocaleLowerCase()))
      : []
  };
}

export default connect(mapStateToProps)(Search);


