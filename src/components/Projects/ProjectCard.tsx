import { IProject } from '../../data/Projects';
import InfoIcon from '../../assets/icons/info-icon.svg';


export const ProjectCard = ({
    id,
    name,
    urlImg,
    description }: IProject) => {

    const imagePath = `assets/products-img/${urlImg}.jpg`

    return (
        <>
            <div className='project-card'>

                <div className='body-card'>
                    <div className='top'>
                        <img className='project-img' src={urlImg} alt='img' />
                    </div>
                    <div className='bottom'>
                        <h3>{name}</h3>
                    </div>

                </div>
                <div className='details'>
                    <div className='icon'><svg xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        width="48">
                        <path d="M22.65 34H25.65V22H22.65ZM24 18.3Q24.7 18.3 25.175
                        17.85Q25.65 17.4 25.65 16.7Q25.65 16 25.175 15.5Q24.7 15 24 15Q23.3 15 22.825 
                        15.5Q22.35 16 22.35 16.7Q22.35 17.4 22.825 17.85Q23.3 18.3 24 18.3ZM24 44Q19.75 44 16.1 42.475Q12.45 40.95 9.75 38.25Q7.05 35.55 5.525 31.9Q4 28.25 4 24Q4 19.8 5.525 16.15Q7.05 12.5 9.75 9.8Q12.45 7.1 16.1 5.55Q19.75 4 24 4Q28.2 4 31.85 5.55Q35.5 7.1 38.2 9.8Q40.9 12.5 42.45 16.15Q44 19.8 44 24Q44 28.25 42.45 31.9Q40.9 35.55 38.2 38.25Q35.5 40.95 31.85 42.475Q28.2 44 24 44ZM24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24ZM24 41Q31 41 36 36Q41 31 41 24Q41 17 36 12Q31 7
                        24 7Q17 7 12 12Q7 17 7 24Q7 31 12 36Q17 41 24 41Z"/>
                    </svg></div>
                    <div className="contents">
                        <p>{description}</p>

                    </div>

                </div>

            </div>


        </>
    )
}
