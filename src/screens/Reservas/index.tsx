import { Quadra } from './Quadra';
import { Ginasio } from './Ginasio';
import { Dispatch, SetStateAction, useState } from 'react';


export interface IPagina {
    setPageI: Dispatch<SetStateAction<number>>
}

export function Reservas() {

    const [page, setPage] = useState(1)

    if (page == 1) {
        return (
            <Quadra setPageI={setPage} />
        );
    } else if (page == 2) {
        return (
            <Ginasio setPageI={setPage} />
        );
    } 

}