import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBox from "../components/titlebox"


const foto = () => (
  <Layout>
    <SEO title="Ole Petter Baugerød Stokke koder" />

    <TitleBox 
      image="https://media3.giphy.com/media/SJVTmWQkQoIl6eXfL2/giphy.gif"
      link="/foto/"
      text="foto"
    />
    
    {/* <div className="title-box">
        <img src="https://media3.giphy.com/media/SJVTmWQkQoIl6eXfL2/giphy.gif"></img>
        <Link to="/foto/">foto</Link>
    </div> */}

    <p>Her er et par ting jeg har fotografert.</p>
    <p>Her er et par ting jeg har fotografert.</p>
    <p>Her er et par ting jeg har fotografert.</p>
    <p>Her er et par ting jeg har fotografert.</p>
    <p>Her er et par ting jeg har fotografert.</p>
    <p>Her er et par ting jeg har fotografert.</p>
    <p>Her er et par ting jeg har fotografert.</p>
    <p>Her er et par ting jeg har fotografert.</p>

  

  </Layout>
)

export default foto