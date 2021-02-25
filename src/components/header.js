import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header `
  padding-top: 50px;
  padding-bottom: 50px;
`

const Header = () => (
  <StyledHeader>
    <Link to="/">Ole Petter Baugerød Stokke</Link><span> gjør </span> <br></br>
    <Link to="/tekst/">tekst</Link><span> & </span>
    <Link to="/kode/">kode</Link><span> & </span>
    <Link to="/foto/">foto</Link><span> & </span>
    <Link to="/musikk/">musikk</Link><span> & </span>
    <Link to="/video/">video</Link>
  </StyledHeader>
)

export default Header
