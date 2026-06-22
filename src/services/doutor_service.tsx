import type DoutorModel from "../domain/doutor_model.tsx";

import img1 from "../../public/assets/img-ia-m-1.jpeg";
import img2 from "../../public/assets/img-ia-f-5.jpeg";
import img3 from "../../public/assets/img-ia-f-6.webp";
import img4 from "../../public/assets/img-ia-m-2.jpg";

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
                img: img1,

            }, {
                id: 1,
                nome: 'Felizberta da Cruz Frei',
                sexo: 'F',
                especializacao: 'Neurocirurgia',
                img: img2,

            }, {
                id: 2,
                nome: 'Marina Ruy Barbosa',
                sexo: 'F',
                especializacao: 'Neurocirurgia',
                img: img3,
            }, {
                id: 3,
                nome: 'João Kleber Silva',
                sexo: 'M',
                especializacao: 'Neurocirurgia',
                img: img4,

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
