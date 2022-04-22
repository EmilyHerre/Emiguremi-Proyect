

type Props = {
  title: string;
  text: string;
}

export const Card = ( {title, text} : Props) => {
  return (
    
    <div className='card'>
                <div className="card-header">
                    <div className="pink"></div>
                    <div className="yellow"></div>
                    <div className="blue"></div>

                </div>
                <div className="card-title">
                    <h2>{title}</h2>

                </div>
                <div className="card-body">

                    <p>{text}</p>
                </div>
            </div>
  )
}
