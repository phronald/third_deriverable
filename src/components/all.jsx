import React from 'react';

const all = () => {

    const [alls, setAll] = useState([]);
    useEffect(() => {
      axios
        .get("https://rickandmortyapi.com/api/character")
        .then((res) => setAll(res.data));
    }, []);
    return (
        <div>
            <div className="container_data">
          {alls.results?.map((character) => (
            <div className="card" key={character.id}>
              <div className="side_img">
                <img src={character.image} alt="img" />
              </div>
              <div className="data_characters">
                <h3>{character.name}</h3>
                <hr />
                <ul>
                  <li>
                    <b>species :</b> {character?.species}
                  </li>
                  <li>
                    <b>origin :</b> {character?.origin?.name}
                  </li>
                  <li>
                    {" "}
                    <b>type :</b>{" "}
                    {character?.type === "" ? "unknown type" : character?.type}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        </div>
    );
};

export default all;