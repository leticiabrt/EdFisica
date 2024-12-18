import {api} from "../../api";

export interface ITreinos {
    idTreino?: number,
    dia?: string,
    horarioInicio?: string,
    horarioFim?: string,
    modalidade?: string,
    genero?: string,
    local?: string,
    publico?: string,
    responsavel?: string
}

export interface IJogos {
    idJogoTime?: number,
    dia?: string,
    horarioInicio?: string,
    horarioFim?: string,
    modalidade?: string,
    local?: string,
    time?: string,
}

export interface IResponseCronograma {
    treinos: ITreinos[],
    jogos: IJogos[]
}


class CronogramaData {
    index() {
        return api.get<IResponseCronograma>('/api/cronograma')
    }
}

export default new CronogramaData()