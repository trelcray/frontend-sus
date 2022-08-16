import { Route, Routes } from "react-router-dom";
import { CreateConsult } from "./screens/CreateConsult";
import { Home } from "./screens/Home";
import { Index } from "./screens/Index";
import { Login } from "./screens/Login";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/CreateConsult" element={<CreateConsult />} />
        </Routes>
    )
}