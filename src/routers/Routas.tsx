import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from '../ui/layout';

import { AboutMeScreen } from "../components/AboutMe/AboutMeScreen"
import { ProductoScreen } from '../components/Proyects/ProyectScreen';
import { Home } from '../components/Home';

export const Routas = () => {
  return (


    <BrowserRouter>
      <Layout>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMeScreen />} />
          <Route path="/proyects" element={<ProductoScreen />} />

        </Routes>
      </Layout >
    </BrowserRouter>

  )
}
