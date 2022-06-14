import React from 'react'
import APIFLIGHT from '../API/APIFLIGHT.json'
import { useStateValue } from '../ContectApi/StateProvider';
import { useNavigate } from 'react-router-dom';

function Return({to, from, persons, depart, cool }) {

    const [, dispatch] = useStateValue(" ")
    const navigate = useNavigate ();
  return (
    <div className='findflight__output'>
      {APIFLIGHT.filter((val) => {
        if (
        val.department.includes(depart) 
        && val.to.includes(to) 
        && val.from.includes(from) 
        && cool === true) {
        return val
       }
       }).map((val,key) =>{
          const addToVlucht = () =>{
          dispatch({
          type: "ADD_VLUCHT",
          val: {
            vertrek: val.from,
            bestemming: val.to,
            personen: persons,
            datum: val.department,
            tijd: val.time,
        },
        });
          navigate('/userdata')
        }
   
          return  <div className='flight__outputrow'>
                    <div key={val.id}>From: {val.from}  To:  {val.to}  Vertrek:  {val.department}  Tijd:  {val.time} </div>
                    <button onClick={addToVlucht}>Boeken</button></div>
                    }
              
                    )}
                
                  </div>
    
  )
}

export default Return