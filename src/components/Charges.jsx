import React from 'react'

import './Charges.css'
function Charges() {
  return (
    <div>
    
       <div className="feeBox bottomTop">
        <div className="fee">
        <tbody>
        <tr className='row1'><td>Fee Type</td><td>Amount</td></tr>
        <tr className='row'><td>Monthly Charges</td><td>1200 Rs per month</td></tr>
        <tr className='row'><td>Membership Charges</td><td>3000 Rs for 3 months</td></tr>
      
       </tbody>
        </div>
       </div>
       
    </div>
  )
}

export default Charges