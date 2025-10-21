"use client"

import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-black shadow fixed">
      <div className="max-w-6xl h-16 mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Raihnnh.dev</div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col">
          <li>
            <a href="#home" onClick={() => setIsMenuOpen(!isMenuOpen)}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsMenuOpen(!isMenuOpen)}>About</a>
          </li>
          <li>
            <a href="#project" onClick={() => setIsMenuOpen(!isMenuOpen)}>Project</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsMenuOpen(!isMenuOpen)}>Contact</a>
          </li>
        </ul>
      )}
    </nav>
  )
}

