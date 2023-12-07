import { Routes, Route, Outlet } from 'react-router-dom'
import _0102 from './0102';
import _0201 from './0201';
import _0202 from './0202';

function CleanCode() {
    return (
        <>
            <Routes>
                <Route path="0102-codigo-limpo" element={<_0102 />} />
                <Route path="0201-nomes-significativos" element={<_0201 />} />
                <Route path="0202-motivos-das-decisoes" element={<_0202 />} />
            </Routes>
            <Outlet />
        </>
    );
}

export default CleanCode;