import type DoutorModel from "../domain/doutor_model.tsx";

class DoutorService {
    doutors: DoutorModel[];
    currentDoctor: DoutorModel | undefined;

    constructor() {
        this.doutors = this.getDoutores();
    }


    getDoutores(): DoutorModel[] {
        return [
            {
                id: 0,
                nome: 'Renato Carvalho Santos',
                sexo: 'M',
                especializacao: 'Neurocirurgia',
                img: `${import.meta.env.BASE_URL}assets/img-ia-m-1.jpeg`,

            }, {
                id: 1,
                nome: 'Felizberta da Cruz Frei',
                sexo: 'F',
                especializacao: 'Neurocirurgia',
                img: `${import.meta.env.BASE_URL}assets/img-ia-f-5.jpeg`,

            }, {
                id: 2,
                nome: 'Marina Ruy Barbosa',
                sexo: 'F',
                especializacao: 'Neurocirurgia',
                img: `${import.meta.env.BASE_URL}assets/img-ia-f-6.webp`,
            }, {
                id: 3,
                nome: 'João Kleber Silva',
                sexo: 'M',
                especializacao: 'Neurocirurgia',
                img: `${import.meta.env.BASE_URL}assets/img-ia-m-2.jpg`,

            },
        ];
    }

    setCurrentDoctor(id: number) {
        this.currentDoctor = this.doutors.find(doutor => doutor.id === id);
    }

    getCurrentDoctor(): DoutorModel | undefined {
        return this.currentDoctor;
    }

    getDoctorLabel(doctor: DoutorModel, isAbreviado: boolean): string {
        if (doctor.sexo === 'M') return isAbreviado ? 'Dr.' : 'Doutor';
        return isAbreviado ? 'Dra.' : 'Doutora';
    }
}

export const service = new DoutorService();
