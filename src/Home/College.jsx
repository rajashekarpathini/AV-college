import Menubar from '../Compontes/Menubar'
import React from "react";
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