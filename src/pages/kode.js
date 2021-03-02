import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBox from "../components/titlebox"
import KodeImage from "../images/kode.gif"

const kode = () => (
  <Layout currentPage="kode">
    <SEO title="Ole Petter Baugerød Stokke koder" />

    <TitleBox 
        image={KodeImage}
        link="/kode/"
        text="kode"
    />

    <h1><a href="http://olepetterstokke.no/2cars1road/">2 cars, 1 road</a></h1>
    <p>2 cars, 1 road er et lokalt tospiller Unity-spill om å kjøre bil uten å kræsje. Spilles i nettleseren på datamaskiner.</p>
    <a href="https://github.com/tantepose/2cars1road/tree/main">(kildekode)</a>

    <h1><a href="friend.fail">friend.fail</a></h1>
    <p>Friend.fail er et spill om å feile som venn. Spilles sammen med andre rundt et bord med øl.</p>
    <a href="https://github.com/tantepose/friend.fail">(kildekode)</a>

    <h1><a href="http://politibil.no/">politibil.no</a></h1>
    <p>Politibil.no viser deg emojibaserte politimeldinger, med React og et eget Express-API.</p>
    <a href="https://github.com/tantepose/politibil">(kildekode)</a>

    <h1><a href="http://www.xn--grfta-wua.no/">grøfta.no</a></h1>
    <p>Grøfta.no samler lapper og papirer fra byens grøfter på en egen-hosta Wordpress-blogg.</p>

    <h1><a href="http://www.lppf.no/">lppf.no</a></h1>
    <p>LPPF.no er Norges største side for Norges triveligste pingponglag: Lakkegata pingpongforening.</p>

    <h1><a href="https://agequiz.netlify.com/">alder-quiz-greie</a></h1>
    <p>Uferdig mobilspill om å gjette skuespilleres alder, med React og Sanity.</p>
    <a href="github.com/asd">(kildekode)</a>

  </Layout>
)

export default kode
