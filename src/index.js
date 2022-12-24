import { fetchImages } from './fetch';
// import { renderGallery, cleanGallery } from './renderGallery';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  cleanGallery();
  // let query = '';
  // let page = 1;
  // const perPage = 40;

  const query = e.currentTarget.searchQuery.value.trim();

  fetchImages(query)
    .then(renderGallery)
    .catch(err => console.log(err));
}

function renderGallery({ data }) {
  const markupGallery = data.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<a class="gallery__link" href="${largeImageURL}">
            <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="gallery__info">
              <p class="gallery__info--item">
                <b>Likes</b>${likes}
              </p>
              <p class="gallery__info--item">
                <b>Views</b>${views}
              </p>
              <p class="gallery__info--item">
                <b>Comments</b>${comments}
              </p>
              <p class="gallery__info--item">
                <b>Downloads</b>${downloads}
              </p>
            </div>
          </a>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markupGallery);
}

function cleanGallery() {
  gallery.innerHTML = '';
}

// function alertNoEmptySearch() {
//   Notify.failure(
//     'The search string cannot be empty. Please specify your search query.'
//   );
// }

// function alertNoImagesFound() {
//   Notify.failure(
//     'Sorry, there are no images matching your search query. Please try again.'
//   );
// }

// function alertEndOfSearch() {
//   Notify.failure("We're sorry, but you've reached the end of search results.");
// }
