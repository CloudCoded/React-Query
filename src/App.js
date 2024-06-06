import { BrowserRouter as Router, Routes as Switch, Route, Link } from 'react-router-dom'
import './App.css'
import { Homepage } from './components/Home.page'
import { RQSuperHeroes } from './components/RQSuperHeroes.page'
import { SuperHeroes } from './components/SuperHeroes.page'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/super-heroes'
            element={<SuperHeroes /> } />
          <Route path='/rq-super-heroes'
            element={<RQSuperHeroes />} />
          <Route path='/'
            element={<Homepage />} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
