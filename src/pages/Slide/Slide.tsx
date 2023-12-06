import { Routes, Route, Outlet } from 'react-router-dom'
import CleanCode from './CleanCode/CleanCode';

function Slide() {
    return (
        <>
            <Routes>
                <Route path="codigo-limpo/*" element={<CleanCode />} />
            </Routes>
            <Outlet />
        </>
    );
}

export default Slide;