import type MembroModel from "../domain/membro_model.tsx";

import img1 from '../../public/assets/img-ia-f-2.jpeg';
import img2 from '../../public/assets/img-ia-f-3.jpeg';
import img3 from '../../public/assets/img-ia-f-1.jpeg';
import img4 from '../../public/assets/img-ia-f-4.webp';

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
                img: img1
            },
            {
                name: "Graziela Sogiro",
                cargo: "Vice Presidente",
                img: img2
            },
            {
                name: "Rahianni Sampaio",
                cargo: "Marketing",
                img: img3
            },
            {
                name: "Gabriella Lima Peres",
                cargo: "Financeiro",
                img: img4
            },
        ];
    }

    getPresidente(): MembroModel {
        return this.membros.find(membro => membro.cargo === 'Presidente') as MembroModel;
    }
}

export const service = new MembrosService();
