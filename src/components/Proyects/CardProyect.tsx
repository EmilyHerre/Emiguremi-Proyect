import { IProyect } from '../../data/Proyects';

export const CardProyect = ({
    id,
    name,
    urlImg,
    description }: IProyect) => {

    return (

        <div className='card '>

            <h1>{ name }</h1>

            <h3>{description}</h3>
            
            <img src={urlImg} width='150'/>

   
      


        </div>
    )
}
