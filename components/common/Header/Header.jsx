import Link from "next/link"

const Header = () => {
  return (
    <header className="p-4 bg-gray-700 text-white flex justify-between items-center ">
      <nav className="flex gap-4">
        <Link className="hover:text-gray-400" href="/">
          Home
        </Link>
        <Link className="hover:text-gray-400" href="/favorites">
          Favorites
        </Link>
        <Link className="hover:text-gray-400" href="/search">
          Search
        </Link>
      </nav>
    </header>
  )
}

export default Header
