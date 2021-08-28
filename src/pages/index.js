import { graphql, Link } from "gatsby"
import React from "react"
import Layout from '../pages/components/Layout'
import * as styles from '../pages/styles/home.module.css'

export default function Home({ data }) {
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Desisgn</h2>
          <h3>Develop and Deploy</h3>
          <p>Mollit esse cillum culpa excepteur aliquip fugiat minim reprehenderit.
          Mollit esse cillum culpa excepteur aliquip fugiat minim reprehenderit.
          Mollit esse cillum culpa excepteur aliquip fugiat minim reprehenderit.
          Mollit esse cillum culpa excepteur aliquip fugiat minim reprehenderit.
          Mollit esse cillum culpa excepteur aliquip fugiat minim reprehenderit.</p>

          <Link className={styles.btn} to="/tasks">About</Link>
        </div>
        <img src="image.png" alt="website home" style={{maxWidth: '100%'}} />

        <div>
          {projects.map(project => (
                <h3> {project.frontmatter.title} </h3>
          ))}
        </div>
      </section>
    </Layout>
  )
}
export const query = graphql`
  query ProjectPage {
    allMarkdownRemark {
      nodes{
        frontmatter{
          stack
          title
        }
        id
      }
    }
  }`
