import React from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";
import { OutlineButton,Button } from "./styled/Button";
import Rules from "./rules";


const GamePlay = () => {
  const [score,setScore]=useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [error,setError]=useState();
  const[showRules,setShowRules]=useState(false);

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {

    if(!selectedNumber){
        setError("You have not selected any number");
        return
    };

    setError("");

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);


  if(selectedNumber==randomNumber){
    setScore ((prev)=>prev+randomNumber);
  }else{
    setScore ((prev)=>prev - 2);
  }

  setSelectedNumber(undefined);
}


const resetScore=()=>{
    setScore(0);
}


  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
        error={error} setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
  <RollDice currentDice={currentDice} rollDice={rollDice}/>
  <div className="btns">
    <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
    <Button onClick= {()=>setShowRules((prev)=>!prev)}>{showRules?"Hide":"Show"}Rules</Button>
  </div>
  {showRules && <Rules/>}
    </MainContainer>
  );
};
export default GamePlay;

const MainContainer = styled.main`
  padding: 70px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  
    
  }
.btns{
    display:flex;
    flex-direction: column;
    justify-content:center;
    gap:10px;
    align-items:center;
    margin-top:40px;
   
}





`;
