import { Route, Routes } from "react-router-dom";
import { Index } from "./screens";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Index />} />
        </Routes>
    )
}