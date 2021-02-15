import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <Link to="/">hjem</Link> | 
    <Link to="/tekst/">tekst</Link> | 
    <Link to="/kode/">kode</Link> | 
    <Link to="/foto/">foto</Link> | 
    <Link to="/video/">video</Link>
    <hr></hr>
  </header>
)

export default Header
