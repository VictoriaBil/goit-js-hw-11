export { renderGallery, cleanGallery };

const gallery = document.querySelector('.gallery');

function renderGallery(data) {
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
