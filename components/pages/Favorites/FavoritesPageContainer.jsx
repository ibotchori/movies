"use client"
import { LinkButton, MovieCard, PageTitle, Pagination } from "@/components"
import FavoriteContext from "@/context/favorite"
import React, { useContext, useState } from "react"

const FavoritesPageContainer = () => {
  const { favorites } = useContext(FavoriteContext)
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 8

  const offset = currentPage * itemsPerPage
  const currentItems = favorites?.slice(offset, offset + itemsPerPage)
  const pageCount = Math.ceil(favorites?.length / itemsPerPage)
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-600 md:px-6 px-2">
      <LinkButton text="Back" path="/" />

      <main className="flex-grow container mx-auto pb-4">
        <PageTitle text={"Favorite Movies"} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentItems?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {pageCount > 1 && (
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        )}
      </main>
    </div>
  )
}

export default FavoritesPageContainer
