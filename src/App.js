import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login/Login';
import Menubar from './Compontes/Menubar';
import College from './Home/College';
import Home from './Home/Home';
import './Home/College.css'
import Payment from './payment/Payment';



// export default function App() {
//   return (
//     <div>
//       <Login/>
//     </div>
//   );
// }


export default function App() {
  return (
    <Router>
      <Routes>
          <Route exact  path = '/login' element={<Login />}/> 
          <Route exact  path = '/' element={<College/>}/> 
          <Route  exact path = '/Home' element={<Home/>}/> 
          <Route  exact path = '/Payment' element={<Payment/>}/> 

          {/* <Route  exact path = '/menu' element={<Menubar/>}/>  */}

      </Routes>

    </Router>
  );
  }