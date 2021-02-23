import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBox from "../components/titlebox"
import FotoImage from "../images/foto.gif"

const foto = () => (
  <Layout>
    <SEO title="Ole Petter Baugerød Stokke fotograferer" />

    <TitleBox 
      image={FotoImage}
      link="/foto/"
      text="foto"
    />

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