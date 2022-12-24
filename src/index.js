const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', onSearch);

const KEY = '32269286 - 83e5915044612836799c36253';

function onSearch(e) {
  e.preventDefault();

  query = e.target.value.trim();

  let query = '';
  let page = 1;
  const perPage = 40;

  fetch(
    `https://pixabay.com/api/?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  ).then(response => response.json());

  renderGallery();
}

function renderGallery(data) {
  const markupGallery = data
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
        `
          <a class="link" href="${largeImageURL}">
            <img class="picture" src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>${likes}
              </p>
              <p class="info-item">
                <b>Views</b>${views}
              </p>
              <p class="info-item">
                <b>Comments</b>${comments}
              </p>
              <p class="info-item">
                <b>Downloads</b>${downloads}
              </p>
            </div>
          </a>
        `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markupGallery);
}

function cleanGallery() {
  gallery.innerHTML = '';
}
