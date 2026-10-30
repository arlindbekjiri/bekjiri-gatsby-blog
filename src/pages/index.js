import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Diesen Blog baue ich nach dem offiziellen Gatsby-Tutorial (M245, Aufgabe 7).</p>
      <StaticImage
        alt="Violette Grafik mit dem Schriftzug Gatsby-Blog"
        src="../images/home.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
