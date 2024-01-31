import { Routes, Route, Outlet } from 'react-router-dom'
import _0102 from './0102';
import _0201 from './0201';
import _0202 from './0202';
import _0203 from './0203';
import _0301 from './0301';
import _0302 from './0302';
import _0303 from './0303';
import _0304 from './0304';
import _0305 from './0305';
import _0306 from './0306';
import _0307 from './0307';
import _0401 from './0401';
import _0404 from './0404';
import _0501 from './0501';
import _0503 from './0503';

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
                <Route path="0305-tratamento-de-erro" element={<_0305 />} />
                <Route path="0306-open-closed-principle" element={<_0306 />} />
                <Route path="0307-exercicio" element={<_0307 />} />
                <Route path="0401-testes-unitarios" element={<_0401 />} />
                <Route path="0404-mais-sobre-testes" element={<_0404 />} />
                <Route path="0501-classes" element={<_0501 />} />
                <Route path="0503-coesao" element={<_0503 />} />
            </Routes>
            <Outlet />
        </>
    );
}

export default CleanCode;