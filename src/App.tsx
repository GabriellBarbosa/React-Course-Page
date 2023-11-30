import { Routes, Route } from 'react-router-dom'
import Slide from './pages/Slide/Slide';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='slide/*' element={<Slide />} />
    </Routes>
  )
}

export default App
