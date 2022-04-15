import './App.sass'
import questions from './questions.js'
import ImgFalse from './ImgFalse/ImgFalse'
import ImgTrue from './ImgTrue/ImgTrue'
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
        e.target.style.backgroundColor = '#59ff2b'
      }else{
        console.log('Zła odpowiedź')
        e.target.innerHTML+= ` &nbsp Prawidłowa odpowiedź: <strong>${questions[index].correct}</strong>`
        e.target.style.backgroundColor = '#ff2b2b'
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
        B.25 i B.26
      </div>
      <div className='top-bar-wrapper'>
        <div className='top-bar-score'>
          { totalQ === 0 ? <h1>Brak odpowiedzi</h1> : <h1>{correctQ}/{totalQ} {Math.floor(percentage)}%</h1>}
        </div>
      </div>
      <div className='app-wrapper'>
        {questions.map(p=>{
          if(questions[randomArr[p.id]].img===false){
            number = p.id
            return(<ImgFalse number={number} questions={questions} checkAnswer={checkAnswer} randomArr={randomArr} correctAnswer={correctQ} totalQ={totalQ} percentage={percentage} />)
          }else if(questions[randomArr[p.id]].img===true){
            number = p.id
            return(<ImgTrue number={number} questions={questions} checkAnswer={checkAnswer} randomArr={randomArr} correctAnswer={correctQ} totalQ={totalQ} percentage={percentage} />)
          }
        })}
      </div>
    </div>
    </>)
}

export default App;