import {api} from "../../api";

export interface IReserva {
    idReserva?: number,
    dia?: string,
    local?: string,
    horarioInicio?: string,
    horarioFim?: string,
    finalidade?: string,
    status?: string,
    tipo?: string,
    numeroPessoas?: string,
    idAluno?: number,
    nomeAluno?: string
}

export interface IResponseReserva {
    dados: IReserva[]
}

export interface IdAluno {
    idAluno?: number
}

class ReservaData {
    index() {
        return api.get<IResponseReserva>('/api/listarReservas')
    }
    store(data: IReserva) {
        return api.post("/api/cadastrarReserva", data)
    }
    mostrarReservas(data: IdAluno) {
        return api.post<IResponseReserva>('/api/mostrarReservas', data)
    }
}

export default new ReservaData()