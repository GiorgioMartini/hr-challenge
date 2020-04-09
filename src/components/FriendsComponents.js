import React, { Fragment, useState } from 'react';
import * as PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';

import TableBody from './TableBody';
import TableHeader from './TableHeader';
import Pagination from './Pagination';
import Search from './Search'
import Filter from './Filter'
import Sort from './Sort'
import { connect } from 'react-redux';

const {
  shape,
  arrayOf,
} = PropTypes;

const FriendsComponent = ({ friends, filteredFriends }) => {
  debugger
  const [paginatedFriends, paginate] = usePagination(filteredFriends)

  return (
    <Fragment>
      <p className="font-weight-bold ml-4 mt-4 h3 text-uppercase">Friends</p>
      <p>friends: {JSON.stringify(filteredFriends)}</p>
      <Paper className="m-4 mt-0">
        <Search />
        <Filter />
        <Sort />
        <Table className="p-2">
          <TableHeader />
          <TableBody friends={paginatedFriends} />
        </Table>
        <Pagination totalItems={friends.length} paginate={paginate} />
      </Paper>
    </Fragment>
  )
};

FriendsComponent.propTypes = {
  friends: arrayOf(shape({})),
};

FriendsComponent.defaultProps = {
  friends: [],
};

const mapStateToProps = ({ filteredFriends, friends }) => {
  return ({
    filteredFriends: filteredFriends.length === 0 ? friends : filteredFriends
  })
};

// export default FriendsComponent;
export default connect(mapStateToProps)(FriendsComponent);

// Move to hooks folder
const usePagination = (items) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemstPerPage] = useState(5)
  const indexOfLastItem = currentPage * itemstPerPage
  const indexOfFirsttItem = indexOfLastItem - itemstPerPage
  const currentItems = items.slice(indexOfFirsttItem, indexOfLastItem)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return [currentItems, paginate]
}
