import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState([ 'Dragon Ball' ]);

    const onAddCategory = (newCategory) => {

        if( categorias.includes(newCategory) ) return;

        // console.log(newCategory) 
        //categorias.push('Valorant') -> Dejar de usar push para insertar en arreglos de react
        setCategorias([ newCategory, ...categorias])
    }



    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategorias={ setCategorias }
                onNewCategory={(value) => onAddCategory(value)}
            />

            { categorias.map( (category) => ( 
                <GifGrid
                    key={ category }
                    category={ category }/>
                ))
            }
        </>
    )
}
