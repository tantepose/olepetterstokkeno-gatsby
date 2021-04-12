import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header `
  padding-top: 50px;
  padding-bottom: 50px;

  .active {
    text-decoration: underline;
    text-decoration-color: var(--foreground-color);
    text-decoration-style: wavy;
  }
`
//give active class if currentPage prop equals corresponding link
const Header = (props) => (
  <StyledHeader>
    <Link to="/">Ole Petter Baugerød Stokke</Link><span> sin </span> <br></br>
    <Link to="/tekst/" className={props.currentPage==="tekst" ? "active" : null}>tekst</Link><span> & </span>
    <Link to="/kode/" className={props.currentPage==="kode" ? "active" : null}>kode</Link><span> & </span>
    <Link to="/video/" className={props.currentPage==="video" ? "active" : null}>video</Link><span> & </span>
    <Link to="/foto/" className={props.currentPage==="foto" ? "active" : null}>foto</Link><span> & </span>
    <Link to="/musikk/" className={props.currentPage==="musikk" ? "active" : null}>musikk</Link><span> & </span>
    <Link to="/CV/" className={props.currentPage==="CV" ? "active" : null}>CV</Link>
  </StyledHeader>
)

export default Header