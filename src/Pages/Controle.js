import React from 'react'
import { useStateValue } from '../ContectApi/StateProvider'

function Overview() {
  const [{vlucht, userdatas}, ] = useStateValue(" ")
  return (
    <div className='controle'>
      <h2>Controleer uw reisgegevens</h2>
        {userdatas?.map((soort) => {
          const {naam_d, address_d, postcode_d, nationaliteit_d} = soort;
          return(
           <div className='controle__persoonlijk'>
             <h3>Persoonlijke gegevens</h3>
            
              <strong>Naam: </strong>
               <p>{naam_d}</p>
              <strong>Address:</strong>
                <p>{address_d}</p>
              <strong>Postcode:</strong>
                 <p>{postcode_d}</p>
              <strong>Nationaliteit:</strong>
                <p>{nationaliteit_d}</p>
             
            
            </div>  
          )
        })}
        {vlucht?.map((soort) => {
          const {vertrek, bestemming, personen, datum, tijd} = soort;
          return(
            <div className='controle__data1'>
              <h3>Reisgegevens (vlucht)</h3>
            <div className='controle__ording'>
            <strong>Vertrek:</strong>
              <p>{vertrek}</p>
            </div>
            <div className='controle__ording'>
            <strong>Bestemming:</strong>
               <p>{bestemming}</p>
            </div>
            <div className='controle__ording'>
            <strong>Personen:</strong>
                <p>{personen}</p>
            </div>
            <div className='controle__ording'>
            <strong>Datum:</strong>
               <p>{datum}</p>
            </div>
            <div className='controle__ording'>
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