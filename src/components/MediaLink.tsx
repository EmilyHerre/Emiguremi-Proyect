
type Props = {
    icon: any;
    userName: string;
    path: string;
}

export const MediaLink = ({ icon, userName, path }: Props) => {
    return (
        <div className='media-link'>

            <img src={icon} alt='icon' />
            <a href={path} target="_blank" rel="noreferrer noopener">
                {userName}
            </a>

        </div>
    )
}
