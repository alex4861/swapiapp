import React , {Component} from 'react';
import MovieList from './components/movieList'
import ShipList from './components/shipList'
import Header  from './components/header'
import './styles.css'
import './App.css';
import{FILMS, BASE_URL} from './constants/apiConstants'

class App extends Component {
   handleSelectedFilm = index =>{
     const dataShipArray = []
     console.log("handleSelectedFilm activated");
     const starShipsURL = `${BASE_URL}films/${index}`
     fetch(starShipsURL)
     .then(response =>{return response.json()})
     .then(data => {
       const {starships} = data
       starships.forEach(shipURL => {
         fetch(shipURL)
         .then(response => {return response.json()})
         .then(dataShip =>{
           dataShipArray.push(dataShip)
           this.setState({dataShip: dataShipArray,})

         }) 
         .catch(error => {console.error(error);
         })
       });
       
     })
     .catch(error => {console.error(`error al consultar films: ${error}`);
     })
         
   }
  constructor(){
    super();
    this.state = {
    }
  }

  componentDidMount(){
    const url = FILMS
    const dataArray = []
    fetch(url).then(result =>{
      return result.json();
    }).then( result => {
      const data = result.results
      for (let i = 0; i < data.length; i++) {
      dataArray[i] = (data[i].title)     
    }
    this.setState({data: dataArray,})
    }).catch(error =>{
      console.log("hubo un error");
      console.log(error);
    })
  
  }


 
  render(){
    const { data, dataShip } = this.state;
    return (
      <div className="App">
        <Header></Header>
        { data ? 
        <MovieList 
        data ={data}
        onSelectedFilm = {this.handleSelectedFilm}
        />:
        "cargando"}
        { dataShip ? 
        <ShipList dataShip= {dataShip}/>:
        "cargando"}
        
      </div>
    );
  
  }
   
   
}




export default App;
