import './App.css'
import Course from './pages/Course/CourseComponent';
import CourseProgress from './pages/Course/CourseProgress';
import Slide from './pages/Slide/Slide';

import { AuthProvider } from './context/AuthContext';
import { Routes, Route } from 'react-router-dom';
import { CourseContentProvider } from './context/CourseContentContext';

function App() {
    return (
        <AuthProvider>
            <CourseContentProvider>
                <Routes>
                    <Route path='slide/*' element={<Slide />} />
                    <Route path='curso/:course/progress' element={<CourseProgress />} />
                    <Route path='curso/:course/:lesson' element={<Course />} />
                </Routes>
            </CourseContentProvider>
        </AuthProvider>
    )
}

export default App;
