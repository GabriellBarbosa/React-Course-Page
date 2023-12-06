import { Routes, Route, Outlet } from 'react-router-dom'
import _0102 from '../CleanCode/0102';

function CleanCode() {
    return (
        <>
            <Routes>
                <Route path="0102-codigo-limpo" element={<_0102 />} />
            </Routes>
            <Outlet />
        </>
    );
}

export default CleanCode;