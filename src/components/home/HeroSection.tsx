"use client"

import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative bg-gray-300 py-20">
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4">
            Vítejte na stránkách spolku Patriot21
          </h1>
          <p className="text-lg mb-8">
            Společně pracujeme na rozvoji obce Zlatníky-Hodkovice a podporujeme společenský život v naší komunitě.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/o-nas" className="btn btn-primary">
              Více o nás
            </Link>
            <Link href="/co-napravit" className="btn btn-secondary">
              Nahlásit problém
            </Link>
          </div>
        </div>
      </div>
      {/* Zde bude později přidán obrázek na pozadí */}
    </section>
  )
}

export default HeroSection
