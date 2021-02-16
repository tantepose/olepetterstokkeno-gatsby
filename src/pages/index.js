import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Footer from "../components/footer"
import SEO from "../components/seo"

const IndexPage = () => (
  <>

    <div className="frontpage">
      <SEO title="Ole Petter Baugerød Stokke" />

      <div className="title-box">
        <img src="https://media4.giphy.com/media/nT1MrLuNqrBnO/giphy.gif"></img>
        <Link to="/tekst/">tekst</Link> <br />
      </div>

      <div className="title-box">
        <img src="https://media2.giphy.com/media/iH7LG5cKYdgehqixqM/giphy.gif"></img>
        <Link to="/kode/">kode</Link> <br />
      </div>

      <div className="title-box">
        <img src="https://media1.giphy.com/media/dYdJbsO2Ek7LYGxWd5/giphy.gif"></img>
        <Link to="/video/">video</Link> <br />
      </div>
    </div>

    <Footer />
  </>
)

export default IndexPage
