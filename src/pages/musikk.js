import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBox from "../components/titlebox"
import MusikkImage from "../images/musikk.gif"

import content from "../content/content.json"

// https://github.com/CookPete/react-player
import ReactPlayer from "react-player"

const musikk = () => (
  <Layout currentPage="musikk">
    <SEO title="Ole Petter Baugerød Stokke komponerer." />

    <TitleBox 
        image={MusikkImage}
        link="/musikk/"
        text="musikk"
    />
    
    {content.musikk.map((item) => {
      return (
        <ReactPlayer 
          url = {item}
          className = "player"
        />)
    })}

  </Layout>
)

export default musikk
