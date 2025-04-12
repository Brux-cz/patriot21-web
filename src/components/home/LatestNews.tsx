"use client"

import Link from 'next/link'

// Toto je mock data, později bude nahrazeno daty z Supabase
const mockNews = [
  {
    id: 1,
    title: 'Nové dětské hřiště v Hodkovicích',
    excerpt: 'Podařilo se nám dokončit projekt nového dětského hřiště v Hodkovicích. Přijďte se podívat!',
    date: '2023-12-15',
    slug: 'nove-detske-hriste'
  },
  {
    id: 2,
    title: 'Úklid obce po zimě',
    excerpt: 'V sobotu 25. března proběhne dobrovolnický úklid obce. Sraz v 9:00 před obecním úřadem.',
    date: '2023-03-20',
    slug: 'uklid-obce-po-zime'
  },
  {
    id: 3,
    title: 'Výsledky jednání s vedením obce',
    excerpt: 'Přinášíme vám informace z posledního jednání s vedením obce ohledně plánovaných projektů.',
    date: '2023-02-10',
    slug: 'vysledky-jednani'
  }
]

const LatestNews = () => {
  return (
    <div className="card p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Aktuality</h2>
        <Link href="/aktuality" className="text-primary hover:underline text-sm">
          Všechny aktuality
        </Link>
      </div>

      <div className="space-y-4">
        {mockNews.map((news) => (
          <article key={news.id} className="pb-4 border-b border-gray-100 last:border-0">
            <time className="text-sm text-gray-500">{news.date}</time>
            <h3 className="font-medium mt-1 mb-2">
              <Link href={`/aktuality/${news.slug}`} className="hover:text-primary">
                {news.title}
              </Link>
            </h3>
            <p className="text-sm text-gray-600">{news.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default LatestNews
