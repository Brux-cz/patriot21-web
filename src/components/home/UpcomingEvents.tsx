"use client"

import Link from 'next/link'

// Toto je mock data, později bude nahrazeno daty z Supabase
const mockEvents = [
  {
    id: 1,
    title: 'Dětský den',
    date: '2023-06-01',
    time: '14:00 - 18:00',
    location: 'Fotbalové hřiště Zlatníky',
    slug: 'detsky-den'
  },
  {
    id: 2,
    title: 'Veřejná diskuze o územním plánu',
    date: '2023-05-15',
    time: '18:00 - 20:00',
    location: 'Obecní úřad Zlatníky-Hodkovice',
    slug: 'verejna-diskuze'
  },
  {
    id: 3,
    title: 'Jarní brigáda - výsadba stromů',
    date: '2023-04-22',
    time: '9:00 - 13:00',
    location: 'Sraz u rybníka',
    slug: 'jarni-brigada'
  }
]

const UpcomingEvents = () => {
  return (
    <div className="card p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Nadcházející akce</h2>
        <Link href="/kalendar" className="text-primary hover:underline text-sm">
          Celý kalendář
        </Link>
      </div>

      <div className="space-y-4">
        {mockEvents.map((event) => (
          <article key={event.id} className="pb-4 border-b border-gray-100 last:border-0">
            <div className="flex items-start">
              <div className="bg-primary text-white text-center p-2 rounded mr-4 min-w-[60px]">
                <div className="text-sm font-bold">{event.date.split('-')[2]}</div>
                <div className="text-xs">{
                  new Date(event.date).toLocaleString('cs-CZ', { month: 'short' })
                }</div>
              </div>

              <div>
                <h3 className="font-medium mb-1">
                  <Link href={`/kalendar/${event.slug}`} className="hover:text-primary">
                    {event.title}
                  </Link>
                </h3>
                <div className="text-sm text-gray-600">
                  <p>{event.time}</p>
                  <p>{event.location}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default UpcomingEvents
