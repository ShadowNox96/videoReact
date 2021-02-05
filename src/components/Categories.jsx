import React from 'react'
import '../assets/styles/components/Categories.scss';

// lo que voy a hacer aqui es encapsularlo en un div para que no solo envie la etiqueta h3, si no que lo voy a encapsular y luego mandar un hijo que sea render de otro componente, de esta forma no lo llamo desde props, si no que lo traigo directamente de la asignacion de mi funcion

export const Categories = ({ children, title }) => (
    <div className="categories">
        <h3 className="categories__title">{ title }</h3>
        {children}
    </div>
);

export default Categories;
