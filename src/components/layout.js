/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {

  const StyledLayout = styled.div`
    --background-color: #232530;
    --foreground-color: #FAC29A;
    --highlight-color: #E95678;

    background-color: var(--background-color);
    color: var(--foreground-color); 

    padding-left: 10px;
    padding-right: 10px;

    font-family: 'JetBrains Mono', monospace;
    text-align: center;

    a {
    color: var(--highlight-color);
    text-decoration: none;
    }

    a:hover {
        color: var(--foreground-color);
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
      <Header />

      <main>{children}</main>
        
      <Footer />
    </StyledLayout>
  )
}

export default Layout
