import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
        
    const getImages = async() => {
        const newImages = await getGifs( category );    
        setImages(newImages);
        setIsLoading(false)
        //console.log(newImages)
    }

    useEffect( () => {
        getImages();
    }, [])
    
    return {
        images,
        isLoading // Es lo mismo que: isLoading: isLoading
    }
}
