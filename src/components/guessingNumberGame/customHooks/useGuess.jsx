import React, { useEffect, useState } from "react";

function useGuess() {
    let guessdata=JSON.parse(localStorage.getItem('guess')) || {};
    const [randomNumber,setRandomNumber]=useState(guessdata?.randomNumber);
    const [userInput,setUserInput]=useState(guessdata?.userInput);
    const [promptMsg,setPromptMsg]=useState('');
    const [guessStatus,setGuessStatus]=useState('');
  
    const generateNumber=()=>{
      const random=Math.floor(Math.random()*10)+1;
      setRandomNumber(random);
    }
  
    useEffect(()=>{
      try{
        if(promptMsg)
        {
          localStorage.setItem("guess",JSON.stringify({userInput,randomNumber}));
        }
  
      }
      catch(error){
        console.log(error);
  
      }
  
    },[promptMsg,userInput]);
  
    const handleSubmit=(event)=>{
      event.preventDefault();
      setPromptMsg('');
      if(userInput.trim()===""){
        setGuessStatus(getClass('error'));
        return  setPromptMsg('Enter a valid Guess');
  
      }
      if(parseInt(userInput)===randomNumber){
        setGuessStatus(getClass('success'));
        setPromptMsg('Congrats !!');
      }
      else if(parseInt(userInput)<randomNumber){
        setGuessStatus(getClass('low'));
        setPromptMsg('Guess is low');
      }
      else if(parseInt(userInput)>randomNumber){
        setGuessStatus(getClass('high'));
        setPromptMsg('Guess is high');
      }
    }
  
    const updateUserVal=(event)=>{
      setUserInput(event.target.value);
    }
  
    const reset=()=>{
      setRandomNumber(-1);
      setGuessStatus('');
      setPromptMsg('');
      setUserInput('');
    }
    return{
        reset,
        promptMsg,
        userInput,
        updateUserVal,
        generateNumber,
        guessStatus,
        handleSubmit 
    }
}

export default useGuess