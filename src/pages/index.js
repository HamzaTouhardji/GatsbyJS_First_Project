import { Link } from "gatsby"
import React from "react"
import Layout from '../pages/components/Layout'
import styles from '../pages/styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <section>
        <div>
          <h2>Desissgn</h2>
          <h3>Develop and Deploy</h3>
          <p>Mollit esse cillum culpa excepteur aliquip fugiat minim reprehenderit.</p>
          <p>Mollit esse cillum culpa excepteur aliquip fugiat minim reprehenderit.</p>
          <p>Mollit esse cillum culpa excepteur aliquip fugiat minim reprehenderit.</p>
          <p>Mollit esse cillum culpa excepteur aliquip fugiat minim reprehenderit.</p>
          <p>Mollit esse cillum culpa excepteur aliquip fugiat minim reprehenderit.</p>
          le bouton
          <Link className={styles.btn} to="/about">About</Link>
        </div>
      </section>
    </Layout>
  )
}
