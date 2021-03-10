import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBox from "../components/titlebox"
import MusikkImage from "../images/musikk.gif"

// https://github.com/CookPete/react-player
import ReactPlayer from "react-player"

const musikk = () => (
  <Layout currentPage="musikk">
    <SEO title="Ole Petter Baugerød Stokke lager musikk" />

    <TitleBox 
        image={MusikkImage}
        link="/musikk/"
        text="musikk"
    />
    
    <ReactPlayer
        url="https://soundcloud.com/tante-pose/sets/lppf"
        width="100%"
        style={{paddingBottom:30}}
    />

    <ReactPlayer 
      url="https://soundcloud.com/tante-pose/sets/heidi-heggeli"
      width="100%"
      style={{paddingBottom:30}}
    />

    <ReactPlayer 
      url="https://soundcloud.com/tante-pose/sets/norske-8-bit-tv-serie-introer"
      width="100%"
      style={{paddingBottom:30}}
    />


  </Layout>
)

export default musikk
