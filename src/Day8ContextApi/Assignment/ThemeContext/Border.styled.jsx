import styled from 'styled-components'

export const Border = styled.div`
margin : 10px ;
padding: 10px ;
display:flex ;
justify-content:space-between ;
border :1px solid black;
color: ${props => props.bg};
background-color:${(props) => props.bg === "white" ? "black" : "white"}
`


export const ButtonColor = styled.button`
background-color :${(props) => props.bg === "black" ? "black" : "lightgreen"} ;
color: ${props => props.bg === "black" ? "white" : "black"};
border-radius: 5px;
border:none;
`