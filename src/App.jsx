import { useState,useEffect } from "react"
import { ContainerTweet } from "./components/ContainerTweet/ContainerTweet"
import { Tweet } from "./components/Tweet/Tweet";
import { UseState } from "./components/UseState/UseState"


function App() {
  
  const [count, setCount] = useState(0);
  const [styles, setStyles] = useState("minor");

  const handleAdd = () => {
    setCount(count+1)
  }

  const handleSubtract = () => {
    setCount(count-1)
  }

  const handleReset = () => {
    setCount(0)
  }

  useEffect(() => {
      count >= 10 ? setStyles('max'): setStyles('min')     
    },[count])
  
  // useEffect(()=>{
  //   if (count >= 10) {
  //     console.log('True')
  //     setStyles('max')
  //   } else {
  //     setStyles('minor')
  //     console.log('false')
  //   }
  // },[count])
  

  return (
    <div className="App">
      <h1>Generador de Tweets</h1>
      <ContainerTweet contain = {<Tweet />} />
      <h3>Aquí se verán tus tweets archivados</h3>
      <ul>
        <li>Tweet 1</li>
        <li>Tweet 2</li>
        <li>Tweet 3</li>        
      </ul>
    </div>
  )
}

export default App
