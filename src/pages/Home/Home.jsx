import React, { useState } from 'react'
import './Home.css'

const Home = () => {
  const [text , setText] = useState("");
  const [transformedText , setTransformedText] = useState("");

  const handlechange = (e)=>{
    let inputtext = e.target.value;
    setText(inputtext);
    setTransformedText(inputtext);
  }

  const toUpper = ()=>{
    setTransformedText(transformedText.toUpperCase());
  }  

  const toLower = ()=>{
    setTransformedText(transformedText.toLocaleLowerCase());
  }

  const toReverse = ()=>{
    setTransformedText(transformedText.split('').reverse().join(''));
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText(transformedText).then(() => {
      alert('Text copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }

  return (
    <div className='home'>
      <div className="left-part">
        <div className="input-textarea">
          <textarea onChange={handlechange} className='textarea' placeholder='Enter your text ...' value={text}/>
        </div>
        <div>
          <button onClick={()=>toUpper()}>Uppercase</button>
        <button onClick={()=>toLower()}>Lowercase</button>
        <button onClick={()=>toReverse()}>Reverse</button>
        </div>
      </div>
      <div className="right-part">
      <div className="input-textarea">
       <textarea className='textarea' placeholder='Your text ...' value={transformedText} readOnly/>
       </div>
       <button onClick={()=>copyToClipboard()}>Copy text</button>
      </div>
    </div>
  )
}

export default Home
