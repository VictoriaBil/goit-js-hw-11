import { fetchImages } from './fetch';
import { renderGallery, cleanGallery } from './renderGallery';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';

const form = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');
loadMoreBtn.classList.add('is-hidden');

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMoreBtn);

let query = '';
let page = 1;
const perPage = 40;

async function onSearch(e) {
  e.preventDefault();
  cleanGallery();

  const query = e.currentTarget.searchQuery.value.trim();

  if (query === '') {
    alertNoEmptySearch();
    return;
  }

  const data = await fetchImages(query, page, perPage);
  fetchImages(data);
  renderGallery(data);

  if (data.totalHits === 0) {
    alertNoImagesFound();
  }

  if (data.totalHits > perPage) {
    loadMoreBtn.classList.remove('is-hidden');
  }
}

async function onLoadMoreBtn() {
  page += 1;
  const data = await fetchImages(query, page, perPage);
  fetchImages(data);
  renderGallery(data);

  const totalPages = Math.ceil(data.totalHits / perPage);

  if (page > totalPages) {
    loadMoreBtn.classList.add('is-hidden');
    alertEndOfSearch();
  }
}

function alertNoEmptySearch() {
  Notify.failure(
    'The search string cannot be empty. Please specify your search query.'
  );
}

function alertNoImagesFound() {
  Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

function alertEndOfSearch() {
  Notify.failure("We're sorry, but you've reached the end of search results.");
}
