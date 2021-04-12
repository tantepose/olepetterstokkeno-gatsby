import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBox from "../components/titlebox"
import VideoImage from "../images/video.gif"

import content from "../content/content.json"

// https://github.com/CookPete/react-player
import ReactPlayer from "react-player"

const video = () => (
  <Layout currentPage="video">
    <SEO title="Ole Petter Baugerød Stokke filmer" />

    <TitleBox 
        image={VideoImage}
        link="/video/"
        text="video"
    />

    {Object.keys(content.video).map((category) => { //map thru content.tekst keys (categories) as array
      return (
        <>
          <h1>{category}</h1>

            {content.video[category].map((item) => { // map thru items in each category
              return (
                <ReactPlayer 
                  url = {item}
                  controls = {true}
                  className = "player" 
                />)
            })}

        </>
      )
    })}

  </Layout>
)

export default video
