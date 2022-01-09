// COMPONENTE AGREGAR CATEGORIA

import React, { useState } from 'react'

import PropTypes from 'prop-types';



export const AddCategory = ( { setCategories } ) => {

    // HOOK- valor del input y setear valor del input
    const [inputValue, setInputValue] = useState( '' )

    const handleInputValue = ( e ) => {
        setInputValue( e.target.value )
    }

    const handleSubmit = ( e ) => { // prevenir refresco de pantalla
        e.preventDefault()

        if ( inputValue.trim().length > 2) {
            setCategories ( categ => [inputValue, ...categ ] )
            setInputValue('')
        }
    }


    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputValue }
                placeholder=" Buscar..."
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
