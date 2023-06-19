"use client"

import styles from './page.module.css'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'
import { MyProjects } from '@/components/MyProjects'
import { Experiences } from '@/components/Experiences'

export default function Home() {
  return (
    <main className={styles.main}>
      <Contact />
      <Experiences />
      <MyProjects />
      <Skills />
    </main>
  )
}
