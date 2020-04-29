import React, { useState, useEffect, useCallback, MouseEvent } from 'react'
import Head from 'next/head'
// import chroma from 'chroma-js'
import projects from '../projects'
import { useForm, ValidationError } from '@statickit/react'
import {
  ArrowRight,
  Twitter,
  GitHub,
  Facebook,
  Moon,
  Sun,
  Phone,
  Mail,
  Menu,
} from 'react-feather'
import Slider from '../components/Slider'

export default function Home() {
  const [isTop, setIsTop] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [visibleSection, setVisibleSection] = useState('hero')
  const [state, handleSubmit] = useForm('contactForm')
  const currentHours = new Date().getHours()
  const [isDarkMode, setDarkMode] = useState(false)

  const handleScroll = useCallback(() => {
    const sections = document.getElementsByTagName('section')
    const offsetY = window.scrollY + window.innerHeight

    if (window.scrollY < 50 !== isTop) {
      setIsTop(window.scrollY < 50)
    }

    let currentSection = sections[0].id
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop + window.innerHeight / 2 > offsetY) {
        break
      }
      currentSection = sections[i].id
    }
    setVisibleSection(currentSection)
  }, [isTop, setIsTop, visibleSection, setVisibleSection])

  const toggleDarkMode = (e: MouseEvent) => {
    e.preventDefault()
    setDarkMode(!isDarkMode)
  }

  const toggleMenu = (e: MouseEvent) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }

  const scrollToSection = (event: MouseEvent, sectionId: string) => {
    event.preventDefault()
    const section = document.getElementById(sectionId)

    if (section) {
      const sectionOffset = section.offsetTop
      window.scrollTo({
        top: sectionOffset - 80,
        behavior: 'smooth',
      })
    }

    setMenuOpen(false)
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    setDarkMode(currentHours > 20 || currentHours < 8 ? true : false)
  }, [])

  return (
    <div className="font-display">
      <Head>
        <title>Jonathan Wilke - Development & Design</title>
        <meta
          name="description"
          content="Gemeinsam mit meinen Kunden entwickle und gestalte ich
                individuelle Lösungen für Mobile- und Web-Applikationen."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jonathan-wilke.com/" />
        <meta
          property="og:title"
          content="Jonathan Wilke - Development & Design"
        />
        <meta
          property="og:description"
          content="Gemeinsam mit meinen Kunden entwickle und gestalte ich
                individuelle Lösungen für Mobile- und Web-Applikationen."
        />
        <meta
          property="og:image"
          content="https://jonathan-wilke.com/icon.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jonathan-wilke.com/" />
        <meta
          property="twitter:title"
          content="Jonathan Wilke - Development & Design"
        />
        <meta
          property="twitter:description"
          content="Gemeinsam mit meinen Kunden entwickle und gestalte ich
                individuelle Lösungen für Mobile- und Web-Applikationen."
        />
        <meta
          property="twitter:image"
          content="https://jonathan-wilke.com/icon.png"
        />
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <nav
        className={`${
          !isTop || menuOpen
            ? (isDarkMode ? 'bg-gradient-dark' : 'bg-gradient-light') +
              ' shadow-xs'
            : 'bg-transparent'
        } ${isDarkMode ? 'text-white' : 'text-blue-900'} ${
          menuOpen ? 'h-screen' : 'h-24'
        } lg:h-auto p-8 fixed top-0 left-0 w-full duration-150 ease-in-out z-50 overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div
          className={`container mx-auto flex flex-col lg:flex-row justify-between items-center ${
            menuOpen ? 'h-full' : 'h-auto'
          } lg:h-auto`}
        >
          <div className="flex justify-between items-center w-full mb-8 lg:mb-0 lg:w-auto">
            <img
              src={isDarkMode ? '/logo-dark.png' : '/logo-light.png'}
              style={{ maxWidth: '15rem' }}
              className="block flex-shrink-0 flex-grow-0 flex-auto"
              alt="Jonathan Wilke - Development & Design"
            />
            <a href="#" onClick={toggleMenu} className="lg:hidden">
              <Menu />
            </a>
          </div>
          <ul className="flex flex-col lg:flex-row items-center text-lg lg:text-md mb-8 lg:mb-0">
            <li>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className={`p-4 block font-bold ${
                  visibleSection === 'about' && 'text-blue-500'
                }`}
              >
                Über mich
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className={`p-4 block font-bold ${
                  visibleSection === 'projects' && 'text-blue-500'
                }`}
              >
                Projekte
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className={`p-4 block font-bold ${
                  visibleSection === 'contact' && 'text-blue-500'
                }`}
              >
                Kontakt
              </a>
            </li>
          </ul>

          <ul className="flex items-center">
            <li>
              <a
                href="#"
                onClick={toggleDarkMode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-bold w-10 h-10 rounded-full text-center leading-10"
              >
                {isDarkMode ? (
                  <Sun className="inline-block" />
                ) : (
                  <Moon className="inline-block" />
                )}
              </a>
            </li>
            <li>
              <a
                href="http://twitter.com/jonathan_wilke"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDarkMode ? 'bg-blue-800' : 'bg-white'
                } inline-block font-bold w-10 h-10 rounded-full text-center leading-10  text-blue-500 ml-4`}
              >
                <Twitter size={20} className="inline-block" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/wilke.jon"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDarkMode ? 'bg-blue-800' : 'bg-white'
                } inline-block font-bold w-10 h-10 rounded-full text-center leading-10  text-blue-500 ml-4`}
              >
                <Facebook size={20} className="inline-block" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jonathanwilke"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDarkMode ? 'bg-blue-800' : 'bg-white'
                } inline-block font-bold w-10 h-10 rounded-full text-center leading-10  text-blue-500 ml-4`}
              >
                <GitHub size={20} className="inline-block" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section
        id="hero"
        className={`${
          isDarkMode
            ? 'bg-gradient-dark text-blue-200'
            : 'bg-gradient-light text-blue-900'
        } px-8 pb-24 pt-40`}
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="mb-8 md:mb-0 mr-10 md:w-1/2">
              <h2
                className={`${
                  isDarkMode ? 'text-white' : 'text-blue-900'
                } text-4xl sm:text-5xl leading-tight font-bold mb-6`}
              >
                <span className="text-blue-500">Development & Design</span> für
                Ihr digitales Business
              </h2>
              <p className="mb-6">
                Gemeinsam mit meinen Kunden entwickle und gestalte ich
                individuelle Lösungen für Mobile- und Web-Applikationen.
              </p>
              <a
                className={`${
                  isDarkMode
                    ? 'bg-blue-900 hover:bg-blue-800'
                    : 'bg-blue-100 hover:bg-blue-200'
                } font-bold text-blue-500 px-6 py-2 rounded-full transition-color duration-150 ease-in-out`}
                href="#projects"
              >
                Meine Projekte ansehen{' '}
                <ArrowRight size={16} className="inline-block" />
              </a>
            </div>
            <div className="md:w-1/2">
              <Slider />
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className={`${
          isDarkMode
            ? 'bg-gradient-dark text-blue-200'
            : 'bg-gradient-light text-blue-900'
        } px-8 pt-16`}
      >
        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:flex-row md:items-center">
            <div className="md:w-1/2">
              <img src="/jonathan.png" alt="Jonathan Wilke" />
            </div>
            <div className="md:ml-10 pb-16 md:w-1/2">
              <h1
                className={`${
                  isDarkMode ? 'text-white' : 'text-blue-900'
                } font-bold text-4xl sm:text-5xl mb-6 leading-none`}
              >
                Über mich
              </h1>
              <p className="mb-6">
                Ich bin Jonathan Wilke und entwickle und gestalte seit über 13
                Jahren Mobile- und Web-Applikationen. Die letzen 3 Jahre habe
                ich Computervisualistik und Design studiert. Durch viele
                verschiedene Projekte konnte ich schon viel Erfahrung in einem
                breiten Spektrum an Programmiersprachen und Frameworks sammeln.
              </p>
              <ul>
                <li
                  className={`${
                    isDarkMode ? 'bg-blue-800' : 'bg-blue-200'
                  } block rounded-full mb-2`}
                >
                  <span
                    className="bg-blue-500 block py-1 px-4 text-sm text-white font-bold rounded-full"
                    style={{ width: '90%' }}
                  >
                    UI / UX Design
                  </span>
                </li>
                <li
                  className={`${
                    isDarkMode ? 'bg-blue-800' : 'bg-blue-200'
                  } block rounded-full mb-2`}
                >
                  <span
                    className="bg-blue-500 block py-1 px-4 text-sm text-white font-bold rounded-full"
                    style={{ width: '100%' }}
                  >
                    HTML 5 / CSS 3
                  </span>
                </li>
                <li
                  className={`${
                    isDarkMode ? 'bg-blue-800' : 'bg-blue-200'
                  } block rounded-full mb-2`}
                >
                  <span
                    className="bg-blue-500 block py-1 px-4 text-sm text-white font-bold rounded-full"
                    style={{ width: '90%' }}
                  >
                    JavaScript / NodeJS
                  </span>
                </li>
                <li
                  className={`${
                    isDarkMode ? 'bg-blue-800' : 'bg-blue-200'
                  } block rounded-full mb-2`}
                >
                  <span
                    className="bg-blue-500 block py-1 px-4 text-sm text-white font-bold rounded-full"
                    style={{ width: '70%' }}
                  >
                    PHP
                  </span>
                </li>
                <li
                  className={`${
                    isDarkMode ? 'bg-blue-800' : 'bg-blue-200'
                  } block rounded-full mb-2`}
                >
                  <span
                    className="bg-blue-500 block py-1 px-4 text-sm text-white font-bold rounded-full"
                    style={{ width: '50%' }}
                  >
                    Go
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className={`${
          isDarkMode
            ? 'bg-gradient-dark text-blue-200'
            : 'bg-gradient-light text-blue-900'
        } px-8 py-16`}
      >
        <div className="container mx-auto">
          <h2
            className={`${
              isDarkMode ? 'text-white' : 'text-blue-900'
            } text-4xl sm:text-5xl leading-none md:text-center font-bold mb-12`}
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
      </section>

      <section
        id="contact"
        className="bg-gradient-blue px-8 py-16 text-blue-900"
      >
        <div className="container max-w-screen-sm md:max-w-screen-lg mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h2
                className={`text-white text-4xl sm:text-5xl leading-none font-bold mb-8`}
              >
                Kontakt
              </h2>
              <p className="mb-8">
                Wenn Sie Interesse haben ein Projekt mit mir zusammen
                umzusetzen, schreiben Sie mir gerne eine Nachricht oder rufen
                Sie mich an. Ich freue mich darauf, von Ihnen zu hören!
              </p>
              <ul className="flex items-start flex-wrap mb-8">
                <li className="mb-3 mr-6">
                  <a
                    href="http://twitter.com/jonathan_wilke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full text-center leading-10"
                  >
                    <Phone
                      size={20}
                      className="inline-block mr-3  text-white"
                    />
                    <span>0151 4056 3078</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@jonathan-wilke.de"
                    className="inline-block rounded-full text-center leading-10"
                  >
                    <Mail size={20} className="inline-block mr-3  text-white" />
                    <span>info@jonathan-wilke.de</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 md:ml-12">
              <form onSubmit={handleSubmit}>
                {state.succeeded && (
                  <div className="text-center text-white text-blue-900 font-bold">
                    Vielen Dank für Ihre Anfrage! Ich werde mich so bald wie
                    möglich bei Ihnen melden.
                  </div>
                )}

                {!state.succeeded && (
                  <div>
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="block mb-2 font-bold text-blue-900"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="name"
                        name="name"
                        className="px-6 py-2 rounded-lg w-full text-white bg-transparent border-2 border-blue-600 hover:border-blue-700 focus:border-white outline-none transition-colors ease-in-out duration-150"
                        required
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block mb-2 font-bold text-blue-900"
                      >
                        E-Mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="px-6 py-2 rounded-lg w-full bg-transparent text-white border-2 border-blue-600 hover:border-blue-700 focus:border-white outline-none transition-colors ease-in-out duration-150"
                        required
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block mb-2 font-bold text-blue-900"
                      >
                        Nachricht
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="px-6 py-4 rounded-lg w-full h-24 text-white bg-transparent border-2 border-blue-600 hover:border-blue-700 focus:border-white outline-none transition-colors ease-in-out duration-150"
                        required
                      />
                      <ValidationError
                        prefix="Nachricht"
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="bg-blue-800 font-bold text-white px-6 py-2 w-full rounded-full hover:bg-blue-700 transition-colors duration-150 ease-in-out disabled:opacity-50"
                    >
                      {state.submitting ? 'Wird gesendet...' : 'Absenden'}
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer
        className={`${
          isDarkMode
            ? 'bg-gradient-dark text-blue-200'
            : 'bg-gradient-light text-blue-900'
        } px-8 py-16 text-center`}
      >
        © Copyright 2020 by Jonathan Wilke - <a href="/impressum">Impressum</a>{' '}
        - <a href="/datenschutzerklaerung">Datenschutzerklärung</a>
      </footer>
    </div>
  )
}
