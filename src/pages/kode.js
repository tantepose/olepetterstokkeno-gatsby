import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TitleBox from "../components/titlebox"
import KodeImage from "../images/kode.gif"

import content from "../content/content.json"

const kode = () => (
  <Layout currentPage="kode">
    <SEO title="Ole Petter Baugerød Stokke koder" />

    <TitleBox 
        image={KodeImage}
        link="/kode/"
        text="kode"
    />

    {content.kode.map((item, index) => {
      return  <>
        <h1><a href={item.url}>{item.title}</a></h1> 
        <p>{item.description}</p>
        {item.source ? <a href={item.source}><i>(kildekode)</i></a> : null }
      </>
    })}

  </Layout>
)

export default kode
