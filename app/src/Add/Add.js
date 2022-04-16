import questions from '../questions'
import './Add.sass'

const Add = () => {
    const title = document.querySelector('.content')
    const a = document.querySelector('.a')
    const b = document.querySelector('.b')
    const c = document.querySelector('.c')
    const d = document.querySelector('.d')
    const correct = document.querySelector('.correct')

    let handleAdd = null

    return(
        <>
            <h1>Dodawanie</h1>
            <div className='wrapper'>
                <div className='title-wrapper'>
                    <h3>Tytuł pytania</h3>
                    <input className='content' />
                </div>
                <div className='answer-wrapper'>
                    <h3>A: </h3>
                    <input className='a' />
                </div>
                <div className='answer-wrapper'>
                    <h3>B: </h3>
                    <input className='b' />
                </div>
                <div className='answer-wrapper'>
                    <h3>C: </h3>
                    <input className='c' />
                </div>
                <div className='answer-wrapper'>
                    <h3>D: </h3>
                    <input className='d' />
                </div>
                <div className='correct-wrapper'>
                    <h3>Poprawna: </h3>
                    <input className='correct' />
                </div>
                {
                    handleAdd = () =>{
                        console.log(questions)
                        questions.push(
                            {
                                id: questions.length,
                                title: title.value,
                                a: a.value,
                                b: b.value,
                                c: c.value,
                                d: d.value,
                                correct: correct.value,
                                chance: 1,
                                img: false
                            }
                        )
                        title.value = ''
                        a.value = ''
                        b.value = ''
                        c.value = ''
                        d.value = ''
                        correct.value = ''
                    }
                }
                <div className='button-wrapper'>
                    <input type='button' value='dodaj' onClick={handleAdd}></input>
                </div>
            </div>
        </>
    )
}

export default Add;