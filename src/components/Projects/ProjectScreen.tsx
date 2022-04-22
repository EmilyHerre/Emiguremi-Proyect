import { ProjectList } from './ProjectList'

export const ProjectScreen = () => {
    return (
        <div id='projects-section' className='section'>


            <div className='project-screen-title'>
                <h1>PROYECTOS</h1>
            </div>
            <div className='projects'>

                <ProjectList />

            </div>


        </div>
    )
}
