import {api} from "../../api";

export interface ITime {
    idTime?: number,
    modalidade?: string,
    genero?: string,
    competicao?: string
}

export interface IResponseTime {
    dados: ITime[]
}

export interface IdAluno {
    idAluno?: number
}

class TimeData {
    index(data:IdAluno) {
        return api.post<IResponseTime>('/api/listarTimes', data)
    }
}

export default new TimeData()