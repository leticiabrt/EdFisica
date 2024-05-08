import { JEMG } from './Jemg';
import { Intercampi } from './Intercampi';
import { Dispatch, SetStateAction, useState } from 'react';


export interface IPagina {
    setPageI: Dispatch<SetStateAction<number>>
}

export function Times() {
    const handlePress = () => {
        // Lógica a ser executada ao pressionar o botão
        console.log('Botão pressionado!');
    };

    const [page, setPage] = useState(1)

    if (page == 1) {
        return (
            <JEMG setPageI={setPage} />
        );
    } else if (page == 2) {
        return (
            <Intercampi setPageI={setPage} />
        );
    } 

}
