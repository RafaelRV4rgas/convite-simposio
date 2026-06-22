import {service} from "../services/doutor_service.tsx";

export default function Convite() {
    const doctor = service.getCurrentDoctor();

    if (!doctor) return <></>;

    return (
        <section className="content-section convite">
            <h1 className="destaque-label">Convite Especial</h1>
            <div id='divider-bar'/>
            <p>
                Nós, da <strong>Liga de Neurologia e Neurocirurgia do Hospital Santa Rosa (<em>LANNcHSR</em>)</strong>,
                temos a
                honra de convidar nossa grande referência em cirurgia
                oncológica, <strong>{service.getDoctorLabel(doctor!, true)} {doctor!.nome}</strong>, para
                participar como palestrante do <strong>“1º Symposium Online das Grandes Áreas e Subespecialidades
                da Neurocirurgia: um guia aos aspirantes”</strong>.
                <br/>
                <br/>
                O simpósio será realizado com o apoio da <strong>Acadêmia Brasileira de Neurocirurgia</strong> e tem
                como idealização apoiar os acadêmicos, internos e médicos interessados em conhecer mais sobre as áreas
                de atuações, rotina e perspectivas da neurocirurgia.
            </p>
        </section>
    );
}