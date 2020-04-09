import React, { useState } from 'react';
import classnames from 'classnames';
import * as PropTypes from 'prop-types';
import { sortFriends } from '../actions/friends'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import FormLabel from '@material-ui/core/FormLabel';

const { shape, arrayOf } = PropTypes;

const Sort = ({ dispatch }) => {
  const [sortingRule, setSortingRule] = React.useState('');

  const handleOnClick = (e) => {
    e.preventDefault()
    setSortingRule(e.target.value);
    dispatchAction(e.target.value)
  };

  const dispatchAction = (rule) => {
    dispatch(sortFriends(rule))
  }

  return (
    <Paper>
      <form>
        <FormLabel component="legend">Sort</FormLabel>
        <button onClick={handleOnClick} value='Name' variant="contained" color="primary" name="sortById" >sort by name</button>
        <button onClick={handleOnClick} value='id' variant="contained" color="primary" name="sortByName" >sortById</button>
      </form>
    </Paper>
  )
};

Sort.propTypes = {
  // friends: arrayOf(shape({})),
};

Sort.defaultProps = {
  // friends: [],
};

export default connect()(Sort);
