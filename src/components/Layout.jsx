import React from 'react';
//  Importacion de los elementos que se desean mantener
import Header from './Header';
import Footer from './Footer';

export const Layout = ({ children }) => (
  <div className="APP">
    <Header />
    {/* Este componente recibe un children que permite manejar la lgogica en la cual voy a empujar el componente segun la ruta a la cual estoy accediendo */}
    {children}

    <Footer />
  </div>
);

export default Layout;
