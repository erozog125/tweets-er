import { useState,useEffect, useRef } from "react"
import { ContainerTweet } from "./components/ContainerTweet/ContainerTweet"
import { Tweet } from "./components/Tweet/Tweet";
import Swal from 'sweetalert2';
let tweets = [];

function App() {

  // 1. Crear referencia del textArea
  const TA = useRef();
  // 2. crear una variable de estado que será la que publicará el tweet
  const [tw, setTw] = useState('Aquí verás tu tweet actual');
  const [tweetList, setTweetList] = useState([]);
  const [letters, setLetters] = useState(255);
  const [color, setColor] = useState('counter');

  //3. Crear la función que envíe los tweets
  const handleSendTweet = () => {    
    tweets.push(TA.current.value);
    setTw(TA.current.value)
    TA.current.value = '';
    localStorage.setItem('tweets',tweets)
    console.log(tweets);
  }
  
  const handleFile = () => {
    tweets.push(TA.current.value);
    localStorage.setItem('tweets',tweets)    
  }

  const handleListTweets = () => {
      const tweetList = localStorage.getItem('tweets');
      console.log(tweetList);
      const data = tweetList.split(',');
      console.log(data);
      setTweetList(data);
  }

  const handleCounter = () => {
    setLetters(letters - 1);
  }

  useEffect(() => {
    if (letters === 0 ) {
      Swal.fire(
        'Haz completado el límite de caracteres permitidos',                
      )
    } else if (letters <= 50) {
      setColor('counter-min')
    }
  }, [letters])
  

  return (
    <div className="App">
      <h1>Generador de Tweets</h1>
      <ContainerTweet contain = {
        <Tweet
          eventTweet = { handleSendTweet }
          refTextArea = { TA }
          eventArea = {tw}
          eventFile = {handleFile}
          eventList = {handleListTweets}
          eventMessage = { handleCounter }
          counter = { letters }
          styleCounter = {color}
        />}
      />
      <h3>Aquí se verán tus tweets archivados</h3>
      <ul>
        {
          tweetList.map( (tweet, idx) => (
            <li className="item-tweet" key={idx}>{tweet}</li>
          ))
        }
      </ul>
      <button className="btn-clear" onClick={() => setTweetList([])}>Clear</button>
    </div>
  )
}

export default App
