import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBox from "../components/titlebox"

import CVImage from "../images/CV.gif"
import content from "../content/content.json"

const CV = () => (
  <Layout currentPage="CV">
    <SEO title="Ole Petter Baugerød Stokke skriver" />

    <TitleBox 
        image={CVImage}
        link="/CV/"
        text="CV"
    />

    {content.CV.map((item) => {
        return  <>
            <h1>{item.year}</h1> 
            <p>{item.description}</p>
        </>
    })}

  </Layout>
)

export default CV
