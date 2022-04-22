import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from '../ui/layout';

import { AboutMeScreen } from "../Pages/AboutMeScreen"
import { ProjectScreen } from '../components/Projects/ProjectScreen';
import { Home } from '../components/Home';

export const Routas = () => {
  return (

    <BrowserRouter>
  
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMeScreen />} />
          <Route path="/proyects" element={<ProjectScreen />} />

        </Routes>

    </BrowserRouter>

  )
}
