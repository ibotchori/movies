import React from "react"

const PageTitle = ({ text, className }) => {
  return (
    <p
      className={`${className} w-full text-center pb-5  text-white font-bold text-3xl`}
    >
      {text}
    </p>
  )
}

export default PageTitle
