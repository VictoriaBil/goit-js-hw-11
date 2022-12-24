// import axios from 'axios';
import { fetchImages } from './fetch';
import { renderGallery, cleanGallery } from './renderGallery';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  query = e.currentTarget.searchQuery.value.trim();

  fetchImages();
  renderGallery();
}
