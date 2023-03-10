
// import './payment.css'

export default function Paymentdetails() {
    return (     
      <div>
       <div class=''>
       <label>
          <div class='Branch'>
            <h3>Select The Branch:</h3>
            <select name="Branch">
              <option value=""></option>
              <option value="Msc">MSC</option>
              <option value="Mca">MCA</option>
              <option value="Mba">MBA</option>
            </select>
          </div> 
          <div class='Cource'>
            <h3>Select The Cource:</h3>
            <select name="Cource">
              <option value=""></option>
              <option value="computerscience">Computer Science</option>
              <option value="physicalscience">Physical science</option>
              <option value="Maths">Maths</option>
            </select>
          </div>        
        </label>
       </div>
        <div class='serach'>
          <h3>Admission Number:</h3> 
          <input type="text" placeholder="Search here Admision Number"/>          
        </div>
        <div><br/>
        <button type='Submit'>Ok</button>
        </div>

        <br/>
        

        <div>
        <label>NAME: <input type="text" name="name" placeholder="Name"/>  </label>

        <label>FATHER NAME:</label> <input type="text" name="Fathername" placeholder="fatherName"/> 

        <label>ROLL NO:</label> <input type="Number" name="rollno" placeholder="rollnumber"/> 

        <label>ADMISSION NO:</label> <input type="number" name="Admissionno" placeholder="admission"/>

        <label>COUSE:</label> <input type="text" name="Course" placeholder="Course"/> 

        <label>BANCH</label> <input type="text" name="branch" placeholder="branch"/>  

        <label>DATE:</label> <input type="Date" name="date" placeholder="date"/> 
        
        </div> <br/>

        <div>
          <label>Instution Fee</label> <input type="Number" name="insttuinfee" placeholder="insttuinfee"/> 
          <label>Tution Fee</label> <input type="Number" name="tutionfee" placeholder="tutionfee"/> 

          <label>Total Fee</label> <input type="Number" name="totalfee" placeholder="totalfee"/> 
          <label>Paid Fee</label> <input type="Number" name="paidfree" placeholder="paidfee"/> 
          <label>Balance Fee</label> <input type="Number" name="balancefee" placeholder="balancefee"/> 

          
        </div>
        <br/>
        <button type='submit'>Submit</button>
        <button type='cancle'>Cancle</button>

      </div>
     
    );
  }