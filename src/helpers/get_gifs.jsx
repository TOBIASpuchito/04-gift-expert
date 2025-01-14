export const searchGif = async (categorie) => {
    const apiKey = 'CLaeXizkOiGEQMIkxEskiSBjQg1Xz7HU';
    const limit = 5; // Define el número de resultados
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(categorie)}&limit=${limit}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Error en la solicitud');
      const { data } = await response.json(); // Extrae los datos
    //   console.log(data); // Aquí tendrás los GIFs    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized
    }))
    // console.log(gifs);
    return gifs // Aquí tendrás los GIFs
    
    } catch (error) {
      console.error('Error al obtener los GIFs:', error);
    }
  };