import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => {

  const [menuOpen, setMenuOpen] = useState("false")

  useEffect(() => {}, [menuOpen])

  const slideOutMenuRef = useRef(false)

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)

    if (menuOpen) {
      slideOutMenuRef.current.classList.remove("-translate-x-full")
      slideOutMenuRef.current.classList.add("translate-x-0")
    } else {
      slideOutMenuRef.current.classList.remove("translate-x-0")
      slideOutMenuRef.current.classList.add("-translate-x-full")
    }
  }

  return (
    <header className="sticky top-0 bg-purple-900 text-white z-40">
      <nav className="container md:inline-block pt-5 pb-5 px-8 mx-auto">
        <div className="grid grid-cols-8 md:inline-block">
          <button onClick={handleMenuToggle}>
            <StaticImage 
              src="../../assets/images/menu-icon.svg" 
              alt="menu icon"
              className="md:hidden"
              style={{maxWidth: "30px"}}
            />
          </button>
          <div className="text-center mx-auto md:m-auto col-span-6 md:inline-block">
            <Link to="/" className="md:text-left md:pr-10 text-xl font-bold">
              {siteTitle}
            </Link>
          </div>
          <div className="hidden text-center col-span-6 md:inline-block md:m-auto text-lg">
            <Link to="/" activeClassName="border-b-2 border-white" className="mr-5">Home</Link>
            <Link to="/about" activeClassName="border-b-2 border-white">About</Link>
          </div>
        </div>
      </nav>
      <div
        ref={slideOutMenuRef}
        className="fixed left-0 top-0 bg-purple-700 h-full z-40 transition-transform ease-in duration-300 w-5/6 transform -translate-x-full"
      >
        <button 
          onClick={handleMenuToggle} 
          className="float-right mt-3 mr-5 font-bold text-xl bg-purple-900 pt-1 pb-1 px-2"
        >
        &#88;
        </button>
        <nav className="p-5">
          <Link to="/" activeClassName="font-bold" className="text-lg flex p-2">Home</Link>
          <Link to="/about" activeClassName="font-bold" className="text-lg flex p-2 mt-3">About</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
