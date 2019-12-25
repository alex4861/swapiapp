import React from "react";
import List from'./list';
import {Row, Col} from'react-bootstrap'      
import 'bootstrap/dist/css/bootstrap.min.css';


const movieList = ({data,onSelectedFilm }) =>  { 
   
   const handleOnButtonClick = index =>{
      console.log("handleOnButtonClick pressed");
      onSelectedFilm(index)
   }
   
   const strToComponents = dataArray =>(   
      dataArray.map( (title, i) =>
       (
          <div>
             <br></br>
             <List dataList={title} index={i+1} onButtonClick = {() => handleOnButtonClick(i+1)}></List>
          </div>
       ))
   )
      return(
         <div>
            <Row>
               <Col md={2}>
                  {strToComponents(data)}
               </Col>

            </Row>
         </div>         
      );
}
export default movieList;