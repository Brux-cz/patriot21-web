import React from 'react'
import Link from 'next/link'

// Toto je mock data, později bude nahrazeno daty z Supabase
const mockAlbums = [
  {
    id: 1,
    title: 'Dětský den 2023',
    date: '2023-06-01',
    coverImage: '/placeholder.jpg',
    photoCount: 24,
    slug: 'detsky-den-2023'
  },
  {
    id: 2,
    title: 'Jarní brigáda - výsadba stromů',
    date: '2023-04-22',
    coverImage: '/placeholder.jpg',
    photoCount: 18,
    slug: 'jarni-brigada-2023'
  },
  {
    id: 3,
    title: 'Vánoční setkání 2022',
    date: '2022-12-18',
    coverImage: '/placeholder.jpg',
    photoCount: 32,
    slug: 'vanocni-setkani-2022'
  },
  {
    id: 4,
    title: 'Sportovní den 2022',
    date: '2022-08-12',
    coverImage: '/placeholder.jpg',
    photoCount: 45,
    slug: 'sportovni-den-2022'
  },
  {
    id: 5,
    title: 'Úklid obce 2022',
    date: '2022-03-26',
    coverImage: '/placeholder.jpg',
    photoCount: 15,
    slug: 'uklid-obce-2022'
  },
  {
    id: 6,
    title: 'Dětský den 2022',
    date: '2022-06-01',
    coverImage: '/placeholder.jpg',
    photoCount: 28,
    slug: 'detsky-den-2022'
  }
]

export default function GalleryPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="section-title text-center mb-12">Fotogalerie</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockAlbums.map((album) => (
            <Link 
              key={album.id} 
              href={`/galerie/${album.slug}`}
              className="card overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-gray-300 h-48 w-full relative">
                {/* Placeholder pro obrázek */}
                <div className="absolute bottom-0 right-0 bg-primary text-white px-2 py-1 text-sm">
                  {album.photoCount} fotografií
                </div>
              </div>
              <div className="p-4">
                <h2 className="font-bold text-lg">{album.title}</h2>
                <time className="text-sm text-gray-500">{album.date}</time>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
