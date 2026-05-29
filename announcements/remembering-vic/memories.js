(function () {
  var memories = window.memorialMemories || [];
  var interval = 8000;
  var reducedMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function createElement(tagName, className, text) {
    var element = document.createElement(tagName);

    if (className) {
      element.className = className;
    }

    if (typeof text === "string") {
      element.textContent = text;
    }

    return element;
  }

  function memoryUrl(memory) {
    return "memory.html?id=" + encodeURIComponent(memory.id);
  }

  function findMemory(id) {
    return memories.filter(function (memory) {
      return memory.id === id;
    })[0];
  }

  function renderCarousel() {
    var carousel = document.querySelector("[data-memory-carousel]");

    if (!carousel || !memories.length) {
      return;
    }

    var panel = carousel.querySelector("[data-memory-panel]");
    var byline = carousel.querySelector("[data-memory-byline]");
    var preview = carousel.querySelector("[data-memory-preview]");
    var readLink = carousel.querySelector("[data-memory-read]");
    var progress = carousel.querySelector("[data-memory-progress]");
    var currentIndex = 0;
    var timer = null;

    function queueAdvance() {
      window.clearTimeout(timer);
      timer = window.setTimeout(function () {
        showMemory((currentIndex + 1) % memories.length);
      }, interval);
    }

    function restartProgress() {
      if (!progress || reducedMotion || memories.length < 2) {
        return;
      }

      progress.style.animation = "none";
      progress.offsetHeight;
      progress.style.animation = "memory-progress " + interval + "ms linear forwards";
    }

    function setMemory(index) {
      var memory = memories[index];

      byline.textContent = memory.author;
      preview.textContent = memory.preview;
      readLink.href = memoryUrl(memory);
      restartProgress();
    }

    function showMemory(index) {
      currentIndex = index;

      if (reducedMotion) {
        setMemory(currentIndex);
        return;
      }

      panel.classList.add("is-fading");

      window.setTimeout(function () {
        setMemory(currentIndex);
        panel.classList.remove("is-fading");
        queueAdvance();
      }, 180);
    }

    setMemory(currentIndex);

    if (!reducedMotion && memories.length > 1) {
      queueAdvance();

      window.addEventListener("pagehide", function () {
        window.clearTimeout(timer);
      });
    }
  }

  function renderList() {
    var list = document.querySelector("[data-memory-cards]");

    if (!list) {
      return;
    }

    memories.forEach(function (memory) {
      var card = createElement("a", "memory-card memory-list-card");
      var byline = createElement("span", "memory-byline", memory.author);
      var preview = createElement("span", "memory-preview", memory.preview);
      var action = createElement("span", "memory-action", "Read more");

      card.href = memoryUrl(memory);
      card.appendChild(byline);
      card.appendChild(preview);
      card.appendChild(action);
      list.appendChild(card);
    });
  }

  function renderDetail() {
    var detail = document.querySelector("[data-memory-detail]");

    if (!detail) {
      return;
    }

    var params = new URLSearchParams(window.location.search);
    var memory = findMemory(params.get("id"));

    if (!memory) {
      var title = createElement("h1", "", "Memory not found");
      var copy = createElement("div", "article-copy");
      var paragraph = createElement(
        "p",
        "",
        "This memory could not be found. Please return to the memories list."
      );
      var action = createElement("a", "button-link");
      var actionText = createElement("span", "", "View all memories");

      action.href = "memories.html";
      action.appendChild(actionText);
      detail.appendChild(title);
      copy.appendChild(paragraph);
      detail.appendChild(copy);
      detail.appendChild(action);
      return;
    }

    var memoryTitle = createElement("h2", "memory-detail-title", "From " + memory.author);
    var memoryCopy = createElement("div", "article-copy memory-detail-copy");

    memory.paragraphs.forEach(function (paragraphText) {
      memoryCopy.appendChild(createElement("p", "", paragraphText));
    });

    detail.appendChild(memoryTitle);
    detail.appendChild(memoryCopy);
  }

  renderCarousel();
  renderList();
  renderDetail();
})();
