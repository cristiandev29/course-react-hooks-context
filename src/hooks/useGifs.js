import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

export function useGifs({ keyword }) {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  // Es como el componentDidMount al tener el array que indica que no hay dependencias y solo se ejecuta 1 vez, si no se pone el array vacio, se ejecutaría la función cada vez que se renderice el componente
  /*useEffect(() => {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, []); 
*/

  //Agrupar estados
  /*
    const [gifs, setGifs] = useState({loading: false, results: [] })
    Acceder con gifs.loading o gifs.results
    Update con setGifs({loding: true, results: gifs.results}) Actualiza el valor de loading y deja results igual
*/

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]); // Al poner la clave keyword se va a ejecutar cada vez que se cambia la prop keyword

  return { loading, gifs };
}
