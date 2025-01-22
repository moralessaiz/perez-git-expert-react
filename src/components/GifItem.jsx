
import PropTypes from "prop-types"

export const GifItem = ( { title, url, id } ) => {

    //console.log({ title, url, id })

    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}


// Tarea

// 1. Añadir PropTypes -> title: obligatorio - url: obligatorio

GifItem.PropTypes = {
    title: PropTypes.string.isRequired,
    url  : PropTypes.string.isRequired
}