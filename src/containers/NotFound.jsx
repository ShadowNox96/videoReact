import React from 'react';
import '../../node_modules/animate.css/animate.min.css';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <>
    <div className="container">
      <h1 className="container__title animate__animated animate__bounce">Error 404</h1>
      <p className="container__p">La pagina que solicitas no se encuenta disponible.</p>
      <a href="/" className="container__a">Volver</a>
    </div>
  </>
);

export default NotFound;
