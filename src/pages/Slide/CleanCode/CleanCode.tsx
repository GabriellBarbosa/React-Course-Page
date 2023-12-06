import { Routes, Route, Outlet } from 'react-router-dom'

function CleanCode() {
    return (
        <>
            <Routes>
                <Route path="0102-codigo-limpo" element={<CleanCode />} />
            </Routes>
            <Outlet />
        </>
    );
}

export default CleanCode;