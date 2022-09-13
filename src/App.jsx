import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import picture from "./pictures/p.png";
import all from "./components/all";
function App() {
  const [characters, setCharacters] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [nextid, setNextid] = useState("");
  
  useEffect(() => {
    const random = Math.floor(Math.random() * 126)+1
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}/`)
      .then((res) => setCharacters(res.data.results))
      .finally((res) => setIsloading(false));
  }, []);

  const search = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${nextid}`)
      .then((res) => setCharacters(res.data));
  };
  document.body.style = "background:#05292e";
  return (
    <div className="App">
      <div className="loading">
        {isloading ? (
            <div className="h1">  <h1>loading...</h1></div>   
        ) : (
          <div>
            <img src={picture} alt="img" />
            <div className="firstsection">
              <div className="container_search">
                <h1>Rick and Morty Wiki</h1>
                <input type="text" onChange={(e)=> setNextid(e.target.value)} placeholder="type id here" />
                <button className="button" onClick={search}>
                  <p>search</p>
                </button>
              </div>
            </div>

            <div className="imformation_characters">
              <h2>galaxia</h2>
              <ul>
                <li>type :{characters?.type}</li>
                <li>dimension : {characters?.dimension}</li>
                <li>population : <span  className="number">{characters?.residents?.length}</span> </li>
              </ul>
            </div>

                 <div className="container_data">
              {characters?.residents.map((character) => (
        
                <div key={character}  >
                  <Cart  key={character} character={character}/>
                </div>
              ))}
            </div>


  


          </div>
        )}
      </div>
    </div>
  );
}

export default App;
