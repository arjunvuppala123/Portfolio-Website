import EntrySection from '../components/EntrySection'
import NavBar from '../components/NavBar'
import AboutMe from '../components/AboutMe'
import MyEducation from '../components/MyEducation'
import MyProjects from '../components/Projects'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <EntrySection />
      <AboutMe />
      <MyEducation />
      <MyProjects />
    </div>
  )
}
