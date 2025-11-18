import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import schoolLogo from './assets/kando.jpg'
import './App.css'



const ListaKomponens = ({elemek}) => (
  <ol>
    {elemek.map((elem, index) => (
      <li key={index}>{elem.id}-{elem.name}-{elem["image_url"]}</li>
    ))}
  </ol>
)

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
     <ListaKomponens elemek={adatok}></ListaKomponens>
    </>
  )
}

export default App;
