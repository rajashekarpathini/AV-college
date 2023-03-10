import './payment.css'

export default function Paymentdetails() {
    return (
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
      
    );
  }