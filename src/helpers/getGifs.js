export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=5&api_key=dRD17xnBg31KMQQTdvDhnTvIMwML6EKT`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            tittle: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs;
}

