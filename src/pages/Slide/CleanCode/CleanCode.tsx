import { Routes, Route, Outlet } from 'react-router-dom'
import _0102 from '../CleanCode/0102';
import _0201 from '../CleanCode/0201';

function CleanCode() {
    return (
        <>
            <Routes>
                <Route path="0102-codigo-limpo" element={<_0102 />} />
                <Route path="0201-nomes-significativos" element={<_0201 />} />
            </Routes>
            <Outlet />
        </>
    );
}

export default CleanCode;