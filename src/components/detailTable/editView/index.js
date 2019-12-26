import React from 'react'
import './styles.css'

const editView = ({enableEditMode}) =>{

    return(
        <div>
            <button className='button' onClick={enableEditMode}>Editar</button>
        </div>
    )
}

export default editView;