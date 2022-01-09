
// funcion helper- async que devuelve una promesa
// con las imagenes


 export const getGifs = async ( category ) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=NZN7UMOxRbKo6xZ3TwzN6hhNUt4MdwwT`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });



    return gifs;
};