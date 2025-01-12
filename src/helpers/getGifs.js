export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=ym5WL2Pb01twWXjTGYNtYS3mMzDo4ar6&q=${category}&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}