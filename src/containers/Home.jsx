import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';
// Esta es una manera de poder mantener los elementos presentacionales que se usan en toda la app.

export const Home = ({ myList, trends, originals }) => {
    return (
      <>
        <Search />
        {myList.length > 0 && (
          <Categories title="Mi Lista">
            <Carousel>
              {myList.map((item) => 
              <CarouselItem 
                key={item.id} 
                {...item}
                isList 
              />)}
            </Carousel>
          </Categories>
        )}

        <Categories title="Lo mas visto">
          <Carousel>
            {trends.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>

        <Categories title="Lo mejor de la semana">
          <Carousel>
            {originals.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>

      </>
    );
};

const mapStateToProps = (state) => {
  // Aca solo debo de extraer todos los elementos del llamado inicial, no hay necesidad de traerlo aca. Ahora ya estan mapeados los elementos dentro de la app y ya puedo utilizarlos sin nigun problema
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };

};

// Exportar elementos de manera normal
// export default Home;
// Exportar componente conectado al provider
export default connect(mapStateToProps, null)(Home);

