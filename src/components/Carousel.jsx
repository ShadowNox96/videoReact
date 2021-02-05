import React from 'react'
import '../assets/styles/components/Carousel.scss';
// Aca se hace lo mismo, asignar un hijo, porque le voy a pasar cada item del carousel pasandole un hijo como propiedad.
export const Carousel = ( { children }) => (
    <section className="carousel">
        <div className="carousel__container">
            {children}
        </div>
    </section>
  
);

export default Carousel;
