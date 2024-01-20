import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className=".text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  background-color: #fbf1f1;
  padding: 20px;
  max-width:700px;
  margin-top:80px;
  border-radius:10px;
  max-height:100vh;
  overflow-y:auto;
  position:fixed;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, 100%); 
  h2 {
    font-size: 24px;
  }
  .text{
    margin:24px;
  }
`;
