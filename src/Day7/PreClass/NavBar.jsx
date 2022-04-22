import React from "react";
import styled from "styled-components";

const NavBarWrapper=styled.header`
position: relative;
height: 120px;
background-color: silver;
`;

const Logo=styled.div`
    height: 60px;
    position: absolute;
    top:24px;
    left: 30px;
    height: 60px;
`;

const ResourceLinks=styled.div`
font-family: sans-serif;
    font-weight: 300;
    position: absolute;
    top: 24px;
    right: 40px;
    font-weight: 300;
    letter-spacing: 1px;
`;

const Button =styled.button`
    cursor: pointer;
    font-size: 14px;
    font-weight:700;
    padding: 15px 30px;
    border-radius: 2px;
    background-color: brown;
    color: white;

    @media all and (max-width: 620px) {
        padding: 10px 5px;
        font-size: 10px;
    }

`;

const A=styled.a`
    text-decoration: none;
    color: black;
    margin-left: 50px;
    cursor: pointer;
`

function NavBar(){
    return (
        <NavBarWrapper>
            <Logo>
                <img height="60px" src="https://www.masaischool.com/img/navbar/logo.svg" alt=""/>
            </Logo>
            <ResourceLinks>
                <Button>TRY NOW</Button>
                <A>About us</A>
                <A>FAQ</A>
                <A>Login</A>
            </ResourceLinks>
        </NavBarWrapper>
    )
}

export {NavBar};