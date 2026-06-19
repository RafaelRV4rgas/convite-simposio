import {service} from "../services/membros_service";
import MembroCard from "./membro_card";

export default function Membros() {

    return (
        <section className="content-section membros">
            <h1 className="destaque-label">Membros Organizadores</h1>
            <ul>
                {service.membros.map(membro => (
                    <li key={membro.name}>
                        <MembroCard img={membro.img} name={membro.name} cargo={membro.cargo}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}
