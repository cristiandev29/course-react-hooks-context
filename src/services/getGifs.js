const apiKey = process.env.REACT_APP_GIPHY_API_KEY;

export default function getGifs({ keyword = "panda" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      const gifs = data.map((image) => {
        const { title, images, id } = image;
        const url = images.downsized_medium.url;
        return { url, title, id };
      });
      return gifs;
    });
}
