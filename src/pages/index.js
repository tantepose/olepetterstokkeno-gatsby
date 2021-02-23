import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"
import TitleBox from "../components/titlebox"

import SEO from "../components/seo"

const IndexPage = () => (
  <>

    <div className="frontpage">
      <SEO title="Ole Petter Baugerød Stokke" />

      <TitleBox 
        image="https://media1.giphy.com/media/l0MYGlG4YLB51v0bu/giphy.gif"
        link="/tekst/"
        text="tekst"
      />

      <TitleBox 
        image="https://media3.giphy.com/media/SJVTmWQkQoIl6eXfL2/giphy.gif"
        link="/foto/"
        text="foto"
      />

      <TitleBox 
        image="https://media0.giphy.com/media/l3xt8OjZSgwkYdm0qT/giphy.gif"
        link="/kode/"
        text="kode"
      />

      <TitleBox 
        image="https://media3.giphy.com/media/XpjARIiPRrSNFb2Acr/giphy.gif"
        link="/video/"
        text="video"
      />

      <TitleBox 
        image="https://media0.giphy.com/media/hqmpUnAqvwFn0rP8zL/giphy.gif"
        link="/musikk/"
        text="musikk"
      />

    </div>

    <Footer />
  </>
)

export default IndexPage
