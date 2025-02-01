"use client"
import React, { useState, useEffect } from "react"
import {
  MovieCard,
  Pagination,
  Loading,
  Input,
  LinkButton,
  PageTitle,
} from "@/components"
import { useDebounce } from "@/hooks"

const SearchPageContainer = () => {
  const [movies, setMovies] = useState(null)
  const [totalPages, setTotalPage] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(false)
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  useEffect(() => {
    const fetchMovies = async () => {
      if (!debouncedSearchTerm.trim()) return

      setLoading(true)
      const url = `https://api.themoviedb.org/3/search/movie?query=${debouncedSearchTerm}&include_adult=false&language=en-US&page=${currentPage}`
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
        setTotalPage(data.total_pages)
      } catch (error) {
        console.error("Error fetching movies:", error)
      } finally {
        setLoading(false)
      }
    }

    if (debouncedSearchTerm) {
      fetchMovies()
    }
  }, [debouncedSearchTerm, currentPage])

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected + 1)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-600 md:px-6 px-2 ">
      <LinkButton text="Back" path="/" />

      <main className="flex-grow container mx-auto ">
        <PageTitle text={"Search"} />

        <Input value={searchTerm} onChange={setSearchTerm} />

        {loading && <Loading />}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            pageCount={totalPages}
            handlePageClick={handlePageClick}
          />
        )}
      </main>
    </div>
  )
}

export default SearchPageContainer
