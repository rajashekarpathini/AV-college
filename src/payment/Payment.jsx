import React from 'react'
import Menubar from '../Compontes/Menubar'
import Paymentdetails from './Paymentdetails'
import './payment.css'

function Payment() {

  return (
   <div class='screen'>
         <div class ='menu'>
          <Menubar/>
       </div>

      <div class='hb'>
        <div class='head'>
              <h1>head</h1>
        </div> 
        <div class='body'> 
           <Paymentdetails/>
        </div>    

    
      </div>

    </div>
  )
}

export default Payment