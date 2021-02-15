import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Footer from "../components/footer"
import SEO from "../components/seo"

const IndexPage = () => (
  <div className="frontpage">
    <SEO title="Ole Petter Baugerød Stokke" />

    <h1>Hei, jeg heter Ole Petter Baugerød Stokke.</h1>
    <p>Jeg driver med blant annet:</p>
    <Link to="/tekst/">tekst</Link> <br />
    <Link to="/kode/">kode</Link> <br />
    <Link to="/foto/">foto</Link> <br />
    <Link to="/video/">video</Link> <br />
    <Link to="/musikk/">video</Link> <br />

    <Footer />
  </div>

)

export default IndexPage
