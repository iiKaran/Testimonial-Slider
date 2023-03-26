import React, { useState } from 'react'
import Edge from './Edge'
export default function Box(props) {
  const [index,setindex]= useState(0);
  let review = props.reviews;
  let len = props.reviews.length;
  function prevHandler(){
    setindex((index+1)%len);
  }
  function nextHandler(){
    if(index===0)
    {
      setindex(len-1);
    }
    else
    setindex((index-1)%len);
  }
  function randomHandler(){
    let random = Math.floor(Math.random()*len);
    setindex(random);
  }
  return (

    <div className='box'>
      <div className="box-part">
     <div className="img">
       <img src={`${review[index].image}`} alt="" />
       <div className="round"></div>
       </div>
        <div className="name">{`${review[index].name}`}</div>
        </div>
        <Edge/>

        <div className="job">content -writer</div>
        <div className="feed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta molestias modi delectus ducimus expedita praesentium consequatur totam quia. Placeat dicta mollitia commodi numquam possimus nulla? Corrupti earum nesciunt dolorum dicta.</div>
        <div className="change">
        <div className="next" onClick={nextHandler}>&larr;</div>

         <div className="prev" onClick={prevHandler}>&rarr;</div>
        </div>
        <div className="btn" onClick={randomHandler}>
         Random
        </div>
        
    </div>
  )
}
