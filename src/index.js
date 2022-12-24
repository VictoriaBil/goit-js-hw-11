import axios from 'axios';
import { fetchImages } from './fetch';
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
  renderGallery(data);
}
