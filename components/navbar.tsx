"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Sacramento } from 'next/font/google';

const sacramento = Sacramento({ subsets: ['latin'], weight: '400' });

interface Props {
    page: string,
    setPage: any
}

export default function Navbar({ page, setPage }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    console.log(page)
  }, [pathname])

  const isActive = (path: string) => {
    return page === path
      ? "text-pink-400 border-pink-400"
      : "hover:text-pink-400 border-transparent transition-colors"
  }

  const handleMenuClick = (path: string) => {
    setPage(path)
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div onClick={() => setPage("Landing")} className={`${sacramento.className} text-4xl font-bold tracking-tighter`}>
          Azkanab
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <div onClick={() => setPage("Landing")} className={`${isActive("Landing")} pb-1 border-b-2 transition-all hover:cursor-pointer`}>
            Home
          </div>
          <div onClick={() => setPage("About")} className={`${isActive("About")} pb-1 border-b-2 transition-all hover:cursor-pointer`}>
            About
          </div>
          <div onClick={() => setPage("Projects")}  className={`${isActive("Projects")} pb-1 border-b-2 transition-all hover:cursor-pointer`}>
            Projects
          </div>
          <div onClick={() => setPage("Gallery")}  className={`${isActive("Gallery")} pb-1 border-b-2 transition-all hover:cursor-pointer`}>
            Gallery
          </div>
          <div onClick={() => setPage("Contact")}  className={`${isActive("Contact")} pb-1 border-b-2 transition-all hover:cursor-pointer`}>
            Contact
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-white/10 transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <div
            className={`py-2 ${pathname === "Landing" ? "text-pastelPink" : ""} transition-colors duration-200 hover:text-pastelPink`}
            onClick={() => handleMenuClick("Landing")}
          >
            Home
          </div>
          <div
            className={`py-2 ${pathname === "About" ? "text-pastelPink" : ""} transition-colors duration-200 hover:text-pastelPink`}
            onClick={() => handleMenuClick("About")}
          >
            About
          </div>
          <div
            className={`py-2 ${pathname === "Projects" ? "text-pastelPink" : ""} transition-colors duration-200 hover:text-pastelPink`}
            onClick={() => handleMenuClick("Projects")}
          >
            Projects
          </div>
          <div
            className={`py-2 ${pathname === "Gallery" ? "text-pastelPink" : ""} transition-colors duration-200 hover:text-pastelPink`}
            onClick={() => handleMenuClick("Gallery")}
          >
            Gallery
          </div>
          <div
            className={`py-2 ${pathname === "Contact" ? "text-pastelPink" : ""} transition-colors duration-200 hover:text-pastelPink`}
            onClick={() => handleMenuClick("Contact")}
          >
            Contact
          </div>
        </div>
      </div>
    </nav>
  )
}
