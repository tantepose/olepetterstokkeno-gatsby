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
        <img src="https://media1.giphy.com/media/gH85KtY9fX2yd9eG4F/giphy.gif"></img>
        <Link to="/tekst/">tekst</Link> 
      </div>

      <div className="title-box">
        <img src="https://media3.giphy.com/media/SJVTmWQkQoIl6eXfL2/giphy.gif"></img>
        <Link to="/foto/">foto</Link>
      </div>

      <div className="title-box">
        <img src="https://media0.giphy.com/media/l3xt8OjZSgwkYdm0qT/giphy.gif"></img>
        <Link to="/kode/">kode</Link> 
      </div>

      <div className="title-box">
        <img src="https://media2.giphy.com/media/4PXXgk8pFA5d7d53HJ/giphy.gif"></img>
        <Link to="/video/">video</Link> 
      </div>

      <div className="title-box">
        <img src="https://media0.giphy.com/media/hqmpUnAqvwFn0rP8zL/giphy.gif"></img>
        <Link to="/musikk/">musikk</Link> 
      </div>

    </div>

    <Footer />
  </>
)

export default IndexPage
