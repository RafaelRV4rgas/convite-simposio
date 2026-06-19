import {service} from "../services/doutor_service.tsx";
import {service as membrosService} from "../services/membros_service.tsx";
import GetCurrentDoctor from "../services/get_current_doctor.tsx";

export default function Doctor() {
    const doctor = GetCurrentDoctor();

    if (!doctor) {
        return <></>;
    }

    return (
        <section className="content-section doctor">
            <img src="/assets/img-1.jpeg" alt="Doctor Image"/>
            <div className="doctor-description">
                <h1 className="destaque-label">Neuroonco</h1>
                <div id='divider-bar'/>
                <h3 className="destaque-label">{service.getDoctorLabel(doctor, true)} {doctor.nome}</h3>
                <p>
                    {service.getDoctorLabel(doctor, false)}, sabemos da sua excelente atuação e da
                    dedicação necessária para trilhar a carreira na {doctor.especializacao}, uma especialidade
                    que exige não apenas conhecimento técnico, mas também responsabilidade, precisão
                    e humanidade.
                    Por isso, gostaríamos de fazer este convite de forma especial, reconhecendo o
                    quanto sua trajetória e experiência são inspiradoras para acadêmicos e futuros profissionais.
                    Será uma grande honra contar com sua presença como palestrante em nosso simpósio,
                    compondo esse seleto time de doutores e doutoras que admiramos profundamente.
                    Temos certeza de que sua participação agregará muito conhecimento e inspiração
                    aos nossos participantes.
                </p>

                <div style={{textAlign: "right"}}>
                    <h3 className="destaque-label">{membrosService.getPresidente().name}</h3>
                    <h3>Presidente LANNC</h3>
                </div>
            </div>
        </section>
    )
}