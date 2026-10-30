import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Ich bin Arlind Bekjiri, Lernender Informatik (BBW). Diese Seite ist meine Framework-Card «Gatsby» für M245.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage
