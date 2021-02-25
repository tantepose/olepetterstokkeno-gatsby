import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBox from "../components/titlebox"
import KodeImage from "../images/kode.gif"

const kode = () => (
  <Layout>
    <SEO title="Ole Petter Baugerød Stokke koder" />

    <TitleBox 
        image={KodeImage}
        link="/kode/"
        text="kode"
    />

    <h1><a href="http://friend.fail/">friend.fail</a></h1>
    <p>friend.fail er et spill om å feile som venn. <br/>
    Spilles med to eller flere personer på én mobil.</p>
    <a href="github.com/asd">(kildekode)</a>

    <h1><a href="friend.fail">2 cars, 1 road</a></h1>
    <p>friend.fail er et spill om å feile som venn. <br/>
    Spilles med to eller flere personer på én mobil.</p>
    <a href="github.com/asd">(kildekode)</a>

    <h1><a href="friend.fail">fyllesnakk</a></h1>
    <p>friend.fail er et spill om å feile som venn. <br/>
    Spilles med to eller flere personer på én mobil.</p>
    <a href="github.com/asd">(kildekode)</a>

    <h1><a href="http://friend.fail/">friend.fail</a></h1>
    <p>friend.fail er et spill om å feile som venn. <br/>
    Spilles med to eller flere personer på én mobil.</p>
    <a href="github.com/asd">(kildekode)</a>

    <h1><a href="friend.fail">2 cars, 1 road</a></h1>
    <p>friend.fail er et spill om å feile som venn. <br/>
    Spilles med to eller flere personer på én mobil.</p>
    <a href="github.com/asd">(kildekode)</a>

    <h1><a href="friend.fail">fyllesnakk</a></h1>
    <p>friend.fail er et spill om å feile som venn. <br/>
    Spilles med to eller flere personer på én mobil.</p>
    <a href="github.com/asd">(kildekode)</a>

  </Layout>
)

export default kode
