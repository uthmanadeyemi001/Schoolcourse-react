import React, {useState}from 'react'
import Table from '../Table'
import { Button } from 'bootstrap'
import App from '../App'
// import Boxes from '../Components/Boxes'

const Landingpage = () => {

    
  const [name , setName] = useState("Abu")
  const [names , setNames] = useState("Anu")
  const [namess, setNamess] = useState("Kayode")
  
  return (
    <div>
      <button onClick={'students'}/>
      <button onClick={'students'}/>
      
    </div>
  )
}

export default Landingpage
