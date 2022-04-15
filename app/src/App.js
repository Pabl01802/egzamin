import './App.sass'
import questions from './questions.js'
import ImgFalse from './ImgFalse'
import React, { useCallback , useState, useEffect } from 'react'
import { randomArr } from './random'

const App = () => {

  let [correctQ, setCorrectQ] = useState(0)
  let [totalQ, setTotalQ] = useState(0)
  let percentage = (correctQ/totalQ)*100
  
  const checkAnswer = e =>{
    const content = e.target.innerText
    const index = e.target.id
    if(questions[index].chance === 1){
      if(content === questions[index].correct){
        setCorrectQ(prevState => prevState + 1)
        console.log('Prawidłowa odpowiedź')
        e.target.style.backgroundColor = 'green'
      }else{
        console.log('Zła odpowiedź')
        e.target.innerHTML+= ` &nbsp Prawidłowa odpowiedź: ${questions[index].correct}`
        e.target.style.backgroundColor = 'red'
      }
      questions[index].chance--
      setTotalQ(prevState => prevState + 1)
    }else{
      console.log('Szanse wykorzystane')
    }}

    let number = 0
     
  return (
    <>
    {console.log(randomArr)}
    <div className="App">
      <div className='top-app-wrapper'>
        Egzamin
      </div>
      <div className='top-bar-wrapper'>
        <div className='top-bar-score'>
          { totalQ === 0 ? <h1>Brak odpowiedzi</h1> : <h1>{correctQ}/{totalQ} {Math.floor(percentage)}%</h1>}
        </div>
      </div>
      <div className='app-wrapper'>
        {/* <ImgFalse questions={questions} checkAnswer={checkAnswer} randomArr={randomArr} /> */}
        {/* {!questions.img ? <ImgFalse questions={questions} checkAnswer={checkAnswer} randomArr={randomArr} /> : null} */}
        {questions.map(p=>{
          if(!p.img){
            number = p.id
            return(
              <>
                <ImgFalse number={number} questions={questions} checkAnswer={checkAnswer} randomArr={randomArr} correctAnswer={correctQ} totalQ={totalQ} percentage={percentage} />
                <br />
              </>
            )
          }else{
            return(<h1>fdwaftg</h1>)
          }
        })}
      </div>
    </div>
    </>)
  //     questions.map(p=>{
  //       if(!p.img){
  //           console.log(number)
  //           number++
  //           return(<ImgFalse number={number} questions={questions} checkAnswer={checkAnswer} randomArr={randomArr} correctQ={correctQ} totalQ={totalQ} percentage={percentage} />);
  //       }else{
  //           return(<h1>fsda</h1>)
  //       }
  //     })
  // );
}

export default App;