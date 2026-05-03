(function () {
  var delayedLink = document.querySelector("[data-delayed-link]");

  if (!delayedLink) {
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

    var destination = delayedLink.href;

    window.setTimeout(function () {
      if (delayedLink.target === "_blank") {
        window.open(destination, "_blank", "noopener");
        delayedLink.classList.remove("is-leaving");
        return;
      }

      window.location.href = destination;
    }, 260);
  });
})();
