
import './App.css';
import Header from './component/header/header';
import Sidebar from './component/sidebar/Sidebar'
import { BrowserRouter as Router,  Routes,Route} from "react-router-dom";
import { useState } from 'react';
import Alert from './component/Alert/Alert';
import About from './component/About';
import Login from './pages/admin/login';
import Home from './component/home/home';



function App() {
  const [mode, setMode] = useState('dark');
  const [alert , setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
        msg:message,
        type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled !!","success")
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Darh mode has been enabled !!","success")
    }
  }


  return (  
   <>
    <Router>
      <div className="App">
        <Header title="MyApp" mode={mode} toggleMode={toggleMode} />
        <div>
          <Alert alert={alert} />
         
          <div className="app-container"  >
            <Sidebar />
            <Routes>            
              <Route path="/" element={<Home showAlert={showAlert} />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          
          </div>
        </div>
      </div>
    </Router>
    
    </>
    
  );
}

export default App;
