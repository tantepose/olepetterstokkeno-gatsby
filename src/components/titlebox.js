// my first ever styled component 🥳

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    max-width: 600px;
    max-height: 300px;
`

const Image = styled.img`
    display: block;
    width: 300px;
`

const StyledLink = styled(Link)`
    position: relative;
    top: -130px;

    font-family: 'Oleo Script', cursive;
    font-size: 6em;
    color: var(--highlight-color);
    text-shadow: 5px 5px 0px var(--foreground-color);
    text-decoration: none;

    &:hover {
        color: var(--foreground-color);
        text-shadow: 5px 5px 0px var(--highlight-color);
    }
`

const TitleBox = (props) =>  {
    return (
        <Container>
            <Image src = {props.image}></Image>
            <StyledLink to = {props.link} > {props.text} </StyledLink> 
        </Container>
    )
  }
  
  export default TitleBox