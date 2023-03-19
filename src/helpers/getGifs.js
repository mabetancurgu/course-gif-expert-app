export const getGifs =async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?key=0mNNfwHlfFByB8XQgFkYywq8UGDjMAGd&q=${category}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json(); //resuelve lo que viene en el api, trae el body

    //mapeo la data y saco solo lo que quiero, lo envuelvo en una const
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    })
    )
    return gifs
}