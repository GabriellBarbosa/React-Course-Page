import { Routes, Route } from 'react-router-dom'
import Slide from './pages/Slide/Slide';
import CleanCode from './pages/Slide/CleanCode/CleanCode';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='slide' element={<Slide />} >
        <Route path="clean-code" element={<CleanCode />} />
      </Route>
    </Routes>
  )
}

export default App
