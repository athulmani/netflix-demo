import './App.css';
import Row from './components/Row';
import requests from './request';
import './components/Row.css'
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
     
     <Nav/>
<Banner  fetchUrl={requests.fetchNetflixOriginals}/>

     <Row isPoster={true} title="netfix original" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Trending in india" fetchUrl={requests.fetchTrending}/>
     <Row title="top rated movies" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horrorr movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="romanntic movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Docunmentries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
