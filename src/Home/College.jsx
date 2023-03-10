import Menubar from '../Compontes/Menubar'
// import img from '../Images/clg.png';


// function Home() {
//   return (
//     <div class='home'>  
//         <div class ='menu' >
//             <Menubar/>
//         </div>
        
//     </div>
  
//   )
// }

// export default Home


import React from "react";
// import {Outlet, Link } from "react-router-dom";
import Home  from "../Home/Home";


function College() {

  return (
    <div class='screen'>
         <div class ='menu'>
          <Menubar/>
       </div>

      <div class='hb'>
        <div class='head'>
              <h1>Head</h1>
        </div>     

        <div class='body'>
          <Home />
        </div>
      </div>

    </div>
    
  )
}

export default College;