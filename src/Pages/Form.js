import React, { useState } from 'react'
import { useStateValue } from '../ContectApi/StateProvider'
import { useNavigate } from 'react-router-dom'

function UserData() {
    const [{}, dispatch] = useStateValue(" ")
    const [naam, setnaam] = useState(" ")
    const [address, setaddress] = useState(" ")
    const [postcode, setpostcode] = useState(" ")
    const [nationaliteit, setnationaliteit] = useState(" ")
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        
        dispatch({
            type: "ADD_USERDATAS",
            add: {
              naam_d: naam,
              address_d: address,
              postcode_d: postcode,
              nationaliteit_d: nationaliteit,
            },
          });
          navigate("/overview")
    }
    return (
        <div className='userdate'>
            
            <div className='userdate__input'>
              <h2>Vul uw gegevens in</h2>
                <form onSubmit={handleSubmit}>
                  <label>Naam</label>
                  <input  onChange={e => setnaam(e.target.value)} type="text" placeholder='Naam'></input>
                  <label>Adres</label>
                  <input  onChange={e => setaddress(e.target.value)} type="text" placeholder='Adres'></input>
                  <label>Postcode</label>
                  <input  onChange={e => setpostcode(e.target.value)} type="text" placeholder='Postcode'></input>
                  <label>Nationaliteit</label>
                  <div className='userdate__inputsamen'>
                      <input  onChange={e => setnationaliteit(e.target.value)} type="text" placeholder='Nationaliteit'></input>
                  <button>Next</button>
                  </div>
                
                </form>
            </div>
            
        </div>
      )
}

export default UserData