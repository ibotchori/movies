import Link from "next/link"
import React from "react"

const LinkButton = ({ text, path }) => {
  return (
    <div className="pt-4 pl-4  font-bold text-xl text-white">
      <Link
        className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-800"
        href={path}
      >
        {text}
      </Link>
    </div>
  )
}

export default LinkButton
