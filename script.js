const form = document.getElementById('recommendation-form');
const recommendationList = document.getElementById('recommendation-list');
const dialog = document.getElementById('thank-you-dialog');
const closeButton = document.getElementById('dialog-close');

document.getElementById('year').textContent = new Date().getFullYear();

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('visitor-name').value.trim();
  const message = document.getElementById('visitor-message').value.trim();
  if (!message) return;

  const recommendation = document.createElement('blockquote');
  recommendation.className = 'card quote';
  recommendation.append(document.createTextNode('“' + message + '”'));

  const author = document.createElement('footer');
  author.textContent = '— ' + (name || 'Anonymous');
  recommendation.appendChild(author);
  recommendationList.appendChild(recommendation);

  form.reset();
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else window.alert('Thank you for leaving a recommendation!');
});

closeButton.addEventListener('click', function () {
  dialog.close();
});
