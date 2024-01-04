import { useEffect, useState } from 'react'
import './App.css'
import PrintUser from './PrintUser'
import Loading from './Loading'

function App() {
  const [user, setUser] = useState()
  const [isLoaded, setIsLoaded] = useState(false)

const fetchData = async () => {
  
    const resp = await fetch('https://api.github.com/users/djuodis')
    const data = await resp.json()
    setUser(data) 
}

  useEffect(() =>{
    fetchData()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 2000)
  }, [user])


  return (
    <>
    {isLoaded && user ? 
      <PrintUser user={user} fetchData={fetchData}/> :
      <Loading/>
    }
    </>
  )
}

export default App

