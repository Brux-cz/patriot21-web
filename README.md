# Patriot21 - Webové stránky spolku

Webové stránky pro spolek Patriot21 v obci Zlatníky-Hodkovice.

## Funkce

- Aktuality a novinky
- Kalendář akcí
- Fotogalerie
- Sekce "Co napravit?" pro nahlašování problémů v obci
- Kontakty
- Dokumenty ke stažení

## Technologie

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Supabase (backend, autentizace, databáze)

## Instalace a spuštění

1. Naklonujte repozitář
2. Nainstalujte závislosti
   ```bash
   npm install
   ```
3. Vytvořte soubor `.env.local` podle vzoru `.env.local.example` a doplňte údaje pro Supabase
4. Spusťte vývojový server
   ```bash
   npm run dev
   ```
5. Otevřete [http://localhost:3000](http://localhost:3000) ve vašem prohlížeči

## Struktura projektu

- `src/app` - Stránky aplikace (Next.js App Router)
- `src/components` - React komponenty
- `src/lib` - Utility a knihovny
- `public` - Statické soubory (obrázky, dokumenty)

## Nasazení

Pro nasazení do produkce:

```bash
npm run build
npm run start
```

## Licence

Všechna práva vyhrazena © Patriot21
