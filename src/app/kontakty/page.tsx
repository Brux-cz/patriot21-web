"use client"

import React from 'react'

// Toto je mock data, později bude nahrazeno daty z Supabase
const mockContacts = [
  {
    id: 1,
    name: 'Jan Novák',
    position: 'Předseda spolku',
    email: 'jan.novak@patriot21.cz',
    phone: '+420 123 456 789',
    bio: 'Jan se dlouhodobě zajímá o rozvoj obce a komunitní život. Ve spolku Patriot21 působí od jeho založení.',
    image: '/placeholder.jpg'
  },
  {
    id: 2,
    name: 'Marie Svobodová',
    position: 'Místopředsedkyně spolku',
    email: 'marie.svobodova@patriot21.cz',
    phone: '+420 987 654 321',
    bio: 'Marie se specializuje na organizaci kulturních akcí a komunikaci s občany.',
    image: '/placeholder.jpg'
  },
  {
    id: 3,
    name: 'Petr Dvořák',
    position: 'Pokladník',
    email: 'petr.dvorak@patriot21.cz',
    phone: '+420 456 789 123',
    bio: 'Petr má na starosti finance spolku a administrativní záležitosti.',
    image: '/placeholder.jpg'
  },
  {
    id: 4,
    name: 'Jana Nováková',
    position: 'Členka výboru',
    email: 'jana.novakova@patriot21.cz',
    phone: '+420 789 123 456',
    bio: 'Jana se věnuje především práci s dětmi a mládeží, organizuje akce pro rodiny s dětmi.',
    image: '/placeholder.jpg'
  },
  {
    id: 5,
    name: 'Martin Černý',
    position: 'Člen výboru',
    email: 'martin.cerny@patriot21.cz',
    phone: '+420 321 654 987',
    bio: 'Martin má na starosti technické záležitosti a údržbu obecního majetku.',
    image: '/placeholder.jpg'
  }
]

export default function ContactsPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="section-title text-center mb-6">Kontakty</h1>

        <p className="text-center max-w-2xl mx-auto mb-12">
          Zde najdete kontakty na členy spolku Patriot21. Neváhejte nás kontaktovat s jakýmikoli dotazy,
          náměty nebo pokud se chcete zapojit do našich aktivit.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockContacts.map((contact) => (
              <div key={contact.id} className="card p-6 flex flex-col md:flex-row gap-6">
                <div className="w-32 h-32 bg-gray-300 rounded-full flex-shrink-0 mx-auto md:mx-0">
                  {/* Placeholder pro fotografii */}
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-1">{contact.name}</h2>
                  <p className="text-primary mb-3">{contact.position}</p>

                  <div className="space-y-2 text-gray-600 mb-4">
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${contact.email}`} className="hover:text-primary">
                        {contact.email}
                      </a>
                    </p>
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-primary">
                        {contact.phone}
                      </a>
                    </p>
                  </div>

                  <p className="text-sm">{contact.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Kontaktní formulář</h2>

            <form className="card p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Jméno a příjmení
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Předmět
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>

              <div>
                <button type="submit" className="btn btn-primary">
                  Odeslat zprávu
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
