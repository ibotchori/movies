"use client"
import React, { useState, useEffect } from "react"
import ReactPaginate from "react-paginate"
import { MovieCard } from "@/components"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

const HomePageContainer = () => {
  const [movies, setMovies] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 8

  useEffect(() => {
    const fetchMovies = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2VhMjliZTYxNmM5NTBjYTk1NDIwNmQ2MjI4M2RjMyIsIm5iZiI6MTczODE1NjU2Ny4wNDE5OTk4LCJzdWIiOiI2NzlhMmExN2NiYWY1NTQ5MzFjMGRkNTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.OVcfNa2LO3daB6fV9haUmx5NGiARyDfokeZ33KWdSI0",
        },
      }

      try {
        const response = await fetch(url, options)
        const data = await response.json()
        setMovies(data.results)
      } catch (error) {
        console.error("Error fetching movies:", error)
      }
    }

    fetchMovies()
  }, [])

  const offset = currentPage * itemsPerPage
  const currentItems = movies?.slice(offset, offset + itemsPerPage)
  const pageCount = Math.ceil(movies?.length / itemsPerPage)

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
  }

  if (!movies) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <main className="flex-grow container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentItems?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
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
            activeClassName={"bg-gray-400"}
            previousClassName={
              "flex items-center justify-center bg-gray-700 text-white rounded-full w-8 h-8 cursor-pointer "
            }
            nextClassName={
              "flex items-center justify-center bg-gray-700 text-white rounded-full w-8 h-8 cursor-pointer "
            }
            disabledClassName={"opacity-50 cursor-not-allowed"}
          />
        </div>
      </main>
    </div>
  )
}

export default HomePageContainer
