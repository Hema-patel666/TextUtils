import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../../component/home/Home.css'

function Home(props) {

  // console.log("--------home file---",props.showAlert)
  const handleUpCase = () => {
    // console.log("Uppercase was clicked !!",text);
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into Uppercase !","Success")
  }


  const handleLowCase = () => {
    // console.log("Uppercase was clicked !!",text);
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted into Lowercase !","Success")
  }

 
  const handleClearText = () => {
    // console.log("Uppercase was clicked !!",text);
    const newText = '';
    setText(newText);
    props.showAlert("Clear text.... !","Success")
  }
 
  const handleDownloadText = () => {
    // console.log("TEXT !!",text);
    const dataUrl = `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`;
    const link = document.createElement('a');
    link.href = dataUrl;
    const uniqueId = uuidv4();
    link.download = `${uniqueId}-text.txt`;
    link.click();
    props.showAlert("Download text....!","Success")
  }
  
  const handleCopyText = () => {
    let text=document.getElementById('myBox');
   text.select();
   navigator.clipboard.writeText(text.value);
   props.showAlert("Copy text....!","Success")
  }
  
  const handleExtraSpace = () => {
    // console.log("Uppercase was clicked !!",text);
   const newText=text.split(/[ ]+/);
   setText(newText.join(" "));
   props.showAlert("Remove extra space between text....!","Success")
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
    
  }

  const [text, setText] = useState('');
  return (
    <>
      <div className=" mb-3" style={{marginLeft:"10%"}}>
        <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5" placeholder='Enter text here...'></textarea>
      
      <div className='button'>
      <button className='btn btn-primary mx-2' onClick={handleUpCase}>Convert to Uppercase</button>
      <button className='btn btn-secondary mx-2' onClick={handleLowCase}>Convert to Lowercase</button>
      <button className='btn btn-danger mx-2' onClick={handleClearText}>Clear Text</button>
      <button className='btn btn-warning mx-2' onClick={handleDownloadText}>Download Here</button>
      <button className='btn btn-info mx-2' onClick={handleCopyText}>Copy Text</button>
      <button className='btn btn-success mx-2' onClick={handleExtraSpace}>Remove space</button>
      </div>
      
      <div className="container my-3">
        <h2>Your text summry</h2>
        <p><b>{text.split(" ").length}</b>  and <b>{text.length}</b> characters!!</p>
        <p><b>{0.008 * text.split(" ").length}</b> minutes read </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      </div>
    </>

  );
}

export default Home;
