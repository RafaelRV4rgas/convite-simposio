import type MembroModel from "../domain/membro_model.tsx";

class MembrosService {
    membros: MembroModel[];

    constructor() {
        this.membros = this.getMembros();
    }

    getMembros(): MembroModel[] {
        return [
            {
                name: "Carolina Ayumi Kozima",
                cargo: "Presidente",
                img: `${import.meta.env.BASE_URL}assets/img-ia-f-2.jpeg`
            },
            {
                name: "Graziela Sogiro",
                cargo: "Vice Presidente",
                img: `${import.meta.env.BASE_URL}assets/img-ia-f-3.jpeg`
            },
            {
                name: "Rahianni Sampaio",
                cargo: "Marketing",
                img: `${import.meta.env.BASE_URL}assets/img-ia-f-1.jpeg`
            },
            {
                name: "Gabriella Lima Peres",
                cargo: "Financeiro",
                img: `${import.meta.env.BASE_URL}assets/img-ia-f-4.webp`
            },
        ];
    }

    getPresidente(): MembroModel {
        return this.membros.find(membro => membro.cargo === 'Presidente') as MembroModel;
    }
}

export const service = new MembrosService();
