import React from "react";
import Row from "./components/Row";
import requests from "./request";
import Banner from "./components/Banner";
import "./App.css";
import Navbar from "./components/Navbar";
function App() {


  return (
    <div className="app">
    <Navbar/>
    <Banner/>
     <Row  title="NETFLIX ORIGNIALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
     <Row  title="Trending Now" fetchUrl={requests.fetchTrending} />
     <Row  title="Top Rated" fetchUrl={requests.fetchTopRated} />
     <Row  title="Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Row  title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row  title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
     <Row  title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
     <Row  title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
