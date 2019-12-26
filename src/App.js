import React , {Component} from 'react';
import MovieList from './components/movieList'
import ShipList from './components/shipList'
import Header  from './components/header'
import DetailTable from './components/detailTable'
import './styles.css'
import './App.css';
import{FILMS, BASE_URL} from './constants/apiConstants'
import {Row, Col} from'react-bootstrap'      
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  //Create fetch for get data of FILMS
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
           this.setState({dataShip: dataShipArray,detail:null,})

         }) 
         .catch(error => {console.error(error);
         })
       });
       
     })
     .catch(error => {console.error(`error al consultar films: ${error}`);
     })
         
   }
  //Create fetch for get data of FILMS
  handleonSelectedStarShip = url =>{
     console.log(url);
     fetch(url)
     .then(response =>{ return response.json();})
     .then(data =>{ 
       console.log(data);
       this.setState({detail: data,})

       
     })
     .catch(error =>{
       console.error(`hubo un error ${error}`);
       
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
    const { data, dataShip, detail } = this.state;
    return (
      <div className="App">
        <Header></Header>
        <div className="container-fluid">
        <Row>
            <Col md={3}
                          className='movieList'
                          >
            { data ? 
              <MovieList 
              data ={data}
              onSelectedFilm = {this.handleSelectedFilm}
              />:
              "cargando"}
            </Col>

            <Col md={9}>
            {detail? <DetailTable data ={detail}/> :
             dataShip ? 
              <ShipList 
              dataShip= {dataShip}
              onSelectedStarShip = {this.handleonSelectedStarShip}/>:
              "cargando"

            }
            </Col>
          </Row>
        </div>
            
      </div>
    );
  
  }
   
   
}




export default App;
