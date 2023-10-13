import React, { useState } from 'react'
import AnimalShow from './AnimalShow';

function generateRandomAnimal(){
  let animalList=['cow','cat','bird','gator','horse','dog'];
  return animalList[Math.floor(Math.random()*animalList.length)];
}




function AnimalButton() {
  const [animalList,setAnimalList]=useState([]);
  const addAnimal=()=>{
    setAnimalList([...animalList,generateRandomAnimal()]);
  };

  const renderedAnimalList=animalList.map((animal,index)=>{
    return <AnimalShow key={index} type={animal}/>;

  })

  return (
    <div>
        <button onClick={addAnimal} className="button is-warning">Add Animal</button>
        <div className='animal-list'>
        {renderedAnimalList}
        </div>
       
    </div>
  );
}

export default AnimalButton;