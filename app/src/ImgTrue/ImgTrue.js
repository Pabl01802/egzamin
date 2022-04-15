import questions from '../questions'
import './ImgTrue.sass'

const ImgTrue = (props) => {
  
  if(props.number!==undefined){
    return(
      <>
        <div className='question-wrapper'>
          <div className='img-question-title'>
            {console.log(props.number)}
            {console.log(props.questions[props.randomArr[props.number]].b)}
            <span>{props.number+1}. {props.questions[props.randomArr[props.number]].title}</span>
            <img src={props.questions[props.randomArr[props.number]].src} />
          </div>
          <div className='question-answers-wrapper'>
            <div className='question-answer-content' onClick={props.checkAnswer} id={props.questions[props.randomArr[props.number]].id}>
              <span onClick={props.checkAnswer} id={props.questions[props.randomArr[props.number]].id}>{props.questions[props.randomArr[props.number]].a}</span>
            </div>
            <div className='question-answer-content' onClick={props.checkAnswer} id={props.questions[props.randomArr[props.number]].id}>
              <span onClick={props.checkAnswer} id={props.questions[props.randomArr[props.number]].id}>{props.questions[props.randomArr[props.number]].b}</span>
            </div>
            <div className='question-answer-content' onClick={props.checkAnswer} id={props.questions[props.randomArr[props.number]].id}>
              <span onClick={props.checkAnswer} id={props.questions[props.randomArr[props.number]].id}>{props.questions[props.randomArr[props.number]].c}</span>
            </div>
            <div className='question-answer-content' onClick={props.checkAnswer} id={props.questions[props.randomArr[props.number]].id}>
              <span onClick={props.checkAnswer} id={props.questions[props.randomArr[props.number]].id}>{props.questions[props.randomArr[props.number]].d}</span>
            </div>
          </div>
        </div>
      </>
    )}else{
      return null
    }
  }

export default ImgTrue;