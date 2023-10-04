import EntrySection from '../components/EntrySection'
import NavBar from '../components/NavBar'
import AboutMe from '../components/AboutMe'
import MyEducation from '../components/MyEducation'
import MyProjects from '../components/Projects'
import Skills from '../components/Skills'
import ContactUs from '../components/ContactUs'

import styles from '../styles/Home.module.css'

import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Arjun Vuppala | My Portfolio Website</title>
      <meta name="description" content="Portfolio of Arjun Vuppala" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.container}>
      <NavBar />
      <EntrySection />
      <AboutMe />
      <MyEducation />
      <Skills />
      <MyProjects />
      <ContactUs />
    </div>
    </>
  )
}
