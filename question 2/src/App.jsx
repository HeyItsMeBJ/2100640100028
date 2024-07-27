import { useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  

  const [data, setdata] = useState('')
  

 


  return (
    <>
      <p>{data}</p>
    </>
  )
}

export default App
