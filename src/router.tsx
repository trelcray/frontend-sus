import { Route, Routes } from "react-router-dom";
import { Index } from "./screens/Index";
import { Login } from "./screens/Login";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}