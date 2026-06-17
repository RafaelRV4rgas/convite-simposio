import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Convite from "./components/convite.tsx";
import HeroVideo from "./components/hero_video.tsx";
import Membros from "./components/membros.tsx";
import Doctor from "./components/doctor.tsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/:id" element={
                    <>
                        <HeroVideo/>
                        <Convite/>
                        <Doctor/>
                        <Membros/>
                    </>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
