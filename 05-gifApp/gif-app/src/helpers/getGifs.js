export const getGifs = async (category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=B8CCn0z3GozjaaX7cJY5yXeuezDpI2RP&q=${category}&limit=20`;
    const response = await fetch(url);
    const {data} = await response.json();
    
    //FILTAMOS LA DATA
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
    
}