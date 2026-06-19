import {useParams} from "react-router-dom";
import {service} from "./doutor_service.tsx";

export default function GetCurrentDoctor() {
    const {id} = useParams();

    return id ? service.getDoutor(Number(id)) : null;
}