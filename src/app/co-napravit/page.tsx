import React from 'react'
import Link from 'next/link'

// Toto je mock data, později bude nahrazeno daty z Supabase
const mockIssues = [
  {
    id: 1,
    title: 'Přeplněný odpadkový koš u autobusové zastávky',
    description: 'Odpadkový koš u zastávky směr Praha je již několik dní přeplněný.',
    status: 'Nahlášeno',
    date: '2023-12-10',
    location: 'Autobusová zastávka Zlatníky',
    author: 'Jan Novák',
    slug: 'preplneny-kos'
  },
  {
    id: 2,
    title: 'Poškozená lavička v parku',
    description: 'Lavička v parku u dětského hřiště má ulomené prkno a vyčnívají z ní hřebíky.',
    status: 'V řešení',
    date: '2023-12-05',
    location: 'Park u dětského hřiště',
    author: 'Marie Svobodová',
    slug: 'poskozena-lavicka'
  },
  {
    id: 3,
    title: 'Nefunkční veřejné osvětlení',
    description: 'V ulici Ke Křížku nesvítí dvě lampy veřejného osvětlení.',
    status: 'Vyřešeno',
    date: '2023-11-28',
    location: 'Ulice Ke Křížku',
    author: 'Petr Dvořák',
    slug: 'nefunkcni-osvetleni'
  },
  {
    id: 4,
    title: 'Díra v chodníku',
    description: 'Na chodníku v ulici Hlavní je velká díra, která představuje nebezpečí pro chodce.',
    status: 'V řešení',
    date: '2023-11-20',
    location: 'Ulice Hlavní',
    author: 'Jana Nováková',
    slug: 'dira-v-chodniku'
  }
]

// Funkce pro získání barvy podle statusu
const getStatusColor = (status: string) => {
  switch (status) {
    case 'Nahlášeno':
      return 'bg-yellow-500'
    case 'V řešení':
      return 'bg-blue-500'
    case 'Vyřešeno':
      return 'bg-green-500'
    default:
      return 'bg-gray-500'
  }
}

export default function IssuesPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="section-title text-center mb-6">Co napravit?</h1>

        <p className="text-center max-w-2xl mx-auto mb-12">
          Zde můžete nahlásit problémy v obci, které je potřeba řešit. Může se jednat o poškozený obecní majetek,
          nepořádek, nefunkční osvětlení a další záležitosti, které zhoršují kvalitu života v obci.
        </p>

        <div className="flex justify-center mb-12">
          <Link href="/co-napravit/novy" className="btn btn-primary">
            Nahlásit nový problém
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Aktuální problémy</h2>

          <div className="space-y-6">
            {mockIssues.map((issue) => (
              <article key={issue.id} className="card p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold">
                    <Link href={`/co-napravit/${issue.slug}`} className="hover:text-primary">
                      {issue.title}
                    </Link>
                  </h3>
                  <span className={`${getStatusColor(issue.status)} text-white text-sm px-2 py-1 rounded`}>
                    {issue.status}
                  </span>
                </div>

                <div className="text-gray-600 mb-4">
                  <p className="flex items-center text-sm mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Nahlášeno: {issue.date}
                  </p>
                  <p className="flex items-center text-sm mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {issue.location}
                  </p>
                  <p className="flex items-center text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {issue.author}
                  </p>
                </div>

                <p className="text-gray-600 mb-4">{issue.description}</p>

                <div className="bg-gray-300 h-40 w-full mb-4 rounded">
                  {/* Placeholder pro obrázek */}
                </div>

                <Link
                  href={`/co-napravit/${issue.slug}`}
                  className="text-primary hover:underline font-medium"
                >
                  Zobrazit detail
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
