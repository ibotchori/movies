import Image from "next/image"
import React from "react"

const MovieCard = ({ movie }) => {
  return (
    <div
      key={movie.id}
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
      <p className="text-center text-sm mt-1">Rating: {movie.release_date}</p>
      <p className="text-center text-sm mt-1">Rating: {movie.vote_average}</p>
    </div>
  )
}

export default MovieCard
