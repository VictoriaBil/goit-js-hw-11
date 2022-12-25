import axios from 'axios';
export { fetchImages };

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '32269286-83e5915044612836799c36253';

async function fetchImages(query, page, perPage) {
  const response = await axios.get(
    `${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response.data;
}
