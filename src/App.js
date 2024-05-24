

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
//import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {
 
  const [mode,newMode]=useState("light");
  const [alert,newAlert]=useState(null);
  const showAlert= (message,type) =>{
     newAlert( 
      {
        message:message,
        type:type,
      }
     );
     setTimeout(() => {
      newAlert(null);
    }, 1500);
  };
  const toggleMode=()=>{
    if(mode==='light'){
      newMode("dark");
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode is enabled!","success")
      document.title='Texutilies-Dark Mode'
    }
    else{
      newMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is enabled!","success")
      document.title='Texutilies-Light Mode'
    }
  }
  
  return (
    <>
    

     <Navbar  title="Texutilies" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className='container my-3'>
     <Textform showAlert={showAlert} title='Try Texutilies-Word Counter,Character Counter,Remove Extra Spaces' mode={mode}/>
     </div> 

{/*
  <div className='container my-3'>
        <About/>
  </div>

  */}
  </>
  );

}


export default App;
  
    



    