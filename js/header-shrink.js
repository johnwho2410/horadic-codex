(function () {
  var topbar = document.querySelector('.topbar');
  if (!topbar) return;
  var THRESHOLD = 24;
  var update = function () {
    topbar.classList.toggle('is-scrolled', window.scrollY > THRESHOLD);
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
})();
