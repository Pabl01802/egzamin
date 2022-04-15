import './App.sass';
import questions from './questions'

const ImgFalse = (props) => {

  if(props.number!==undefined){
    return(
      <>
        <div className='question-wraper'>
          <div className='question-title'>
            {console.log(props.number)}
            <span>{props.number+1}. {props.questions[props.randomArr[props.number]].title}</span>
          </div>
        </div>
        {/* {console.log(props.number)}
        {props.number} <br />
        {props.randomArr[props.number]} */}
        {/* <div className="App">
            <div className='top-app-wrapper'>
                Egzamin
            </div>
            <div className='top-bar-wrapper'>
                <div className='top-bar-score'>
                    { props.totalQ === 0 ? <h1>Brak odpowiedzi</h1> : <h1>{props.correctQ}/{props.totalQ} {Math.floor(props.percentage)}%</h1>}
                </div>
            </div>
                <div className='app-wrapper'>
                <div className='question-wraper'>
                <div className='question-title'>
                  <span>{props.number+1}. {props.questions[props.randomArr[props.number]].title}</span>
                </div>
                <div className='question-answers-wrapper'>
                  <div 
                  className='question-answer-content'
                  onClick={props.checkAnswer}
                  id={props.questions[props.randomArr[props.number]].id}>
                    <span onClick={props.checkAnswer} id={props.questions[props.randomArr[props.number]].id}>{props.questions[props.randomArr[props.number]].answer1}</span>
                  </div>
                  <div 
                  className='question-answer-content'
                  onClick={props.checkAnswer}
                  id={props.questions[props.randomArr[props.number]].id}>
                    <span onClick={props.checkAnswer} id={props.questions[props.randomArr[props.number]].id}>{props.questions[props.randomArr[props.number]].answer2}</span>
                  </div>
                  <div 
                  className='question-answer-content'
                  onClick={props.checkAnswer}
                  id={props.questions[props.randomArr[props.number]].id}>
                    <span onClick={props.checkAnswer} id={props.questions[props.randomArr[props.number]].id}>{props.questions[props.randomArr[props.number]].answer3}</span>
                  </div>
                  <div 
                  className='question-answer-content'
                  onClick={props.checkAnswer}
                  id={props.questions[props.randomArr[props.number]].id}>
                    {props.questions[props.randomArr[props.number]].answer4}
                  </div>
                </div>
              </div> */}
              {/* <span style={{ display: 'none' }}>
                {number++}
              </span> */}
            {/* </div>
        </div>  */}
      </>
    )}else{
      return null
    }
  }

export default ImgFalse;