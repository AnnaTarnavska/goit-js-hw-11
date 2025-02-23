import { getImage } from './js/pixabay-api.js';
import {
    hideLoader,
    renderGallery,
    showLoader,
    showMessage,
} from './js/render-function.js';

const form = document.querySelector('.form');
const input = document.querySelector('.search-input');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const searchText = input.value.trim();
  if (!searchText) return showMessage();

  input.value = '';
  showLoader();

  getImage(searchText)
    .then(data => {
      const images = data.data.hits;

      if (!images || images.length === 0) {
        clearGallery();
        throw new Error();
      }

      renderGallery(images);
    })
    .catch(err => {
      console.error(' No resalts:', err);
      hideLoader();
      showMessage();
    });
}

function clearGallery() {
  const gallery = document.querySelector('.gallery');
  if (gallery) {
    gallery.innerHTML = '';
  }
}