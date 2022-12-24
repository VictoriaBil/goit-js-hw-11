export { renderGallery, cleanGallery };

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
