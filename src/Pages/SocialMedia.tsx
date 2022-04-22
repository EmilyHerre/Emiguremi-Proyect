import InstagramLogo from '../assets/icons/instagram.svg';
import FacebookLogo from '../assets/icons/facebook.svg';
import { MediaLink } from '../components/MediaLink';
import { Link } from 'react-router-dom';



export const SocialMedia = () => {


  return (
    <div className='social-background'>
      <div className="social-container">


        <h3>Mis redes</h3>


        <div className='social-container__links'>

          <MediaLink icon={InstagramLogo} userName="emiguremi" path='https://www.instagram.com/emiguremi/' />
          <MediaLink icon={InstagramLogo} userName="emHerret" path='https://www.instagram.com/emherret/' />
          <MediaLink icon={FacebookLogo} userName="Emily Herrera Torres" path='https://www.facebook.com/emily.herreratorres/' />

        </div>

        <h4>No dudes en contactarme</h4>
        <button
          type='button'
          className='contactame-btn'
        >
          Contactame

        </button>
      </div>
    </div>
  )
}
