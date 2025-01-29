"use client"
import { useParams } from "next/navigation"
import React from "react"

const MovieDetailsContainer = () => {
  const params = useParams()
  const id = params?.slug[0]

  return <div>MovieId: {id}</div>
}

export default MovieDetailsContainer
