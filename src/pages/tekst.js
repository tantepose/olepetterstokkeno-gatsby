import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBox from "../components/titlebox"
import TekstImage from "../images/tekst.gif"

const tekst = () => (
  <Layout>
    <SEO title="Ole Petter Baugerød Stokke skriver" />

    <TitleBox 
        image={TekstImage}
        link="/tekst/"
        text="tekst"
    />
    
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>

  </Layout>
)

export default tekst
