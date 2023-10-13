import React, { useState } from 'react'
import bird from "./../../assets/bird.svg";
import cat from "./../../assets/cat.svg";
import cow from "./../../assets/cow.svg";
import dog from "./../../assets/dog.svg";
import horse from "./../../assets/dog.svg";
import gator from "./../../assets/gator.svg";
import heart from "./../../assets/heart.svg";
import './../animalShow/Animal.css';

const svgMap={
    bird,
    cat,
    cow,
    dog,
    horse,
    gator
}

function AnimalShow({type}) {
  const [like,setLikeCount]=useState(0);
  const updateLike=()=>{
    setLikeCount(like+1);
  }
  return (
    <div className="animalShow" onClick={updateLike}>
        <img  className="animal" alt="animal" src={svgMap[type]}/>
        <img  className="heart" alt="heart" style={{width:10+10*like+'px'}} src={heart}/>
    </div>
  )
}

export default AnimalShow;