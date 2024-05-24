import { useState } from "react"
import React from 'react'

export default function Textform(props) {
    const[text,setText]=useState('enter text here')
    const handelupclick =()=>{   //arrow function 
        console.log('button was click'+text);
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("Convert to Uppercase!","success");
    }
    const handellowclick =()=>{   //arrow function 
        console.log('button was click'+text);
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert("Convert to Lowercase!","success");
    }
    const handelclearclick =()=>{   //arrow function 
        console.log('button was click'+text);
        let newtext=' ';
        setText(newtext)
        props.showAlert("Text clered!","success");
    }
    const handelinverseclick =()=>{                                //arrow function 
        console.log('button was click'+text);
        let reversedText = text.split('').reverse().join('');
        setText(reversedText);
        props.showAlert("Text inversed!","success");
    }
    const handelremoveclick =()=>{                         //arrow function 
       
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Text removed!","success");
    }

    const handelonchange =(event)=>{                               //arrow function 
        console.log("ON CHANGE");
        setText(event.target.value)                                //something write in text area
    }
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
          <div className="mb-3">
               <h1>{props.title}</h1>
              <textarea className="form-control"   style={{backgroundColor:props.mode === 'dark' ? '#042743' : 'white',color: props.mode === 'dark' ? 'white' : '#042743'}} value={text} onChange={handelonchange} id="myBox" rows="8"></textarea>
         </div>
            <button className='btn.btn.primary' onClick={handelupclick}>convert to uppercase</button>
            <button className='btn.btn.primary mx-2' onClick={handellowclick}>convert to lower case</button>
            <button className='btn.btn.primary mx-2' onClick={handelclearclick}>Clear Text</button>
            <button className='btn.btn.primary mx-2' onClick={handelinverseclick}>Inverse Text</button>
            <button className='btn.btn.primary mx-2' onClick={handelremoveclick}>Remove extra space</button>
            </div>
        <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h3>TEXT SUMREY</h3>
            <p> {text.split(" ").length} words and {text.length} charcters</p>
            <p> {0.008*text.split(" ").length} Time To Read Word</p>
            <h3>Preview</h3>
            <p>
                {text.length>0?text:"enter something in above textbox to preview here"}    
            </p>

         </div>
    </>
   )
}
