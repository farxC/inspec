import React from 'react';
import { ImagesCard } from './components/ImagesCard';
import { SearchItem } from './components/SearchItem';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { useQuery } from '@tanstack/react-query';
import { retrieveReports } from './api/retrieveReports';


function App() {

  const {status, isSuccess, data: reports, error} = useQuery({
    queryKey:["reports"],
    queryFn: retrieveReports
  })
  
  return (
    <div>
      <Header />
      <main role='main'>

        <SearchItem/>

        <section className="album py-4 bg-gradient">
          <div className="container">
            <div className="row">
            {isSuccess && (
              reports.data.map((report) => (
                <ImagesCard key={report.id} {...report}/>
              ))
            )}
            </div> 
            <div className="row">
             
            </div>
          </div>

        </section>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
