"use client"

import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-text text-white py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Patriot21</h3>
            <p className="text-sm">
              Spolek pro rozvoj obce Zlatníky-Hodkovice a podporu společenského života v obci.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Rychlé odkazy</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Úvod
                </Link>
              </li>
              <li>
                <Link href="/o-nas" className="hover:text-primary transition-colors">
                  O nás
                </Link>
              </li>
              <li>
                <Link href="/aktuality" className="hover:text-primary transition-colors">
                  Aktuality
                </Link>
              </li>
              <li>
                <Link href="/kalendar" className="hover:text-primary transition-colors">
                  Kalendář akcí
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Další odkazy</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/galerie" className="hover:text-primary transition-colors">
                  Fotogalerie
                </Link>
              </li>
              <li>
                <Link href="/co-napravit" className="hover:text-primary transition-colors">
                  Co napravit?
                </Link>
              </li>
              <li>
                <Link href="/kontakty" className="hover:text-primary transition-colors">
                  Kontakty
                </Link>
              </li>
              <li>
                <Link href="/dokumenty" className="hover:text-primary transition-colors">
                  Dokumenty
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <address className="text-sm not-italic">
              <p>Zlatníky-Hodkovice</p>
              <p>Email: info@patriot21.cz</p>
              <p>Tel: +420 123 456 789</p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700 text-sm text-center">
          <p>&copy; {currentYear} Patriot21. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
