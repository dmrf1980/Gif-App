
import { useFetchGifs } from "../hooks/useFetchGifs";

import { GifsGridItem } from './GifsGridItem';


export const GifsGrid = ({ category }) => {

    // CUSTOM-HOOK -> useFetchGifs.js

    const { data:images, loading} = useFetchGifs( category )

    return (
        <>
            <h3> {category} </h3>
            
            
            { loading && 
            <h6 className="animate__animated animate__slow"><i className="fas fa-spinner "> Loading . . .</i></h6>}

            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifsGridItem 
                            key={img.id} 
                                {...img} 
                            />
                    ))
                }
                
            </div>
        </>
    );
};
