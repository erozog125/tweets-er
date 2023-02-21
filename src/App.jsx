import { useState,useEffect } from "react"
import { ContainerTweet } from "./components/ContainerTweet/ContainerTweet"
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
      count >= 10 ? setStyles('max'):setStyles('minor')     
    },[count])
  
  // useEffect(() => {
  //   if (count >= 10) {
  //     setStyles('max')
  //     console.log('true');
  //   } else {
  //     setStyles('minor')
  //     console.log('false');
  //   }
  // }, [count])
  

  return (
    <div className="App">
      <h1>Generador de Tweets</h1>
      <ContainerTweet 
        contain = {<UseState
          counter = {count}
          event1={handleAdd}
          event2={handleSubtract}
          event3={handleReset}
          styleNumber = {styles}
        />}
      />      
    </div>
  )
}

export default App
