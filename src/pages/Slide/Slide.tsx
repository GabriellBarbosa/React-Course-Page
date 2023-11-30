import { Routes, Route, Outlet } from 'react-router-dom'
import CleanCode from './CleanCode/CleanCode';

function Slide() {
    return (
        <>
            <Routes>
                <Route path="clean-code" element={<CleanCode />} />
            </Routes>
            <Outlet />
        </>
    );
}

export default Slide;