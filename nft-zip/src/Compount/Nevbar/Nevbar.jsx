import React from 'react'
import logo from "../Accest/Logo.PNG"
function Nevbar() {
  return (
    <div className=' text-white d-flex justify-content-around py-2 navv'>
      <div className="d-flex align-items-center">
        <img src={logo} width="60" alt="" />
<h3>BleYd NFT</h3>
      </div>
      <div className="pt-1">
<button className='btn btn-lg text-white '>Connect Wallet</button>

      </div>
    </div>
  )
}

export default Nevbar
