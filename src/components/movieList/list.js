import React, {Component} from 'react';
import './styles.css'
 
class list extends Component{

        render(){
                const {dataList} = this.props
                const {onButtonClick} = this.props
                return(
                <div>
                        <button className="buttonList" onClick={onButtonClick}  >{dataList}</button>
                </div>                
               );

        }
}

export default list;