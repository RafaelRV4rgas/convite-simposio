import './App.css'
import Convite from "./components/convite.tsx";
import HeroVideo from "./components/hero_video.tsx";
import Membros from "./components/membros.tsx";
import Doctor from "./components/doctor.tsx";
import {useState} from "react";
import {service} from "./services/doutor_service.tsx";

function App() {

    useState(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const getId = urlParams.get('id');
        return service.setCurrentDoctor(Number(getId));
    });

    return (
        <>
            <HeroVideo/>
            <Convite/>
            <Doctor/>
            <Membros/>
        </>
    )
}

export default App
