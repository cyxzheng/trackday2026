(function () {
  var delayedLink = document.querySelector("[data-delayed-link]");

  if (!delayedLink) {
    return;
  }

  delayedLink.addEventListener("click", function (event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    delayedLink.classList.add("is-leaving");

    var destination = delayedLink.href;
    var newWindow = delayedLink.target === "_blank" ? window.open("about:blank", "_blank") : null;

    window.setTimeout(function () {
      if (newWindow) {
        newWindow.location.href = destination;
        return;
      }

      window.location.href = destination;
    }, 260);
  });
})();
