"use client"
import React, { useState, useEffect } from "react"
import ReactPaginate from "react-paginate"
import { MovieCard } from "@/components"

const HomePageContainer = () => {
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [loading, setLoading] = useState(true)
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
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  const offset = currentPage * itemsPerPage
  const currentItems = movies.slice(offset, offset + itemsPerPage)
  const pageCount = Math.ceil(movies.length / itemsPerPage)

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto p-4">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="loader">Loading...</div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {currentItems.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"flex gap-2"}
                pageClassName={
                  "p-2 bg-gray-700 text-white rounded-lg cursor-pointer"
                }
                activeClassName={"bg-gray-500"}
                previousClassName={
                  "p-2 bg-gray-700 text-white rounded-lg cursor-pointer"
                }
                nextClassName={
                  "p-2 bg-gray-700 text-white rounded-lg cursor-pointer"
                }
                disabledClassName={"opacity-50 cursor-not-allowed"}
              />
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export default HomePageContainer
