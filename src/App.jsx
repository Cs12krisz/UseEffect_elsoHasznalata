import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import schoolLogo from './assets/kando.jpg'
import './App.css'


const Pizzak = ({pizzak}) => {

  return (
    <>
    {pizzak.map(
      (pizza, index) => (
      <div key={index}>
        <div>
          <h1>{pizza.id}</h1>
          <h2>{pizza.name}</h2>
          <img 
            style={{
              maxWidth: "1024px"
            }} 
            src={pizza.image_url} 
            alt="Pizzáról egy fénykép" />
        </div>
        <br/>
      </div>
    ))}
    </>
  )
}


export const App = () => {
  const [adatok, setAdatok] = useState([])
  const [serverURL, setServerURL] = useState("https://pizza.sulla.hu/pizza")


  useEffect(() => {
    fetch(serverURL)
    .then((res) => (res.ok ? res.json() : []))
    .then((tartalom) => setAdatok(tartalom))
  }, []);

  return (
    <>
     <Pizzak pizzak={adatok}/>
    </>
  )
}

export default App;
