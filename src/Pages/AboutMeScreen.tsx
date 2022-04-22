import { Link } from "react-router-dom"
import { Card } from "../components/Card"



export const AboutMeScreen = () => {

    const handleClick = () => {
        window.location.href = '#projects-section'
    }

    return (
        <>
            <Card title="Sobre Mí" text="Hola, me presento, mi nombre es Emily, tengo 21 años.
                    Mis padres desde pequeña me han incentivado ha explotar mi creatividad, 
                    ha crear cosas con mis manos, es por esto que tejer es uno de mis hobbies favoritos..,"/>


            <Card title='Como surge este proyecto' text="En 2019, quería darle un regalo a alguien
            muy especial, fue ahí cuando surgió la idea de tejerle un amigurumi y obsequiarselo,
            con el tiempo y sin darme cuenta, tejer se convirtió en parte de mi día a día, me da tranquilidad 
            y me hace muy feliz saber que alguien siente alegría al recibir algo hecho por mí."/>


            <button className="btn-explore"
                type="button"
                onClick={handleClick}
            >
                Explora mis amigurumis
            </button>
        </>
    )
}
