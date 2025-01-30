"use client"
import ReactPaginate from "react-paginate"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <div className="mt-6 flex justify-center">
      <ReactPaginate
        previousLabel={<FaAngleLeft />}
        nextLabel={<FaAngleRight />}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"flex gap-2"}
        pageClassName={
          "flex items-center justify-center bg-gray-700 text-white rounded-full w-8 h-8 cursor-pointer "
        }
        activeClassName={"opacity-50"}
        previousClassName={
          "flex items-center justify-center bg-gray-700 text-white rounded-full w-8 h-8 cursor-pointer "
        }
        nextClassName={
          "flex items-center justify-center bg-gray-700 text-white rounded-full w-8 h-8 cursor-pointer "
        }
        disabledClassName={"opacity-50 cursor-not-allowed"}
      />
    </div>
  )
}

export default Pagination
