import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <Link to="/">Ole Petter Baugerød Stokke</Link><span> lager </span> <br></br>
    <Link to="/tekst/">tekst</Link><span> & </span>
    <Link to="/kode/">kode</Link><span> & </span>
    <Link to="/foto/">foto</Link><span> & </span>
    <Link to="/musikk/">musikk</Link><span> & </span>
    <Link to="/video/">video</Link>
  </header>
)

export default Header
