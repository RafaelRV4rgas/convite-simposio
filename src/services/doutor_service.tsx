import type DoutorModel from "../domain/doutor_model.tsx";

class DoutorService {
    doutors: DoutorModel[];

    constructor() {
        this.doutors = this.getDoutores();
    }

    getDoutores(): DoutorModel[] {
        return [
            {
                id: 0,
                nome: 'Renato Carvalho Santos',
                sexo: 'M',
                especializacao: 'Neurocirurgia'

            }, {
                id: 1,
                nome: 'Felizberta da Cruz Frei',
                sexo: 'F',
                especializacao: 'Neurocirurgia'

            }, {
                id: 2,
                nome: 'Marina Ruy Barbosa',
                sexo: 'F',
                especializacao: 'Neurocirurgia'
            }, {
                id: 3,
                nome: 'João Kleber Silva',
                sexo: 'M',
                especializacao: 'Neurocirurgia'

            },
        ];
    }

    getDoutor(id: number): DoutorModel {
        return this.doutors.find(doutor => doutor.id === id) as DoutorModel;
    }

    getDoctorLabel(doctor: DoutorModel, isAbreviado: boolean): string {
        if (doctor.sexo === 'M') return isAbreviado ? 'Dr.' : 'Doutor';
        return isAbreviado ? 'Dra.' : 'Doutora';
    }
}

export const service = new DoutorService();
