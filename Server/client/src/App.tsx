import React from 'react';
import { ImagesAlbum } from './components/ImagesAlbum';
import { SearchItem } from './components/SearchItem';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div>
      <Header />
      <main role='main'>

        <SearchItem/>
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
    </div>
  );
}

export default App;
