import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeFeed from './Components/HomeFeed/HomeFeed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HomeFeed/>
    </div>
  )
}

export default App
