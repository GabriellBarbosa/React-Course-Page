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
import _0504 from './0504';
import _0505 from './0505';
import _0000 from './0000';
import _0101 from './0101';
import _0601 from './0601';
import _0603 from './0603';
import _0604 from './0604';
import _0605 from './0605';
import _0606 from './0606';
import _0607 from './0607';
import _0608 from './0608';
import _0609 from './0609';

function CleanCode() {
    return (
        <>
            <Routes>
                <Route path="0000-intro" element={<_0000 />} />
                <Route path="0101-configuracao" element={<_0101 />} />
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
                <Route path="0504-objetos-e-estruturas-de-dados" element={<_0504 />} />
                <Route path="0505-hibridos" element={<_0505 />} />
                <Route path="0601-limites" element={<_0601 />} />
                <Route path="0603-sistemas" element={<_0603 />} />
                <Route path="0604-construcao-e-uso" element={<_0604 />} />
                <Route path="0605-projeto-simples" element={<_0605 />} />
                <Route path="0606-tratamento-de-erro" element={<_0606 />} />
                <Route path="0607-comentarios" element={<_0607 />} />
                <Route path="0608-formatacao" element={<_0608 />} />
                <Route path="0609-odores" element={<_0609 />} />
            </Routes>
            <Outlet />
        </>
    );
}

export default CleanCode;