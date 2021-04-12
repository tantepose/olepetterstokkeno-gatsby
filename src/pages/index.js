import React from "react"

import TitleBox from "../components/titlebox"
import SEO from "../components/seo"
import Layout from "../components/layout"

import TekstImage from "../images/tekst.gif"
import KodeImage from "../images/kode.gif"
import FotoImage from "../images/foto.gif"
import VideoImage from "../images/video.gif"
import MusikkImage from "../images/musikk.gif"
import CVImage from "../images/CV.gif"

const IndexPage = () => (
  <Layout currentPage="frontpage">
      <SEO title="Ole Petter Baugerød Stokke" />

      <TitleBox 
        image={TekstImage}
        link="/tekst/"
        text="tekst"
      />

      <TitleBox 
        image={KodeImage}
        link="/kode/"
        text="kode"
      />

      <TitleBox 
        image={VideoImage}
        link="/video/"
        text="video"
      />

      <TitleBox 
        image={FotoImage}
        link="/foto/"
        text="foto"
      />

      <TitleBox 
        image={MusikkImage}
        link="/musikk/"
        text="musikk"
      />

      <TitleBox 
        image={CVImage}
        link="/CV/"
        text="CV"
      />

  </Layout>
)

export default IndexPage
