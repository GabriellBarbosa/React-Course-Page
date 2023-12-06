import { Routes, Route, Outlet } from 'react-router-dom'
import CleanCode from './CleanCode/0102';

function Slide() {
    return (
        <>
            <Routes>
                <Route path="codigo-limpo" element={<CleanCode />} />
            </Routes>
            <Outlet />
        </>
    );
}

export default Slide;