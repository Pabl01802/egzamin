import './App.sass'
import questions from './questions.js'
import { useState, useEffect } from 'react'

function App() {

  let [correctQ, setCorrectQ] = useState(0)
  let [totalQ, setTotalQ] = useState(0)
  let percentage = (correctQ/totalQ)*100

  // useEffect(()=>{
  //   setCorrectQ(correctQ++)
  // }, [correctQ])
  // useEffect(()=>{
  //   setTotalQ(totalQ++)
  // }, [totalQ])

  const checkAnswer = (e) =>{
    const content = e.target.innerText
    const index = e.target.id
    const div = document.querySelector(`.${e.target.className}`)
    console.log(div)
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
      console.log(totalQ)
    }else{
      console.log('Szanse wykorzystane')
    }
  }

  return (
    <div className="App">
      <div className='top-app-wrapper'>
        Egzamin
      </div>
      <div className='top-bar-wrapper'>
        <div className='top-bar-score'>
          {/* {correctQ}/{totalQ} {percentage}% */}
          { totalQ === 0 ? <h1>Brak odpowiedzi</h1> : <h1>{correctQ}/{totalQ} {Math.floor(percentage)}%</h1>}
        </div>
      </div>
      <div className='app-wrapper'>
        {
        questions.map(q => {
          return(
            <>
              <div className='question-wraper'>
                <div className='question-title'>
                  <span>{q.title}</span>
                </div>
                <div className='question-answers-wrapper'>
                  <div 
                  className='question-answer-content'
                  onClick={checkAnswer}
                  id={q.id}>
                    <span>{q.answer1}</span>
                  </div>
                  <div 
                  className='question-answer-content'
                  onClick={checkAnswer}
                  id={q.id}>
                    <span>{q.answer2}</span>
                  </div>
                  <div 
                  className='question-answer-content'
                  onClick={checkAnswer}
                  id={q.id}>
                    <span>{q.answer3}</span>
                  </div>
                  <div 
                  className='question-answer-content'
                  onClick={checkAnswer}
                  id={q.id}>
                    {q.answer4}
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  );
}

export default App;
