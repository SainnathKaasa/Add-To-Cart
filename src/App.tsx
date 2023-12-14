
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'



function App() {

  useEffect(()=>{
    initializeArray()
  })

  return (
    <>
   <Outlet/>
    </>
  )
}

export default App
  

const initializeArray = ()=>{
  if(!localStorage.getItem('arr')){
    localStorage.setItem('arr', '[]')
  }
}
