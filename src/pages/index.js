import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"
import TitleBox from "../components/titlebox"
import SEO from "../components/seo"

import TekstImage from "../images/tekst.gif"
import KodeImage from "../images/kode.gif"
import FotoImage from "../images/foto.gif"
import VideoImage from "../images/video.gif"
import MusikkImage from "../images/musikk.gif"

const IndexPage = () => (
  <>

    <div className="frontpage">
      <SEO title="Ole Petter Baugerød Stokke" />

      <TitleBox 
        image={TekstImage}
        link="/tekst/"
        text="tekst"
      />

      <TitleBox 
        image={FotoImage}
        link="/foto/"
        text="foto"
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
        image={MusikkImage}
        link="/musikk/"
        text="musikk"
      />

    </div>

    <Footer />
  </>
)

export default IndexPage
