import React, { useState } from 'react';
import classnames from 'classnames';
import * as PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { handleAddFriend } from '../actions/friends'

const {
  shape,
  arrayOf,
} = PropTypes;

const AddFriend = ({ dispatch }) => {

  const [userData, setUserData] = useState({
    Name: '',
    sex: '',
    isStared: '',
  })

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(handleAddFriend(userData))
    console.log(userData)
  }

  const handleOnChange = (e) => {
    e.persist()
    setUserData((prevValue) => ({
      ...prevValue,
      [e.target.Name]: e.target.Name === 'isStared' ? e.target.checked : e.target.value,
    }));
  }

  return (
    <Paper>
      <form onSubmit={handleOnSubmit} >
        <TextField value={userData.Name} onChange={handleOnChange} id="standard-basic" name="Name" label="Name" />
        <TextField value={userData.sex} onChange={handleOnChange} id="standard-basic" name="sex" label="Sex" />
        <Checkbox value={userData.isStared} onChange={handleOnChange} name="isStared" inputProps={{ 'aria-label': 'primary checkbox' }} />
        <Button type="submit" variant="contained" color="primary">
          Primary
        </Button>
      </form>
    </Paper>
  )
};

AddFriend.propTypes = {
  // friends: arrayOf(shape({})),
};

AddFriend.defaultProps = {
  // friends: [],
};

// export default AddFriend;
export default connect()(AddFriend);
