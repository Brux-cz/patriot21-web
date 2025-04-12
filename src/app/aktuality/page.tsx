import React from 'react'
import Link from 'next/link'

// Toto je mock data, později bude nahrazeno daty z Supabase
const mockNews = [
  {
    id: 1,
    title: 'Nové dětské hřiště v Hodkovicích',
    excerpt: 'Podařilo se nám dokončit projekt nového dětského hřiště v Hodkovicích. Přijďte se podívat!',
    content: 'Dlouhý obsah článku...',
    date: '2023-12-15',
    slug: 'nove-detske-hriste',
    image: '/placeholder.jpg'
  },
  {
    id: 2,
    title: 'Úklid obce po zimě',
    excerpt: 'V sobotu 25. března proběhne dobrovolnický úklid obce. Sraz v 9:00 před obecním úřadem.',
    content: 'Dlouhý obsah článku...',
    date: '2023-03-20',
    slug: 'uklid-obce-po-zime',
    image: '/placeholder.jpg'
  },
  {
    id: 3,
    title: 'Výsledky jednání s vedením obce',
    excerpt: 'Přinášíme vám informace z posledního jednání s vedením obce ohledně plánovaných projektů.',
    content: 'Dlouhý obsah článku...',
    date: '2023-02-10',
    slug: 'vysledky-jednani',
    image: '/placeholder.jpg'
  },
  {
    id: 4,
    title: 'Vánoční setkání občanů',
    excerpt: 'Srdečně vás zveme na vánoční setkání občanů, které se uskuteční 18. prosince od 17:00 na návsi.',
    content: 'Dlouhý obsah článku...',
    date: '2023-12-05',
    slug: 'vanocni-setkani',
    image: '/placeholder.jpg'
  },
  {
    id: 5,
    title: 'Nová lavička u rybníka',
    excerpt: 'Díky dobrovolníkům a podpoře obce se podařilo instalovat novou lavičku u rybníka.',
    content: 'Dlouhý obsah článku...',
    date: '2023-11-10',
    slug: 'nova-lavicka',
    image: '/placeholder.jpg'
  }
]

export default function NewsPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="section-title text-center mb-12">Aktuality</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockNews.map((news) => (
            <article key={news.id} className="card overflow-hidden">
              <div className="bg-gray-300 h-48 w-full">
                {/* Placeholder pro obrázek */}
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500">{news.date}</time>
                <h2 className="text-xl font-bold mt-2 mb-3">
                  <Link href={`/aktuality/${news.slug}`} className="hover:text-primary">
                    {news.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <Link 
                  href={`/aktuality/${news.slug}`} 
                  className="text-primary hover:underline font-medium"
                >
                  Číst více
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
