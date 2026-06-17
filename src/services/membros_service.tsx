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
                img: "/assets/img-1.jpeg"
            },
            {
                name: "Dr. Renato Santos",
                cargo: "Presidente",
                img: "/assets/img-1.jpeg"
            },
            {
                name: "Dr. Renato Santos",
                cargo: "Presidente",
                img: "/assets/img-1.jpeg"
            },
            {
                name: "Dr. Renato Santos",
                cargo: "Presidente",
                img: "/assets/img-1.jpeg"
            },
        ];
    }

    getPresidente(): MembroModel {
        return this.membros.find(membro => membro.cargo === 'Presidente') as MembroModel;
    }
}

export const service = new MembrosService();
