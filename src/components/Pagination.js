import React from 'react'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = []
  for (let i = 1; i < Math.ceil(totalItems / itemsPerPage) + 1; i++) {
    pageNumbers.push(i)
  }

  return (
    <ul>
      {pageNumbers.map((num, i) => {
        return (
          <li key={i}>
            <button onClick={() => paginate(num)} >{num}</button>
          </li>
        )
      })}
    </ul>
  )
}

export default Pagination
