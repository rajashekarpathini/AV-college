import React from 'react'
import Menubar from '../Compontes/Menubar'
import Paymentdetails from './Paymentdetails'
import './payment.css'
import LogoutIcon from '@mui/icons-material/Logout';

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
        <div class='bodys'> 
           <Paymentdetails/>
        </div>    

    
      </div>

    </div>
  )
}

export default Payment