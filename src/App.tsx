import './App.css'
import Course from './pages/Course/CourseComponent';
import Slide from './pages/Slide/Slide';

import { AuthProvider } from './context/AuthContext';
import { Routes, Route } from 'react-router-dom';
import { CourseContentProvider } from './context/CourseContentContext';

function App() {
    return (
        <AuthProvider>
                <Routes>
                    <Route path='slide/*' element={<Slide />} />
                    <Route path='curso/:course/:lesson' element={(
                        <CourseContentProvider>
                            <Course />
                        </CourseContentProvider>
                    )} />
                </Routes>
        </AuthProvider>
    )
}

export default App;
