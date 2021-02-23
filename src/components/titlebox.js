// my first ever styled component 🥳

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
    margin: 3rem auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Image = styled.img`
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    position: relative;
    left: -50px;
`

const StyledLink = styled(Link)`
    font-family: 'Oleo Script', cursive;
    font-size: 6em;
    color: var(--highlight-color);
    text-shadow: 5px 5px 0px var(--foreground-color);
    text-decoration: none;
    position: relative;
    top: -120px;
    left: 50px;

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