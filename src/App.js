import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from"./Components/Banner/Banner";
import RowPost from './Components/RowPost/RowPost';
import { originals } from './urls';
import{action} from './urls';
import{Horror}from './urls';
import{RomanceMovies} from './urls';
import{ComedyMovies} from './urls';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Originals'/>
     <RowPost url={action} title='Action Movies' isSmall />
     <RowPost url={Horror} title='Horror Movies' isSmall />
     <RowPost url={RomanceMovies} title='Romance Movies' isSmall />
     <RowPost url={ComedyMovies} title='Comedy Movies' isSmall />

    </div>
  );
}

export default App;
