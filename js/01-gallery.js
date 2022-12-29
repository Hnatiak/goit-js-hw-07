import { galleryItems } from './gallery-items.js';
// Change code below this line

const divRef = document.querySelector('.js-gallery')

function createGalleryMarkap(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
      </div>
    `;}).join('');
}

const addGalleryMarkup = createGalleryMarkap(galleryItems);
divRef.innerHTML = addGalleryMarkup;
divRef.addEventListener('click', onImageClick);

function onImageClick(evt) {
  blockStandartAction(evt);

  if (evt.target.nodeName !== "IMG") {
        return;
      }

  const instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}" width="800" height="600"/>
  `);
  
  instance.show()

  divRef.addEventListener('keydown', (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}

function blockStandartAction(evt) {
  evt.preventDefault();
}

console.log(galleryItems);
