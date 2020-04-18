import React, { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [isDarkMode, setDarkMode] = useState(true)

  const getModeTextColor = () => {
    return isDarkMode ? 'text-white' : 'text-blue-900'
  }

  return (
    <div className="font-display">
      <Head>
        <title>Jonathan Wilke - Development & Design</title>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className={`${
          isDarkMode
            ? 'bg-gradient-dark text-blue-200'
            : 'bg-gradient-light text-blue-900'
        }`}
      >
        <nav className="px-6 py-8">
          <div className="container mx-auto">
            <img
              src={isDarkMode ? '/logo-dark.png' : '/logo-light.png'}
              style={{ maxWidth: '15rem' }}
              alt="Jonathan Wilke - Development & Design"
            />
          </div>
        </nav>
        <div className="px-6 py-12">
          <div className="container mx-auto mb-8">
            <div className="flex flex-col md:flex-row">
              <div className="mb-8 md:mb-0 mr-10">
                <h2
                  className={`${
                    isDarkMode ? 'text-white' : 'text-blue-900'
                  } text-5xl lg:text-6xl leading-none font-bold mb-6`}
                >
                  Development <br />& Design
                </h2>
                <p className="mb-4">
                  Ich entwickle und gestalte für Sie individuelle Lösungen für
                  Websites und mobile Applikationen.
                </p>
                <button
                  className={`${
                    isDarkMode
                      ? 'bg-blue-900 hover:bg-blue-800'
                      : 'bg-blue-100 hover:bg-blue-200'
                  } font-bold text-blue-500 px-6 py-2 rounded-full transition-color duration-150 ease-in-out`}
                  onClick={() => setDarkMode(!isDarkMode)}
                >
                  Switch night mode
                </button>
              </div>
              <div>
                <img src="/work-kammbaeck.png" alt="Kammbäck Frisöre" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-blue px-8 py-12">
        <div className="container mx-auto">
          <h1 className="text-white font-bold text-5xl lg:text-6xl mb-6 leading-none">
            Über mich
          </h1>
          <p className="text-blue-900">
            Ich bin Jonathan Wilke und studiere derzeit an der
            Computervisualistik und Design im 6. Semester. <br />
            <br /> Zudem entwickle und gestalte ich seit über 10 Jahren
            leidenschaftlich Websites und Apps, wodurch ich schon viel Erfahrung
            mit in einem breiten Spektrum von Programmiersprachen sammeln
            konnte.
          </p>
        </div>
      </div>

      <footer>
        <a
          href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
        </a>
      </footer>
    </div>
  )
}
