import { useState } from "react";
import styles from './Projects.module.css'

const projects = [
  {
    name: 'Bite Size',
    desc: 'A full-flavoured recipe app, that trimmed the fat, and is presented in a bite-sized, easily digestible format.',
    img: 'images/bite-size.png',
    liveLink: '',
    codeLink: 'https://github.com/sydney-sisco/bite-size',
  },
  {
    name: 'Not-So-Smart',
    desc: 'An AI powered todo list app that sorts your tasks into categories.',
    img: 'images/not-so-smart.png',
    liveLink: 'https://notsosmart.herokuapp.com',
    codeLink: 'https://github.com/sydney-sisco/Smart-TODO-List',
  },
  {
    name: 'Scheduler',
    desc: 'A scheduler app built in React',
    img: 'images/scheduler.png',
    liveLink: 'https://scheduler.sydsis.co/',
    codeLink: 'https://github.com/sydney-sisco/scheduler',
  },
]

export default function Projects({onHome}) {
  const [active, setActive] = useState(0);

  return (
    <main className={styles.projects}>
      <div className={styles.left}>
        <h1>{'Projects'.toUpperCase()}</h1>
        <ul>
          {projects.map((project, index) => <a href="/" onClick={e => {e.preventDefault(); setActive(index)}} key={index}><li>{project.name.toUpperCase()}</li></a>)}
        </ul>
      </div>
      <div className={styles.right}>
        <img src={projects[active].img} alt={projects[active].name} />
        <div className={styles.links}>
          <a href={projects[active].liveLink} alt="live link">LIVE</a>
          <a href={projects[active].codeLink} alt="code link">CODE</a>
        </div>
        <p>{projects[active].desc}</p>
      </div>
      <footer>
        <a href="/" onClick={e => {e.preventDefault(); onHome()}}>
          <h3>BACK</h3>
        </a>
      </footer>
    </main>
  )
}
