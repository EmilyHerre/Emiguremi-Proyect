import { CardProyect } from './CardProyect';
import { useEffect, useState } from 'react';
import { IProyect } from '../../data/Proyects';
import { proyects as proyectsArray } from '../../data/Proyects';
import { useFetch } from '../../helpers/useFetch';

export const ProyectList = () => {

    const { data: proyects, error, loading } = useFetch<IProyect>('https://localhost:44381/api/ProyectItem');

    if(loading)
    return <h1>Cargando...</h1>

    if (error)
    return <h1>{error}</h1>

    return (
        <div>
            <h1>PRODUCTOS</h1>

            { !proyects || proyects.length === 0 ? "No hay proyectos" :
                
                proyects.map(proyect => {
                    return <CardProyect key={proyect.id}
                        {...proyect} />
                })
            }

        </div>
    )
}
