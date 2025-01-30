"use client"
import Image from "next/image"
import React, { useContext } from "react"
import Link from "next/link"
import { FaRegHeart, FaHeart } from "react-icons/fa"
import FavoriteContext from "@/context/favorite"

const MovieCard = ({ movie }) => {
  const { favorites } = useContext(FavoriteContext)
  let isMovieInFavorite = favorites.some((item) => item?.id === movie?.id)
  return (
    <Link
      key={movie.id}
      href={`movies/${movie.id}`}
      className="bg-gray-500 text-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-95 cursor-pointer hover:shadow-2xl"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={400}
        height={200}
        className="rounded-md mx-auto"
      />
      <h3 className="text-center mt-2 font-semibold">{movie.title}</h3>
      <p className="text-center text-sm mt-1">Date: {movie.release_date}</p>
      <p className="text-center text-sm mt-1">Rating: {movie.vote_average}</p>
      <div className="w-full flex justify-end absolute right-5 bottom-4">
        {isMovieInFavorite && <FaHeart className="cursor-pointer" size={20} />}
      </div>
    </Link>
  )
}

export default MovieCard
