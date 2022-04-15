import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App'
import Add from './Add/Add'

const Redirects = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/add' element={<Add />} />
            </Routes>
        </Router>
    )
}

export default Redirects;