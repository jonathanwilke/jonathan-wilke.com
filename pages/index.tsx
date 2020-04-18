import React, { useState } from 'react'
import Head from 'next/head'
// import chroma from 'chroma-js'
import projects from '../projects'

export default function Home() {
  const currentHours = new Date().getHours()
  const [isDarkMode, setDarkMode] = useState(
    false // currentHours > 20 || currentHours < 8 ? true : false
  )

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
        <nav className="p-8">
          <div className="container mx-auto">
            <img
              src={isDarkMode ? '/logo-dark.png' : '/logo-light.png'}
              style={{ maxWidth: '15rem' }}
              alt="Jonathan Wilke - Development & Design"
            />
          </div>
        </nav>
        <div className="px-8 py-12 md:py-16 lg:py-24">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="mb-8 md:mb-0 mr-10">
                <h2
                  className={`${
                    isDarkMode ? 'text-white' : 'text-blue-900'
                  } text-4xl sm:text-5xl lg:text-6xl leading-none font-bold mb-6`}
                >
                  Development <br />& Design
                </h2>
                <p className="mb-6">
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

      <div
        className={`${
          isDarkMode
            ? 'bg-gradient-dark text-blue-200'
            : 'bg-gradient-light text-blue-900'
        } px-8 pt-12`}
      >
        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:flex-row md:items-center">
            <div className="md:w-1/2">
              <img src="/jonathan.png" alt="Jonathan Wilke" />
            </div>
            <div className="md:ml-10 pb-8 md:pb-12 md:w-1/2">
              <h1
                className={`${
                  isDarkMode ? 'text-white' : 'text-blue-900'
                } font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-none`}
              >
                Über mich
              </h1>
              <p>
                Ich bin Jonathan Wilke und entwickle und gestalte ich seit über
                13 Jahren leidenschaftlich Websites und Apps, wodurch ich schon
                viel Erfahrung mit in einem breiten Spektrum von
                Programmiersprachen sammeln konnte.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isDarkMode
            ? 'bg-gradient-dark text-blue-200'
            : 'bg-gradient-light text-blue-900'
        } px-8 py-12`}
      >
        <div className="container mx-auto">
          <h2
            className={`${
              isDarkMode ? 'text-white' : 'text-blue-900'
            } text-4xl sm:text-5xl lg:text-6xl leading-none font-bold mb-6`}
          >
            Meine Projekte
          </h2>
          {projects.map((project, i) => (
            <div
              key={i}
              className={`shadow-lg rounded-lg px-8 py-10 flex flex-col ${
                i % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center mb-6 text-center`}
              style={{
                background: project.backgroundColor,
              }}
            >
              <div
                className={`md:w-1/2 lg:w-1/3 mb-8 md:mb-0 ${
                  i % 2 == 0 ? 'md:mr-12' : 'md:ml-12'
                }`}
              >
                <img
                  className="inline-block mb-6 w-full"
                  style={{ maxWidth: '250px' }}
                  src={project.logo}
                  alt={project.title}
                />
                {project.description && (
                  <p
                    className={`${
                      project.dark ? 'text-white' : 'text-blue-900'
                    } mb-6`}
                  >
                    {project.description}
                  </p>
                )}
                <div className="mb-6">
                  {project.tags !== undefined &&
                    project.tags.map((t, i) => (
                      <span
                        className="inline-block px-2 uppercase text-sm tracking-wide font-bold"
                        style={{ color: project.mainColor }}
                        key={`project-tag-${project.title}-${i}`}
                      >
                        #{t}
                      </span>
                    ))}
                </div>
                {project.link !== undefined && (
                  <a
                    className="inline-block text-center rounded-full text-white px-6 py-2"
                    style={{ backgroundColor: project.mainColor }}
                    href={project.link}
                    target="__blank"
                  >
                    Seite ansehen &rarr;
                  </a>
                )}
              </div>
              <div className="md:w-1/2  lg:w-2/3">
                <img
                  className="max-w-full"
                  src={project.image}
                  alt={project.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
