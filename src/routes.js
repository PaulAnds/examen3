import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './Components/App';
import About from './Components/About/About'
import Error404 from './Components/Error/404';
import Contact from './Components/Contact/Contact';
import Portafolio from './Components/Portafolio/Portafolio';

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<About />} />
            <Route path='/curriculum-vitae' element={<About />} />
            <Route path='/portafolio' element={<Portafolio />} />
            <Route path='/portafolio/:noteId' element={<Portafolio />} />
            <Route path='/contacto' element={<Contact />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
    </App>
)

export default AppRoutes;