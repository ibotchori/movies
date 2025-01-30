import Link from "next/link"
import React from "react"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-6 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <nav className="flex gap-4 mb-4 md:mb-0">
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-gray-400">
            Privacy Policy
          </Link>
        </nav>
        <div className="text-center  text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} MovieHub. All rights reserved.
          </p>
          <p>Providing the best movie information and reviews since 2002.</p>
        </div>
        <div className="flex gap-4 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
