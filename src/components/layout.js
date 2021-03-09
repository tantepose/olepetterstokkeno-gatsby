/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./layout.css" //used only for imports of Google fonts

const Layout = (props) => {

  // styling body with a GlobalStyle component
  const GlobalStyle = createGlobalStyle`
    body {
      
      margin: 0;
      padding: 0;

      --background-color: #232530;
      --foreground-color: #FAC29A;
      --highlight-color: #E95678;

      color: var(--foreground-color); 
      background-color: var(--background-color);

      font-family: 'JetBrains Mono', monospace;
      text-align: center;
    }

    //scrollbar styling
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: none;
    }

    ::-webkit-scrollbar-thumb {
      background: #FAC29A;
      border-radius: 5px;
    }

  `

  const StyledLayout = styled.div`
    padding-left: 10%;
    padding-right: 10%;

    a {
    color: var(--highlight-color);
    text-decoration: none;
    }

    a:hover {
        color: var(--foreground-color);
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    h1 {
      margin-top: 70px;
      margin-bottom: 0px;
    }

    p {
      margin: 10px;
    }

  `

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledLayout>
      <GlobalStyle />
      <Header currentPage = {props.currentPage} />

      <main>{props.children}</main>
        
      <Footer />
    </StyledLayout>
  )
}

export default Layout
