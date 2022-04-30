import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
        width: 60%;
        padding:30px;
        margin: auto;
        display:grid;
        grid-template-columns: repeat(3,1fr);
        font-family: "Josefin Sans", sans-serif;  
        `;

const Wrapper = styled.button`
    color:black;
    border:none;
    padding:10px;
    font-size:18px;
    margin-top:50px ;
    margin-left:50px;
    cursor: pointer;
   
    ${(props) => props.primary && css`
    background: #1A73E8;
    color: white;
  `}
  ${(props) => props.white && css`
    background: white;
    color: black;
    border:1px solid grey;
  `}
  ${(props) => props.dashed && css`
    background: white;
    color: black;
    border:1px dashed grey;
  `}
  ${(props) => props.Link && css`
    background: white;
    color: skyblue;
    a {
        text-decoration: none;
        color: #4B85B3;
    }
  `}
  ${(props) => props.Text && css`
    background: white;
    color: black;
  `}
`;

export const Button = () => {
  return (
    <>
      <Container>
        <Wrapper primary>Primary Button</Wrapper>
        <Wrapper white>Default Button</Wrapper>
        <Wrapper dashed>Dashed Button</Wrapper>
        <Wrapper Text>Text Button</Wrapper>
        <Wrapper Link>
          <a href='https://www.masaischool.com/'>Link Button</a>
        </Wrapper>
      </Container>
    </>
  )};