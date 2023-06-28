
import './App.css';
import Header from './component/header/header';
import Sidebar from './component/sidebar/Sidebar'
import { BrowserRouter as Router,  Routes,Route} from "react-router-dom";
import { useState } from 'react';
import Alert from './component/Alert/Alert';
import About from './component/About';
import Login from './pages/admin/login';
import Home from './component/home/home';
import UserList from './component/User/Userlist';
import AddUser from './component/User/Adduser';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


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
      },1000)
  }

const removeBodyClasses = ()=>{
  document.body.classList.remove('bg-primary');
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-warning');
  document.body.classList.remove('bg-info');
}
const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    console.log("INSIDE PRIMARY:::",cls)
     if(cls === 'info'){
      console.log("INSIDE PRIMARY1111:::",cls);
      showAlert(" Info mode has been enabled !!","success")
     }   
    else if (cls === 'warning') {
      showAlert(" Warning mode has been enabled !!","success")
    }
    else if (cls === 'danger') {
      showAlert(" Danger mode has been enabled !!","success")
    }
    else if (cls === 'primary') {
      showAlert(" Primary mode has been enabled !!","success")
    }
    else if (cls === 'success') {
      showAlert(" Success mode has been enabled !!","success")
    }
    else if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled !!","success")
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert(" Dark mode has been enabled !!","success")
    }
   }


  return (  
   <>
    <Container fluid>
    <Router>
     
      <Row>
        <Col className='p-0'>
               
        <Header title="MyApp" mode={mode} toggleMode={toggleMode} />
        </Col>
      </Row>
      <Row >
      <Alert alert={alert} />  
        <Col sm={2} xs={4} className='bg-primary'>         
         <Sidebar />                      
        </Col>
        <Col className='mt-3' sm={9} xs={4}>
            <Routes>            
              <Route path="/" element={<Home showAlert={showAlert} heading={'TextUtils - Convert Upercase, Download Text, Remove Extra Space'} mode={mode} />} />
              <Route path="/about" element={<About mode={mode}/>} />
              <Route path="/login" element={<Login />} />
              <Route  path="/userlist" element={< UserList />} />
              <Route path="/addUser" element={<AddUser/>} />              
            </Routes>
        </Col>
      </Row> 
      <Row>
        <Col className ='bg-warning'>
        <div> React_example@gmail.com</div>
        </Col>
      </Row>
      </Router>
      </Container>      
    
    
    </>
    
  );
}

export default App;
