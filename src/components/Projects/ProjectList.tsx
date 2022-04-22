import { IProject, projects } from '../../data/Projects';
import { useFetch } from '../../helpers/useFetch';
import { ProjectCard } from './ProjectCard';

export const ProjectList = () => {

    // const { data: proyects, error, loading } = useFetch<IProyect>('https://localhost:44381/api/ProyectItem');

    // if(loading)
    // return <h1>Cargando...</h1>

    // if (error)
    // return <h1>{error}</h1>

    // return (
    //     <div>
    //         <h1>PRODUCTOS</h1>

    //         { !proyects || proyects.length === 0 ? "No hay proyectos" :

    //             proyects.map(proyect => {
    //                 return <CardProyect key={proyect.id}
    //                     {...proyect} />
    //             })
    //         }

    //     </div>
    // )

    return (
        <>
            {!projects || projects.length === 0 ? "No hay proyectos" :

                projects.map(project => {
                    return <ProjectCard key={project.id}
                        {...project} />
                })
            }

        </>
    )

}
