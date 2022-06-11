import React from 'react'
import { useStateValue } from './ContectApi/StateProvider'
import './Overview.css'

function Overview() {
  const [{vlucht, userdatas}, dispatch] = useStateValue(" ")
  return (
    <div className='overview'>
      <h2>Controleer uw reisgegevens</h2>
     {userdatas?.map((soort) => {
          const {naam_d, address_d, postcode_d, nationaliteit_d} = soort;
          return(
           <div className='return__data1'>
             <h3>Persoonlijke gegevens</h3>
             <div className='return__ording'>
             <strong>Naam: </strong>
               <p>{naam_d}</p>
             </div>
             <div className='return__ording'>
             <strong>Address:</strong>
                <p>{address_d}</p>
             </div>
             <div className='return__ording'>
             <strong>Postcode:</strong>
                 <p>{postcode_d}</p>
             </div>
             <div className='return__ording'>
             <strong>Nationaliteit:</strong>
                <p>{nationaliteit_d}</p>
             </div>
            
             </div>
              
          )
        })}
        {vlucht?.map((soort) => {
          const {vertrek, bestemming, personen, datum, tijd} = soort;
          return(
            <div className='return__data1'>
              <h3>Reisgegevens (vlucht)</h3>
            <div className='return__ording'>
            <strong>Vertrek:</strong>
              <p>{vertrek}</p>
            </div>
            <div className='return__ording'>
            <strong>Bestemming:</strong>
               <p>{bestemming}</p>
            </div>
            <div className='return__ording'>
            <strong>Personen:</strong>
                <p>{personen}</p>
            </div>
            <div className='return__ording'>
            <strong>Datum:</strong>
               <p>{datum}</p>
            </div>
            <div className='return__ording'>
            <strong>Tijd:</strong>
               <p>{tijd}</p>
            </div>
             
               
               
              
               
            
      
            </div>
          )
        })}
    </div>
  )
}

export default Overview