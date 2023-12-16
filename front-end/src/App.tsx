
import { BrowserRouter as Router, Routes, Route, redirect,  } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Registration from './components/Registration';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddContact from './components/AddContact';


function App() {

  const loader = async () => {
    const token = await localStorage.getItem('token');
    if (token !== 'check the Headers') {
      return redirect("/login");
    }
    return redirect("/");
  };
  const token=localStorage.getItem('token')
  console.log (typeof(token))
  return (
    

    <Router>
      {<Navbar/>}
      

      <Routes>
        
      <Route path="/" element={ <Home /> } loader={loader}/>
        <Route path="/add-contact" element={<AddContact />} />
         <Route path="/Registration" element={<Registration/>} />
        <Route path="/login" element={<Login/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
