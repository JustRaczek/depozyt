import { useState } from "react"
const App = () => {
  const [ counter, setCounter ] = useState(0)


  const increaseByOne = () => setCounter(counter + 1)
  const multiplysthxDD =  () => setCounter(counter * (10+counter))
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>

      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={multiplysthxDD}>
      mnoży przez 10 + licznik
      </button>
      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}
export default App