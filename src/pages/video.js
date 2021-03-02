import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBox from "../components/titlebox"
import VideoImage from "../images/video.gif"

const video = () => (
  <Layout currentPage="video">
    <SEO title="Ole Petter Baugerød Stokke filmer" />

    <TitleBox 
        image={VideoImage}
        link="/video/"
        text="video"
    />

    <p>Her er et par ting jeg har filma.</p>
    <p>Her er et par ting jeg har filma.</p>
    <p>Her er et par ting jeg har filma.</p>
    <p>Her er et par ting jeg har filma.</p>
    <p>Her er et par ting jeg har filma.</p>
    <p>Her er et par ting jeg har filma.</p>
    <p>Her er et par ting jeg har filma.</p>
    <p>Her er et par ting jeg har filma.</p>
    <p>Her er et par ting jeg har filma.</p>
    <p>Her er et par ting jeg har filma.</p>
    <p>Her er et par ting jeg har filma.</p>
    <p>Her er et par ting jeg har filma.</p>
    <p>Her er et par ting jeg har filma.</p>
    <p>Her er et par ting jeg har filma.</p>
    <p>Her er et par ting jeg har filma.</p>
  </Layout>
)

export default video
