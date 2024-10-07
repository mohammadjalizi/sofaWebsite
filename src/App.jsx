import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Prouduct from './components/product/Prouduct'
import Authpage from './auth/Authpage'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Navbar/>

<Header/>

<Prouduct/>


<Authpage/>
</>
  )
}

export default App
