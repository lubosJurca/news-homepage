import { useState } from 'react';
import './App.css';

// images
import logo from "./images/logo.jpg"

// components
import Navbar from './compnents/Navbar';
import Main from './compnents/Main';

// icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  fontSize: "80px"
}



function App() {
  
  const [isShown,setIsShown] = useState(false)

  return (
    <div className="App">
          <header>
            <img src={logo} />
            <Navbar isShown={isShown}/>
            <button className='hamburger' onClick={() => setIsShown(!isShown)}>{!isShown ? <MenuIcon style={style} /> : <CloseIcon style={style}/>}</button>
          </header>
          <Main isShown={isShown}/>
    </div>
  );
}

export default App;
