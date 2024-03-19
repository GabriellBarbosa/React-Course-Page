import { Routes, Route } from 'react-router-dom'
import Slide from './pages/Slide/Slide';
import Course from './pages/Course/Course';
import './App.css'

function App() {
    return (
        <Routes>
            <Route path='slide/*' element={<Slide />} />
            <Route path='curso/:course/:lesson' element={<Course />} />
        </Routes>
    )
}

export default App;
