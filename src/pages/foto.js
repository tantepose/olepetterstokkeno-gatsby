import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TitleBox from "../components/titlebox"
import FotoImage from "../images/foto.gif"
import content from "../content/content.json"

const PhotoContainer = styled.div `
  img {
    width: 100%;
    margin-bottom: 50px;
  }
`

const foto = () => (
  <Layout currentPage="foto">

    <SEO title="Ole Petter Baugerød Stokke fotograferer" />

    <TitleBox 
      image={FotoImage}
      link="/foto/"
      text="foto"
    />

    <PhotoContainer>
      {content.foto.map((url, index) => {
        return <a href={url}><img src={url} /></a> 
      })}
    </PhotoContainer>

  </Layout>
)

export default foto