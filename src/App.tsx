import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import Results from './components/Results'
import UserInput from './components/UserInput'
import UserInputType from './model/UserInputType';

function App() {
  const [userInput, setUserInput] = useState(new UserInputType());

  function handleChange(inputIndentifier: string, newValue: number) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIndentifier]: newValue,
      };
    });
  }
  
  return (
    <>
      <Header></Header>
      <UserInput userInput={userInput} onChange={handleChange}></UserInput>
      <Results input={userInput}></Results>
    </>
  )
}

export default App
