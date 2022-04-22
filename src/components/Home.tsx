import React from 'react'
import { AboutMeScreen } from '../Pages/AboutMeScreen';
import { LogoScreen } from '../Pages/LogoScreen';
import { SocialMedia } from '../Pages/SocialMedia';
import { ProjectScreen } from './Projects/ProjectScreen';
import { ProjectCard } from './Projects/ProjectCard';
import { projects } from '../data/Projects';
import { ProjectList } from './Projects/ProjectList';

export const Home = () => {
  return (
    <>
   
      <div className='section'>

        <div className='main-section' >

          <div className="logo-social">
            <div className='emiguremi-logo'>

              <LogoScreen />

            </div>

            <div className='social'>

              <SocialMedia />
            </div>

          </div>

          <div className='about-screen'>

            <AboutMeScreen />
          </div>

        </div>

      </div>

      <ProjectScreen />

    </>
  )
}
