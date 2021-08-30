import {useState} from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangedText] = useState(false)

  return (
    <div>
      <h2>Hello</h2>
      {!changeText && <Output>Nice</Output>}
      {changeText && <Output>Changed</Output>}
      <button onClick={() => setChangedText(true)}>Change text!</button>
    </div>
  )
}

export default Greeting