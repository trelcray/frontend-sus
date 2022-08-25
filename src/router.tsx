import { Route, Routes } from "react-router-dom";
import { Consults } from "./screens/Consults";
import { CreateConsult } from "./screens/CreateConsult";
import { EditConsult } from "./screens/EditConsult";
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
            <Route path="/consults" element={<Consults />} />
            <Route path="/createConsult" element={<CreateConsult />} />
            <Route path="/editConsult" element={<EditConsult />} />
            <Route path="/screening" element={<Screening />} />
        </Routes>
    )
}