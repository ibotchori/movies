"use client"
import React, { useState, useEffect } from "react"
import { MovieCard, Pagination, Loading } from "@/components"

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
    return <Loading />
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-600">
      <main className="flex-grow container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentItems?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      </main>
    </div>
  )
}

export default HomePageContainer
