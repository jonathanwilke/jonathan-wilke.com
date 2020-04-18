export interface Project {
  title: string
  description?: string
  link?: string
  image: string
  logo?: string
  mainColor: string
  backgroundColor: string
  dark?: boolean
  tags?: string[]
}

const projects: Project[] = [
  {
    title: 'Kammbäck Frisöre',
    description:
      'Für den Frisörsalon Kammbäck in Hamm gestaltete ich die neue Website und setzte diese mit Wordpress um.',
    link: 'http://kammbäck-frisöre.de',
    image: '/work-kammbaeck.png',
    logo: '/work-kammbaeck-logo.png',
    mainColor: '#DA0812',
    backgroundColor: '#202428',
    tags: ['wordpress', 'design'],
    dark: true,
  },
  {
    title: 'Familienwerkstatt Menschenkind',
    description:
      'Für die Familienwerkstatt Menschenkind entwarf ich den Internetauftritt und implementierte diesen mit Wordpress.',
    link: 'http://familienwerkstatt-hamm.de',
    image: '/work-familienwerkstatt.png',
    logo: '/work-familienwerkstatt-logo.png',
    mainColor: '#074071',
    backgroundColor: '#FFE9BF',
    tags: ['wordpress', 'design'],
  },
  {
    title: 'Pianos Pizza',
    image: '/work-pianos.png',
    logo: '/work-pianos-logo.png',
    mainColor: '#77AC29',
    backgroundColor: '#F0F0F0',
    tags: ['php', 'design'],
  },
  {
    title: 'Übe Erleben',
    link: 'http://uebe-erleben.de',
    image: '/work-uebe-erleben.png',
    logo: '/work-uebe-erleben-logo.png',
    mainColor: '#95252C',
    backgroundColor: '#F0CDA1',
    tags: ['wordpress', 'design'],
  },
  {
    title: 'Vincent Niehues Website',
    link: 'http://vniehues.de',
    image: '/work-vniehues.png',
    logo: '/work-vniehues-logo.png',
    mainColor: '#4DDAA4',
    backgroundColor: '#E4EAED',
    tags: ['react', 'design'],
  },
  {
    title: 'Finally Friday',
    link: 'http://finallyfriday.de',
    image: '/work-finally-friday.png',
    logo: '/work-finally-friday-logo.png',
    mainColor: '#F9007E',
    backgroundColor: '#111111',
    tags: ['wordpress', 'design'],
    dark: true,
  },
]

export default projects
