import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';
// Esta es una manera de poder mantener los elementos presentacionales que se usan en toda la app.
const api = 'http://localhost:3000/initalState';
export const App = () => {
    const initialState = useInitialState(api);
    return (
      <div className='App'>
        <Header />
        <Search />
        {initialState.mylist.length > 0 &&
          <Categories title="Mi Lista">
            <Carousel>
              {initialState.mylist.map(item => 
                <CarouselItem key={ item.id } {...item }/>
              )}
            </Carousel>
          </Categories>
        }
        
        <Categories title="Lo mas visto">
          <Carousel>
            {initialState.trends.map(item => 
              <CarouselItem  key={ item.id} {...item } /> 
            )}
          </Carousel>
        </Categories>

        <Categories title="Lo mejor de la seman">
          <Carousel>
            {initialState.originals.map(item => 
              <CarouselItem key={ item.id } {...item } /> 
            )}
          </Carousel>
        </Categories>

        <Footer />
      </div>
    );
};

export default App;

