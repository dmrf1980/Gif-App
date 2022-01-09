

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifsGrid } from './components/GifsGrid'
/* import PropTypes from 'prop-types' */



export const GifsExpertApp = () => {

    // LISTA DE CATEGORIAS
    // const categories = ['Supercampeones','Samurai X', 'Dragon Ball', 'Ninja Turtles']
    
    //               o mejor
    
    //HOOK- con array como estado inicial
    const [categories, setCategories] = useState( [''] )

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            <ol>
                {
                    categories.map( category => 

                        <GifsGrid key={ category } category =  { category } />
                    )}
            </ol>

        </>
    )
}


