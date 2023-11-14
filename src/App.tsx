import { Route, Routes, Link } from 'react-router-dom'

import Course from './pages/Course';
import Slide from './pages/Slide';

import './App.css'

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="course">course</Link>
            </li>
            <li>
              <Link to="slide">slide</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <h1>BookInVideo</h1>
      <p>Just a good idea</p>
      <hr />
      <Routes>
        <Route path='/course' element={<Course />} />
        <Route path='/slide' element={<Slide />} />
      </Routes>
    </div>
  )
}

export default App
