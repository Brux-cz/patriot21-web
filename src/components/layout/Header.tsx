"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              {/* Placeholder for logo */}
              <span className="font-bold text-white">P21</span>
            </div>
            <span className="text-xl font-bold text-primary">Patriot21</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-text hover:text-primary transition-colors">
              Úvod
            </Link>
            <Link href="/o-nas" className="text-text hover:text-primary transition-colors">
              O nás
            </Link>
            <Link href="/aktuality" className="text-text hover:text-primary transition-colors">
              Aktuality
            </Link>
            <Link href="/kalendar" className="text-text hover:text-primary transition-colors">
              Kalendář akcí
            </Link>
            <Link href="/galerie" className="text-text hover:text-primary transition-colors">
              Fotogalerie
            </Link>
            <Link href="/co-napravit" className="text-text hover:text-primary transition-colors">
              Co napravit?
            </Link>
            <Link href="/kontakty" className="text-text hover:text-primary transition-colors">
              Kontakty
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-text"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2 pb-2">
            <Link href="/" className="block py-2 text-text hover:text-primary transition-colors">
              Úvod
            </Link>
            <Link href="/o-nas" className="block py-2 text-text hover:text-primary transition-colors">
              O nás
            </Link>
            <Link href="/aktuality" className="block py-2 text-text hover:text-primary transition-colors">
              Aktuality
            </Link>
            <Link href="/kalendar" className="block py-2 text-text hover:text-primary transition-colors">
              Kalendář akcí
            </Link>
            <Link href="/galerie" className="block py-2 text-text hover:text-primary transition-colors">
              Fotogalerie
            </Link>
            <Link href="/co-napravit" className="block py-2 text-text hover:text-primary transition-colors">
              Co napravit?
            </Link>
            <Link href="/kontakty" className="block py-2 text-text hover:text-primary transition-colors">
              Kontakty
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
