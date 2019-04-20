import React, {Component} from 'react';
import axios from 'axios';

class ListaFilm extends Component {

  state = {
    filmRisultatoApi: []
    }

    //il componente è stato montato (è stato renderizzato)
    //questo metodo viene chiamato solo una volta dopo il
    //primo render del componente
    componentDidMount(){
      //qui avvengono sempre le chiamate api
      console.log(this.props.urlChiamata);
      axios.get(this.props.urlChiamata)
      .then((apiData) => {

        //estraiamo i dati dall'oogetto tornato dall'api
        const films = apiData.data.results;

        console.log(films);

        //ottenuti i dati li mettiamo nello state
        this.setState({
          filmRisultatoApi: films
          })
      })
      .catch((error) => {
        console.log(error);
      })

    }

    render(){

    //ragionamenti

    //leggiamo l'array film dallo state e lo cicliamo
    //Creando per ogni film un li con il titolo
    const titoliFilms = [...this.state.filmRisultatoApi].slice(0,5).map((film, indice) =>
    (<li key={indice}>
      <img src={'https://image.tmdb.org/t/p/w300' + film.backdrop_path} alt={film.backdrop_path} />
      {film.title}
      </li>));

    //mostra il contenuto

    return (
        <div>
          <h1>Lista Film più popolari</h1>
          <ul>
            {titoliFilms}
          </ul>
        </div>
      )
    }

}

//Per fare una chiamata api impostiamo delle props
//di default con i parametri di default per la chiamata api
ListaFilm.defaultProps =  {
    urlChiamata: 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eddaf5c507ed170bcc71ce852318e449',
  }

export default ListaFilm;
