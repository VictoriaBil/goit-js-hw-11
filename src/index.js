import axios from 'axios';
// import { fetchImages } from './fetch';
import { renderGallery, cleanGallery } from './renderGallery';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', onSearch);

const KEY = '32269286-83e5915044612836799c36253';
let query = '';
let page = 1;
const perPage = 40;

function onSearch(e) {
  e.preventDefault();

  query = e.currentTarget.searchQuery.value.trim();

  fetchImages(query, page, perPage);
  renderGallery();
}

async function fetchImages(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}
