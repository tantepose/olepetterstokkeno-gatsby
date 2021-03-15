import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBox from "../components/titlebox"
import VideoImage from "../images/video.gif"

import content from "../content/content.json"

const video = () => (
  <Layout currentPage="video">
    <SEO title="Ole Petter Baugerød Stokke filmer" />

    <TitleBox 
        image={VideoImage}
        link="/video/"
        text="video"
    />

    {Object.keys(content.video).map((category, index) => { //map thru content.tekst keys (categories) as array
      return (
        <>
          <h1>{category}</h1>
          <ul>
            {content.video[category].map((item, index) => { // map thru items in each category
              return <li><a href={item.url}>{item.title}</a></li>
            })}
          </ul>
        </>
      )
    })}

  </Layout>
)

export default video
