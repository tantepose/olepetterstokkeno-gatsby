import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TitleBox from "../components/titlebox"
import TekstImage from "../images/tekst.gif"
import content from "../content/content.json"

const tekst = () => (
  <Layout currentPage="tekst">
    <SEO title="Ole Petter Baugerød Stokke skriver" />

    <TitleBox 
        image={TekstImage}
        link="/tekst/"
        text="tekst"
    />

    <h1>artikler:</h1>
    <ul>
      {content.tekst.artikler.map((item, index) => {
        return  <>  
          <li><a href={item.url}>{item.title}</a></li>
        </>
      })}
    </ul>
   
    <h1>diverse:</h1>
    <ul>
      {content.tekst.diverse.map((item, index) => {
        return  <>  
          <li><a href={item.url}>{item.title}</a></li>
        </>
      })}
    </ul>

  </Layout>
)

export default tekst
