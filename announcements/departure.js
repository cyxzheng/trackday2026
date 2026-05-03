(function () {
  var delayedLink = document.querySelector("[data-delayed-link]");
  var reveal = document.getElementById("departure-reveal");
  var video = reveal ? reveal.querySelector("iframe") : null;

  if (!delayedLink || !reveal || !video) {
    return;
  }

  delayedLink.addEventListener("click", function (event) {
    if (
      event.defaultPrevented ||
      (typeof event.button === "number" && event.button !== 0) ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    delayedLink.classList.add("is-leaving");

    if (!video.getAttribute("src")) {
      video.setAttribute(
        "src",
        "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&playsinline=1&rel=0"
      );
    }

    window.setTimeout(function () {
      reveal.hidden = false;
      delayedLink.setAttribute("aria-expanded", "true");
      delayedLink.classList.remove("is-leaving");
    }, 260);
  });
})();
