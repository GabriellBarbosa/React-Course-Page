import { Route, Routes, Outlet } from "react-router-dom";
import CleanCode from "./CleanCode/CleanCode";

function Course() {
    return (
        <>
            <Routes>
                <Route path="clean-code" element={<CleanCode />} />
            </Routes>
            <Outlet />
        </>
    );
}

export default Course;