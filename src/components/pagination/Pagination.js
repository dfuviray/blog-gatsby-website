import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { PaginationWrapper } from "./paginationWrapper"

const Pagination = ({ currentPage, totalPages }) => {
  const next = currentPage + 1
  const nextLink =
    totalPages === currentPage ? (
      ""
    ) : (
      <Link className="next" to={`page/${next}`}>
        Next &rarr;
      </Link>
    )

  let prev = currentPage === 1 ? "/" : `page/${currentPage - 1}`
  if (currentPage === 2) prev = "/"

  let prevLink = (
    <Link className="prev" to={prev}>
      &larr; Prev
    </Link>
  )
  if (currentPage === 1) prevLink = ""

  return (
    <>
      <PaginationWrapper>
        {prevLink}
        {nextLink}
      </PaginationWrapper>
    </>
  )
}
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
}

export default Pagination
