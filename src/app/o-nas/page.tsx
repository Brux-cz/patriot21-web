import React from 'react'

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="section-title text-center mb-12">O nás</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-300 w-full h-64 rounded-lg mb-8">
            {/* Placeholder pro obrázek */}
          </div>
          
          <div className="prose max-w-none">
            <h2>Kdo jsme</h2>
            <p>
              Patriot21 je spolek občanů obce Zlatníky-Hodkovice, kterým záleží na rozvoji naší obce a kvalitě života v ní. 
              Vznikli jsme v roce 2021 s cílem aktivně se podílet na dění v obci, podporovat společenský život 
              a přispívat k řešení problémů, které naši občané pociťují.
            </p>
            
            <h2>Naše cíle</h2>
            <ul>
              <li>Podporovat rozvoj obce Zlatníky-Hodkovice</li>
              <li>Organizovat společenské, kulturní a sportovní akce</li>
              <li>Zapojovat občany do dění v obci</li>
              <li>Přispívat k řešení problémů v obci</li>
              <li>Spolupracovat s vedením obce a dalšími spolky</li>
            </ul>
            
            <h2>Naše aktivity</h2>
            <p>
              Pravidelně organizujeme společenské akce pro děti i dospělé, jako jsou dětské dny, sportovní turnaje, 
              brigády na úklid obce nebo výsadbu zeleně. Účastníme se jednání zastupitelstva a snažíme se přinášet 
              konstruktivní návrhy na zlepšení života v obci.
            </p>
            
            <h2>Členství ve spolku</h2>
            <p>
              Členem spolku Patriot21 se může stát každý občan obce Zlatníky-Hodkovice starší 18 let, 
              který souhlasí s našimi stanovami a cíli. Pokud máte zájem o členství, kontaktujte nás 
              prostřednictvím kontaktního formuláře nebo na e-mailové adrese info@patriot21.cz.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
