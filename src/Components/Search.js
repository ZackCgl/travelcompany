import React from 'react'

import { useState } from 'react';
import Return from './Return';

function FindFlight() {
    const [to, setTo] = useState(" ");
    const [from, setFrom] = useState(" ");
    const [depart, setDepart] = useState(" ");
    const [persons, setPersons] = useState(" ");
   
    const [cool, setCool] = useState(false)

    const clear = (e) => {
      window.location.reload();
    }
    const handleSubmit = (e) => {
      e.preventDefault()
    }

  return (

  <div className='findflight'>
    <form onSubmit={handleSubmit}>
        <div className='app__row'>
          <button className="app__clear" onClick={clear}>Clear data</button>
          <div className='app__row1'>
            <label >Vertrek</label>
            <select onChange={e => {setFrom(e.target.value); setCool(false)}} >
              <option value=" "></option>
              <option value="AMS">AMS</option>
              <option value="ROT">ROT</option>
            </select>
          </div>

          <div className='app__row1'>
            <label >Bestemming</label>
            <select onChange={e => {setTo(e.target.value); setCool(false)}} >
            <option value=" "></option>
            <option value="LAS">LAS</option>
            <option value="PAR">PAR</option>
            <option value="FLO">FLO</option>
            <option value="BER">BER</option>
            <option value="FRA">FRA</option>
            <option value="ROM">ROM</option>
            <option value="LOS">LOS</option>
            </select>
          </div>

          <div className='app__row1'>
            <label >Personen</label>
            <select onChange={e => {setPersons(e.target.value)}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            </select>
          </div>

          <div className='app__row1'>
            <label >Datum</label>
            <select onChange={e => {setDepart(e.target.value); setCool(false)}}>
            <option value=" "></option>
            <option value="13-06-2022">13-06-2022</option>
            <option value="14-06-2022">14-06-2022</option>
            <option value="15-06-2022">15-06-2022</option>
            <option value="16-06-2022">16-06-2022</option>
            <option value="17-06-2022">17-06-2022</option>
            <option value="18-06-2022">18-06-2022</option>
            <option value="19-06-2022">19-06-2022</option>
            <option value="20-06-2022">20-06-2022</option>
            <option value="21-06-2022">21-06-2022</option>
            <option value="22-06-2022">22-06-2022</option>
            <option value="23-06-2022">23-06-2022</option>
            <option value="24-06-2022">24-06-2022</option>
            <option value="25-06-2022">25-06-2022</option>
            <option value="26-06-2022">26-06-2022</option>
            </select>
            <button onClick={e => {setCool(true)}}>Zoek Vlucht</button>
          </div>

        </div>
    </form>
    <Return to={to} from={from} depart={depart} persons={persons} cool={cool}/>
  </div>
    
  )
}

export default FindFlight