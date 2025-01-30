"use client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import React, { useEffect, useState } from "react"

const MovieDetailsContainer = () => {
  const params = useParams()
  const id = params?.slug[0]
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    if (!id) return

    const fetchMovieDetails = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`
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
        setMovie(data)
      } catch (error) {
        console.error("Error fetching movie details:", error)
      }
    }

    fetchMovieDetails()
  }, [id])

  if (!movie) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-500 text-white">
      <div className="p-4  font-bold text-xl">
        <div className="mt-6">
          <Link
            className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500"
            href="/"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <main className="container mx-auto p-6">
        <div className="relative w-full h-96 sm:block hidden ">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="mt-6 flex flex-col md:flex-row gap-6">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={450}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p className="text-gray-400 text-lg mt-2 italic">{movie.tagline}</p>
            <p className="mt-4">{movie.overview}</p>
            <p className="mt-4">
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p className="mt-2">
              <strong>Runtime:</strong> {movie.runtime} mins
            </p>
            <p className="mt-2">
              <strong>Genres:</strong>{" "}
              {movie.genres.map((g) => g.name).join(", ")}
            </p>
            <p className="mt-2">
              <strong>Rating:</strong> {movie.vote_average} ({movie.vote_count}{" "}
              votes)
            </p>
            <div className="mt-4">
              <strong>Production Companies:</strong>
              <ul className="list-disc ml-5">
                {movie.production_companies.map((company) => (
                  <li key={company.id}>{company.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default MovieDetailsContainer
