import './App.sass'

function App() {

  const questions = ['2', '32']

  return (
    <div className="App">
      <div className='top-app-wrapper'>
        Egzamin
      </div>
      <div>
        {questions.map(q => {
          return <h1>{q}</h1>
        })}
      </div>
    </div>
  );
}

export default App;
