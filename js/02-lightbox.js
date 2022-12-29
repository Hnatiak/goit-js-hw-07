import { galleryItems } from './gallery-items.js';
// Change code below this line

const divRef = document.querySelector('.js-gallery');

function createGalleryMarkap(galleryItems) {
  return galleryItems
    .map(( item ) => {
      return `
        <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
        </a>
    `;}).join('');
  }

// window.addEventListener('img', _.debounce('alt', 500))

const addGalleryMarkup = createGalleryMarkap(galleryItems);
divRef.innerHTML = addGalleryMarkup;

const gallery = new SimpleLightbox('.gallery a', { 
  captionsData: "alt"
});

// gallery.addEventListener('.gallery__image alt', _.debource(onInputChange, 2500))


console.log(galleryItem);
