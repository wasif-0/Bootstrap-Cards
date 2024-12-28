import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header/Header';
import Caards from './Components/header/Cards/Cards';
import { Data } from './Data';



function App() {
  return (
    <>
      {Data ? (
        <>
          <Header />
          <h1>App Components</h1>
          <div className='Container'>
            {Data.map((e, i) => {
              return (
                <Caards 
                  title={e.title}
                  key={e.id}
                  desc={e.desc}
                  imgSrc={e.imgSrc}
                  id={e.id}
                />
                
              );
            })}
          </div>
        </>
      ) : (
        <h1>Data Not Available</h1>
      )}
    </>
  );
}

export default App;
