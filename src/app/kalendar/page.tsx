import React from 'react'
import Link from 'next/link'

// Toto je mock data, později bude nahrazeno daty z Supabase
const mockEvents = [
  {
    id: 1,
    title: 'Dětský den',
    date: '2023-06-01',
    time: '14:00 - 18:00',
    location: 'Fotbalové hřiště Zlatníky',
    description: 'Tradiční dětský den plný her, soutěží a zábavy pro děti všech věkových kategorií.',
    slug: 'detsky-den'
  },
  {
    id: 2,
    title: 'Veřejná diskuze o územním plánu',
    date: '2023-05-15',
    time: '18:00 - 20:00',
    location: 'Obecní úřad Zlatníky-Hodkovice',
    description: 'Diskuze s občany o připravovaných změnách v územním plánu obce.',
    slug: 'verejna-diskuze'
  },
  {
    id: 3,
    title: 'Jarní brigáda - výsadba stromů',
    date: '2023-04-22',
    time: '9:00 - 13:00',
    location: 'Sraz u rybníka',
    description: 'Dobrovolnická akce zaměřená na výsadbu nových stromů v okolí rybníka.',
    slug: 'jarni-brigada'
  },
  {
    id: 4,
    title: 'Letní kino - promítání pro děti',
    date: '2023-07-15',
    time: '21:00 - 23:00',
    location: 'Hřiště za školou',
    description: 'Promítání animovaného filmu pro děti pod širým nebem.',
    slug: 'letni-kino-deti'
  },
  {
    id: 5,
    title: 'Letní kino - promítání pro dospělé',
    date: '2023-07-16',
    time: '21:30 - 23:30',
    location: 'Hřiště za školou',
    description: 'Promítání filmu pro dospělé pod širým nebem.',
    slug: 'letni-kino-dospeli'
  },
  {
    id: 6,
    title: 'Sportovní den',
    date: '2023-08-12',
    time: '10:00 - 16:00',
    location: 'Sportovní areál Zlatníky',
    description: 'Den plný sportovních aktivit pro všechny věkové kategorie.',
    slug: 'sportovni-den'
  }
]

// Definice typu pro událost
interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  slug: string;
}

// Funkce pro seskupení událostí podle měsíce
const groupEventsByMonth = (events: Event[]) => {
  const grouped: { [key: string]: Event[] } = {}

  events.forEach(event => {
    const date = new Date(event.date)
    const monthYear = date.toLocaleString('cs-CZ', { month: 'long', year: 'numeric' })

    if (!grouped[monthYear]) {
      grouped[monthYear] = []
    }

    grouped[monthYear].push(event)
  })

  return grouped
}

export default function CalendarPage() {
  const groupedEvents = groupEventsByMonth(mockEvents)

  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="section-title text-center mb-12">Kalendář akcí</h1>

        <div className="max-w-4xl mx-auto">
          {Object.entries(groupedEvents).map(([monthYear, events]) => (
            <div key={monthYear} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
                {monthYear}
              </h2>

              <div className="space-y-6">
                {events.map((event) => (
                  <article key={event.id} className="card p-6">
                    <div className="flex flex-col md:flex-row md:items-start">
                      <div className="bg-primary text-white text-center p-3 rounded mb-4 md:mb-0 md:mr-6 md:min-w-[80px]">
                        <div className="text-2xl font-bold">{event.date.split('-')[2]}</div>
                        <div className="text-sm">{
                          new Date(event.date).toLocaleString('cs-CZ', { month: 'short' })
                        }</div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          <Link href={`/kalendar/${event.slug}`} className="hover:text-primary">
                            {event.title}
                          </Link>
                        </h3>

                        <div className="text-gray-600 mb-3">
                          <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {event.time}
                          </p>
                          <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {event.location}
                          </p>
                        </div>

                        <p className="text-gray-600">{event.description}</p>

                        <Link
                          href={`/kalendar/${event.slug}`}
                          className="inline-block mt-4 text-primary hover:underline font-medium"
                        >
                          Více informací
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
