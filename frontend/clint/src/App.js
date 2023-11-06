import Navabar from './component/navbar/Navabar.jsx';
import './App.css';
import { useState } from 'react';
import Allroutes from './component/allroutes'
import {BrowserRouter as Router} from 'react-router-dom'
import Drawersidebar from './component/leftsidebar/Drawersidebar.jsx';


function App() {
  const[toggleDrawersidebar,settoggleDrawersidebar] = useState({
    display:"none"
  })
  const toggleDrawer=()=>{
    if(toggleDrawersidebar.display==='none'){
      settoggleDrawersidebar({
        display:"flex"
      })
    }else{
      settoggleDrawersidebar({
        display:"none"
      })
    }
  }
  return (
    <Router>
    <Navabar
    toggleDrawer={toggleDrawer}
    />

      <Drawersidebar
      toggleDrawer={toggleDrawer}
      toggleDrawersidebar={toggleDrawersidebar}
      />
    
    <Allroutes/>
    </Router>
  );
}

export default App;
