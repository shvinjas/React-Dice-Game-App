import styled from "styled-components";


export const Button = styled.button`
  padding: 10px 18px;
  min-width: 220px;

  border-radius: 5px;
  background: #000;
  color: white;
  border: none;
  font-size:16px;
  border:1px solid transparent;
  transition:background 0.4s ease-in;
  cursor:pointer;

  &:hover{
    background-color: white;
    border:1px solid black;
    color:black;
    transition:background 0.3s ease-in;
  }
`;

export const OutlineButton = styled(Button)`
background-color:white;
color:black;
border:1px solid black;
&:hover{
    background-color: black;
    border:1px solid transparent;
    color:white;
    
  }


`


