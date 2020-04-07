import React, { useState } from 'react';
import classnames from 'classnames';
import * as PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { handleAddFriend } from '../actions/friends'

const {
  shape,
  arrayOf,
} = PropTypes;

const AddFriend = ({ dispatch }) => {

  const [userData, sertUserData] = useState({
    name: '',
    sex: ''
  })

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(handleAddFriend(userData))
    console.log(userData)
  }

  const handleOnChange = (e) => {
    e.persist()
    sertUserData((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <Paper>
      <form onSubmit={handleOnSubmit} >
        <TextField value={userData.name} onChange={e => handleOnChange(e)} id="standard-basic" name="name" label="Name" />
        <TextField value={userData.sex} onChange={e => handleOnChange(e)} id="standard-basic" name="sex" label="Sex" />
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
