import React, { useState } from 'react';
import classnames from 'classnames';
import * as PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { filterFriends, resetFilter } from '../actions/friends'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const { shape, arrayOf } = PropTypes;

const Filter = ({ dispatch }) => {
  const [value, setValue] = React.useState({});

  const handleChange = (e) => {
    setValue(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(filterFriends(value))
  };

  const handleOnClick = (e) => {
    e.preventDefault()
    dispatch(resetFilter())
  };

  return (
    <Paper>
      <form onSubmit={handleOnSubmit} >
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup row aria-label="sex" name="sex" value={value.sex || ''} onChange={handleChange}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
        <RadioGroup row aria-label="isStared" name="isStared" value={value.isStared || ''} onChange={handleChange}>
          <FormControlLabel value="true" control={<Radio />} label="isStared" />
          <FormControlLabel value="false" control={<Radio />} label="Not stared" />
        </RadioGroup>
        <Button type="submit" variant="contained" color="primary">Filter</Button>
        <Button onClick={handleOnClick} name="reset" variant="contained" color="primary">Reset Filter</Button>
      </form>
    </Paper>
  )
};

Filter.propTypes = {
  // friends: arrayOf(shape({})),
};

Filter.defaultProps = {
  // friends: [],
};

export default connect()(Filter);
