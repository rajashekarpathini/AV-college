import React from 'react';
import './Login.css';
import img from '../Images/clg.png';
import {useNavigate} from 'react-router-dom';
import Home from '../Home/College';
// import Menubar from '../Compontes/Menubar';


export default function Login() {
    const navigate = useNavigate();
   
    function handleSubmit(event) {
      event.preventDefault();
      console.log('login sucess');
      navigate('/')
    } 

    return (
      <div class='loginScreen'>
        <div class="user">
          <div class="contain">  
          <h2>Wellcome To AV College  </h2>
          <h4>Andhra Vidyalaya College of Arts, Science And Commerce 
            <br></br> (Affiliated to Osmania University)
                Accredited with 'B++' Grade by NAAC(3rd Cycle)  
          </h4>
          <div class="img"><img class ='clgimg' alt='logo' src= {img} /> </div>
          </div> 
          <div class='login'>
            <form class="form" >
                  <h2>Please Login</h2>
                  <label>username:</label>
                  <input type="text" name="username" placeholder="username"/> 
                  <label>password:</label>
                  <input type="password" name="password" placeholder="password"/> 
                  <button type="submit" onClick={handleSubmit} >Login</button>  
              
            </form>
          </div>
        
        </div>
      </div>
    );
  }
  