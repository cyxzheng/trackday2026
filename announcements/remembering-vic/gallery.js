(function () {
  var photos = Array.prototype.slice.call(document.querySelectorAll("[data-photo-index]"));
  var lightbox = document.querySelector("[data-lightbox]");

  if (!photos.length || !lightbox) {
    return;
  }

  var image = lightbox.querySelector("[data-lightbox-image]");
  var count = lightbox.querySelector("[data-lightbox-count]");
  var closeButton = lightbox.querySelector("[data-lightbox-close]");
  var previousButton = lightbox.querySelector("[data-lightbox-prev]");
  var nextButton = lightbox.querySelector("[data-lightbox-next]");
  var currentIndex = 0;
  var lastFocused = null;

  function showPhoto(index) {
    var photo = photos[index];
    var thumbnail = photo.querySelector("img");

    currentIndex = index;
    image.src = thumbnail.currentSrc || thumbnail.src;
    image.alt = thumbnail.alt;
    count.textContent = index + 1 + " / " + photos.length;
  }

  function openLightbox(index) {
    lastFocused = document.activeElement;
    showPhoto(index);
    lightbox.hidden = false;
    document.body.classList.add("has-lightbox");
    closeButton.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    image.removeAttribute("src");
    document.body.classList.remove("has-lightbox");

    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  function movePhoto(direction) {
    var nextIndex = (currentIndex + direction + photos.length) % photos.length;
    showPhoto(nextIndex);
  }

  photos.forEach(function (photo, index) {
    photo.addEventListener("click", function () {
      openLightbox(index);
    });
  });

  closeButton.addEventListener("click", closeLightbox);
  previousButton.addEventListener("click", function () {
    movePhoto(-1);
  });
  nextButton.addEventListener("click", function () {
    movePhoto(1);
  });

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (lightbox.hidden) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "ArrowLeft") {
      movePhoto(-1);
    } else if (event.key === "ArrowRight") {
      movePhoto(1);
    }
  });

  if (window.location.hash) {
    var target = document.querySelector(window.location.hash);

    if (target && target.hasAttribute("data-photo-index")) {
      window.setTimeout(function () {
        target.scrollIntoView({ block: "center" });
      }, 120);
    }
  }
})();
