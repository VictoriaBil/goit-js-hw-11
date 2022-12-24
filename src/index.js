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

// function renderGallery(data) {
//   const markupGallery = data
//     .map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       }) =>
//         `<a class="gallery__link" href="${largeImageURL}">
//             <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" />
//             <div class="gallery__info">
//               <p class="gallery__info--item">
//                 <b>Likes</b>${likes}
//               </p>
//               <p class="gallery__info--item">
//                 <b>Views</b>${views}
//               </p>
//               <p class="gallery__info--item">
//                 <b>Comments</b>${comments}
//               </p>
//               <p class="gallery__info--item">
//                 <b>Downloads</b>${downloads}
//               </p>
//             </div>
//           </a>`
//     )
//     .join('');

//   gallery.insertAdjacentHTML('beforeend', markupGallery);
// }

function renderGallery(images) {
  const markup = images
    .map(image => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = image;
      return `
        <a class="gallery__link" href="${largeImageURL}">
          <div class="gallery-item" id="${id}">
            <img class="gallery-item__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
              <p class="info-item"><b>Likes</b>${likes}</p>
              <p class="info-item"><b>Views</b>${views}</p>
              <p class="info-item"><b>Comments</b>${comments}</p>
              <p class="info-item"><b>Downloads</b>${downloads}</p>
            </div>
          </div>
        </a>
      `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
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
