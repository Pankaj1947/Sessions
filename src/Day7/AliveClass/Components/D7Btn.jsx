import styled from "styled-components";

const D7Btn = styled.button`

  background-color:${({ theme }) => theme === "light" ? "brown" : "white"};

  color: ${({ theme }) => theme === "light" ? "white" : "brown"};

  padding: 10px;
  
`
  ;

export { D7Btn };
