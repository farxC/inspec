import React from 'react';
import { ImagesAlbum } from './components/ImagesAlbum';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <main role='main'>
      <Header/>
      <section className="album py-4 bg-gradient">
        <div className="container">
          <div className="row">
            <ImagesAlbum/>
            <ImagesAlbum/>
            <ImagesAlbum/>
          </div>
          
          
        </div>
        
      </section>
      <Footer></Footer>
    </main>
  );
}

export default App;
