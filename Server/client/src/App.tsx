import React from 'react';
import { ImagesAlbum } from './components/ImagesAlbum';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <body>
      <Header />
      <main role='main'>

        <section className="d-flex justify-content-center">
          <div className='col-sm-2'>
            <div className='input-group mb-1 mt-4'>
              <div>
                <span className="input-group-text" id='osNumber'>Nº</span>
              </div>
              <input type="text" className="form-control" placeholder="Insira o número da O.S" aria-label="Insira o número da O.S" aria-describedby='osNumber' />
            </div>
          </div>

        </section>
        <section className="album py-4 bg-gradient">
          <div className="container">
            <div className="row">
              <ImagesAlbum />
              <ImagesAlbum />
              <ImagesAlbum />
            </div>
            <div className="row">
              <ImagesAlbum />
              <ImagesAlbum />
              <ImagesAlbum />
            </div>
          </div>

        </section>
        <Footer></Footer>
      </main>
    </body>
  );
}

export default App;
