import { Route, Routes } from "react-router-dom";
import { CreateConsult } from "./screens/CreateConsult";
import { Home } from "./screens/Home";
import { Index } from "./screens/Index";
import { Login } from "./screens/Login";
import { Screening } from "./screens/Screening";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/consults" element={<CreateConsult />} />
            <Route path="/screening" element={<Screening />} />
        </Routes>
    )
}