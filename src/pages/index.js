import { graphql, Link } from "gatsby"
import React from "react"
import Layout from '../pages/components/Layout'
import * as styles from '../pages/styles/home.module.css'

export default function Home({ data}) {
  console.log(data)
  const {title, description} = data.site.siteMetadata
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Desissgn</h2>
          <h3>Develop and Deploy</h3>
          <p>Mollit esse cillum culpa excepteur aliquip fugiat minim reprehenderit.
          Mollit esse cillum culpa excepteur aliquip fugiat minim reprehenderit.
          Mollit esse cillum culpa excepteur aliquip fugiat minim reprehenderit.
          Mollit esse cillum culpa excepteur aliquip fugiat minim reprehenderit.
          Mollit esse cillum culpa excepteur aliquip fugiat minim reprehenderit.</p>

          voici la data =  {title}, {description}
          <Link className={styles.btn} to="/about">About</Link>
        </div>
        <img src="image.png" alt="website home" style={{maxWidth: '100%'}} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description, 
        title
      }
    }
  }`
