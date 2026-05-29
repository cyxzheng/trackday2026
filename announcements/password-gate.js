(function () {
  var body = document.body;
  var root = document.documentElement;

  if (!body || !body.hasAttribute("data-password-gate")) {
    root.classList.remove("password-gate-pending");
    return;
  }

  var password = body.getAttribute("data-password") || "";
  var storageKey = "yvrgrc-announcements-password-ok";

  function unlock() {
    root.classList.remove("password-gate-pending");
    root.classList.remove("password-gate-locked");
    body.removeAttribute("data-password-gate");
    var gate = document.querySelector(".password-gate");

    if (gate) {
      gate.remove();
    }
  }

  try {
    if (window.sessionStorage.getItem(storageKey) === "true") {
      unlock();
      return;
    }
  } catch (error) {
    // Private browsing or strict storage settings can block sessionStorage.
  }

  root.classList.remove("password-gate-pending");
  root.classList.add("password-gate-locked");

  var gate = document.createElement("div");
  gate.className = "password-gate";
  gate.setAttribute("role", "dialog");
  gate.setAttribute("aria-modal", "true");
  gate.setAttribute("aria-labelledby", "password-gate-title");

  gate.innerHTML =
    '<div class="password-gate-panel">' +
    '<h1 class="password-gate-title" id="password-gate-title">Members only</h1>' +
    '<p class="password-gate-copy">Enter the password to view this announcement.</p>' +
    '<form class="password-gate-form" novalidate>' +
    '<label class="password-gate-label">Password' +
    '<input class="password-gate-input" type="password" autocomplete="current-password" required />' +
    "</label>" +
    '<button class="password-gate-button" type="submit">Continue</button>' +
    '<p class="password-gate-error" aria-live="polite"></p>' +
    "</form>" +
    "</div>";

  body.prepend(gate);

  var form = gate.querySelector("form");
  var input = gate.querySelector("input");
  var errorMessage = gate.querySelector(".password-gate-error");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (input.value === password) {
      try {
        window.sessionStorage.setItem(storageKey, "true");
      } catch (error) {
        // Access still works for this page load if storage is unavailable.
      }

      unlock();
      return;
    }

    input.value = "";
    errorMessage.textContent = "Incorrect password. Please try again.";
    input.focus();
  });

  window.setTimeout(function () {
    input.focus();
  }, 0);
})();
