import { Routes, Route, Outlet } from 'react-router-dom'
import _0102 from './0102';
import _0201 from './0201';
import _0202 from './0202';
import _0203 from './0203';
import _0301 from './0301';
import _0302 from './0302';
import _0303 from './0303';
import _0304 from './0304';

function CleanCode() {
    return (
        <>
            <Routes>
                <Route path="0102-codigo-limpo" element={<_0102 />} />
                <Route path="0201-nomes-significativos" element={<_0201 />} />
                <Route path="0202-motivos-das-decisoes" element={<_0202 />} />
                <Route path="0203-mais-regras" element={<_0203 />} />
                <Route path="0301-funcoes" element={<_0301 />} />
                <Route path="0302-regras" element={<_0302 />} />
                <Route path="0303-parametros" element={<_0303 />} />
                <Route path="0304-evite-surpresas" element={<_0304 />} />
            </Routes>
            <Outlet />
        </>
    );
}

export default CleanCode;