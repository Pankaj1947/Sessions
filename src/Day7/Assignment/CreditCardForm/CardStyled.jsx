import styled from 'styled-components';

export const Bdiv = styled.div`
display:flex;
justify-content:space-between
`;

export const Carddiv = styled.div`
width:80%;
display:flex;
margin: auto;
padding:20px;
gap:20px
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding-top:15px;
    padding:15px 20px 10px;
`

export const Cardiv = styled.div`
width:70%;
display:flex;
justify-content:space-between;
padding:20px;
gap:50px
`;

export const Creditcardwrap = styled.div`
    background-color: #f6425b;
    color:white ;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 15px;
    width:450px;
    height:250px;
    line-height: 1px;
  
`
export const Creditfrom = styled.div`
   
    text-align:center;
    border-radius: 5px;
    text-align: left;
    width:auto;
    height:100%;
    padding:30px;
    font-weight: 500;
    

    label{
        font-size: 9px;
    }
    input {
        height: 30px;
        width: 350px;
        outline: 0;
        border-width: 0 0 2px;
        border-color: #fc8797;
        font-size: 20px;
    }
    input::placeholder {
        font-size: 14px;
        opacity: 1; /* Firefox */
    }
    input:focus {
        border-color: #f6425b
    }
    button{
        background-color: #f6425b;
        height: 50px;
        width: 180px;
        border: none;
        cursor: pointer;
        color: white;
        font-size: 20px;
        border-radius: 15px;

    }
`
export const CreditExip = styled.div`
display:flex;
justify-content: space-around;
padding:2px;
line-height: 1px;
  
`
export const CardNumber = styled.h1`
text-align: left;
margin-left:20px;
line-height: 30px;
font-size: 20px;
font-weight: 300;
letter-spacing: 5px;
`
export const Visa = styled.h1`
text-align: right;
padding:0px 25px;
line-height: 20px;
font-size: 24px;
  
`
export const Chipimg = styled.img`
position:abosult;
margin-top: 50px;
width:30px;
height:25px;
border-radius: 5px;
  
`