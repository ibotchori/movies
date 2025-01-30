import React from "react"

const Input = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 text-lg rounded"
      />
    </div>
  )
}

export default Input
