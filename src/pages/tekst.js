import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TitleBox from "../components/titlebox"
import TekstImage from "../images/tekst.gif"
import content from "../content/content.json"

const tekst = () => (
  <Layout currentPage="tekst">
    <SEO title="Ole Petter Baugerød Stokke skriver." />

    <TitleBox 
        image={TekstImage}
        link="/tekst/"
        text="tekst"
    />

    {Object.keys(content.tekst).map((category) => { //map thru content.tekst keys (categories) as array
      return (
        <>
          <h1>{category}</h1>
          <ul>
            {content.tekst[category].map((item) => { // map thru items in category
              return <li><a href={item.url}>{item.title}</a></li>
            })}
          </ul>
        </>
      )
    })}

  </Layout>
)

export default tekst
