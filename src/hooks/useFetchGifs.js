
import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs'


//CUSTOM-HOOK

export const useFetchGifs = ( category ) => {
   
    const [state, setState] = useState( {
        data: [],
        loading: true
    } )

    useEffect(() => {
      
        getGifs( category )
            .then( img => {

                setTimeout( () => {

                    setState({
                        data: img,
                        loading: false
                    })

                }, 800)
            })

    }, [ category ])

    return state // {data:[], loading: true}
}
