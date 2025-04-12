import React from 'react'
import Link from 'next/link'

// Toto je mock data, později bude nahrazeno daty z Supabase
const mockDocuments = [
  {
    id: 1,
    title: 'Stanovy spolku Patriot21',
    description: 'Oficiální stanovy spolku Patriot21 schválené při založení spolku.',
    date: '2021-01-15',
    fileSize: '245 KB',
    fileType: 'PDF',
    url: '/documents/stanovy-spolku.pdf'
  },
  {
    id: 2,
    title: 'Výroční zpráva 2022',
    description: 'Výroční zpráva o činnosti spolku Patriot21 za rok 2022.',
    date: '2023-02-28',
    fileSize: '1.2 MB',
    fileType: 'PDF',
    url: '/documents/vyrocni-zprava-2022.pdf'
  },
  {
    id: 3,
    title: 'Zápis z členské schůze - březen 2023',
    description: 'Zápis z členské schůze spolku konané dne 15. března 2023.',
    date: '2023-03-20',
    fileSize: '180 KB',
    fileType: 'PDF',
    url: '/documents/zapis-clenska-schuze-brezen-2023.pdf'
  },
  {
    id: 4,
    title: 'Územní plán obce - připomínky spolku',
    description: 'Připomínky spolku Patriot21 k návrhu nového územního plánu obce Zlatníky-Hodkovice.',
    date: '2023-04-10',
    fileSize: '350 KB',
    fileType: 'PDF',
    url: '/documents/pripominky-uzemni-plan.pdf'
  },
  {
    id: 5,
    title: 'Prezentace - Veřejná diskuze o územním plánu',
    description: 'Prezentace použitá při veřejné diskuzi o územním plánu dne 15. května 2023.',
    date: '2023-05-15',
    fileSize: '4.5 MB',
    fileType: 'PPTX',
    url: '/documents/prezentace-uzemni-plan.pptx'
  },
  {
    id: 6,
    title: 'Plán činnosti na rok 2023',
    description: 'Plán činnosti spolku Patriot21 na rok 2023 schválený členskou schůzí.',
    date: '2023-01-20',
    fileSize: '210 KB',
    fileType: 'PDF',
    url: '/documents/plan-cinnosti-2023.pdf'
  }
]

// Funkce pro získání ikony podle typu souboru
const getFileIcon = (fileType: string) => {
  switch (fileType) {
    case 'PDF':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    case 'DOCX':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    case 'XLSX':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    case 'PPTX':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
  }
}

export default function DocumentsPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="section-title text-center mb-6">Dokumenty</h1>

        <p className="text-center max-w-2xl mx-auto mb-12">
          Zde najdete důležité dokumenty týkající se spolku Patriot21 a obce Zlatníky-Hodkovice.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {mockDocuments.map((document) => (
              <div key={document.id} className="card p-6">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    {getFileIcon(document.fileType)}
                  </div>

                  <div className="flex-grow">
                    <h2 className="text-lg font-bold mb-2">{document.title}</h2>
                    <p className="text-gray-600 mb-3">{document.description}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {document.date}
                      </span>

                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {document.fileType}
                      </span>

                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                        </svg>
                        {document.fileSize}
                      </span>
                    </div>

                    <a
                      href={document.url}
                      className="btn btn-primary inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Stáhnout
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
