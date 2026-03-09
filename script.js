// Edit the content in this object to update the page.
// Keep event details centralized here instead of in the HTML.
const eventContent = {
  title: "Vancouver GR Corolla Club Track Day!",
  participantCode: "0313",
  overviewImage: {
    src: "assets/images/cover.gif",
    alt: "Track day event cover image"
  },
  date: "March 7, 2026",
  time: "12:15 PM - 4:00 PM",
  locationName: "Mission Raceway Park",
  address: "32670 Dyke Rd, Mission, BC V2V 4J5",
  locationUrl: "https://maps.google.com/?q=32670+Dyke+Rd,+Mission,+BC+V2V+4J5",
  summary: "The first ever Vancouver GR Corolla Club track day, sponsored by Toyota Canada and Openroad Auto Group.",
  schedule: [
    { time: "12:15 PM", title: "Gates Open to Participants", description: "Gate code is 0313" },
    { time: "12:20 PM", title: "Registration and Tech Inspection" },
    { time: "12:45 PM", title: "Driver's Meeting" },
    { type: "marker", time: "1:00 PM", title: "Track Hot" },
    { time: "1:00 PM", title: "Group A Running", description: "1:00 PM - 1:15 PM" },
    { time: "1:15 PM", title: "Group B Running", description: "1:15 PM - 1:30 PM" },
    { time: "1:30 PM", title: "Group C Running", description: "1:30 PM - 1:45 PM" },
    { time: "1:45 PM", title: "Group A Running", description: "1:45 PM - 2:00 PM" },
    { time: "2:00 PM", title: "Group B Running", description: "2:00 PM - 2:15 PM" },
    { time: "2:15 PM", title: "Group C Running", description: "2:15 PM - 2:30 PM" },
    { time: "2:30 PM", title: "Group A Running", description: "2:30 PM - 2:45 PM" },
    { time: "2:45 PM", title: "Group B Running", description: "2:45 PM - 3:00 PM" },
    { time: "3:00 PM", title: "Group C Running", description: "3:00 PM - 3:15 PM" },
    { time: "3:15 PM", title: "Group A Running", description: "3:15 PM - 3:30 PM" },
    { time: "3:30 PM", title: "Group B Running", description: "3:30 PM - 3:45 PM" },
    { time: "3:45 PM", title: "Group C Running", description: "3:45 PM - 4:00 PM" },
    { type: "marker", time: "4:00 PM", title: "Track Cold" },
  ],
  requiredItems: [
    "Snell 2010 or newer helmet",
    "Driver's License",
    "Signed Online Waiver"
  ],
  recommendedItems: [
    "Water",
    "Tire pressure gauge",
    "Tire pump",
    "Snacks",
    "Folding chair",
    "Basic tools"
  ],
  groups: [
    {
      name: "Group A",
      people: [
        "Ross Dunnet",
        "Nathan Tong",
        "Colin Yu",
        "Marc Brito",
        "Jessie Pashak",
        "Jason Leung",
        "Alan Cham",
        "Brian Wong",
        "Ansix Auto",
        "Saito / Sasaki"
      ]
    },
    {
      name: "Group B",
      people: [
        "Jack Wong",
        "Eugene Liew",
        "Jason Lai",
        "Justin Ng",
        "Don Yip",
        "Jeremy McLean",
        "Erik Soderlund",
        "Gabi Chen",
        "Steve Lloyd",
        "Luka Petrovic"
      ]
    },
    {
      name: "Group C",
      people: [
        "Vic Quintoro",
        "Calvin Zheng",
        "Caymin Hansson",
        "Hanson Ng",
        "Leo Yang",
        "Tim Tseng",
        "Danny Luk",
        "Ian Wong",
        "Michael Chan",
        "Landon Folz"
      ]
    }
  ],
  map: {
    imageLabel: "[Track layout image or asset note]",
    sections: [
      "[Section 1]",
      "[Section 2]",
      "[Section 3]",
      "[Section 4]"
    ]
  },
  importantPeople: [
    {
      role: "Registration and Coordination",
      names: ["Eugene Liew", "Calvin Zheng", "Mission Staff"]
    },
    {
      role: "Track lot marshalls",
      names: ["Ross Dunnet", "Marc Brito", "Justin Ng"]
    },
    {
      role: "Tech inspections and support",
      names: ["Nathan Tong", "Marc Brito"]
    },
    {
      role: "Follow lead instructors",
      names: ["Jessie Pashak", "Nathon Tong", "Marc Brito"]
    },
    {
      role: "Medical volunteers",
      names: ["Victor Quintoro", "Justin Ng"]
    },
    {
      role: "Food and Beverage",
      names: ["Colin Yu", "Justin Ng"]
    },
  ]
};

const participantAccessStorageKey = "trackday2026:participant-access";

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function setLink(id, href) {
  const element = document.getElementById(id);
  if (element) {
    element.href = href;
  }
}

function setImage(id, image) {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  element.src = image.src;
  element.alt = image.alt;
}

function renderList(id, items) {
  const container = document.getElementById(id);
  if (!container) {
    return;
  }

  container.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function getChecklistStorageKey(section, item) {
  return `trackday2026:bring:${section}:${item}`;
}

function renderChecklist(id, section, items) {
  const container = document.getElementById(id);
  if (!container) {
    return;
  }

  container.innerHTML = items
    .map((item, index) => {
      const checkboxId = `${section}-item-${index}`;
      const isChecked = window.localStorage.getItem(getChecklistStorageKey(section, item)) === "true";

      return `
        <li class="checklist-item">
          <label class="checklist-label" for="${checkboxId}">
            <input
              class="checklist-checkbox"
              type="checkbox"
              id="${checkboxId}"
              data-storage-key="${getChecklistStorageKey(section, item)}"
              ${isChecked ? "checked" : ""}
            >
            <span>${item}</span>
          </label>
        </li>
      `;
    })
    .join("");

  container.querySelectorAll(".checklist-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const storageKey = event.currentTarget.dataset.storageKey;
      window.localStorage.setItem(storageKey, String(event.currentTarget.checked));
    });
  });
}

function renderSchedule(items) {
  const container = document.getElementById("schedule-body");
  if (!container) {
    return;
  }

  container.innerHTML = items
    .map((item) => {
      if (item.type === "marker") {
        return `
          <article class="schedule-marker">
            <p class="schedule-marker-label">${item.time}</p>
            <h3 class="schedule-marker-title">${item.title}</h3>
          </article>
        `;
      }

      return `
        <article class="schedule-item">
          <p class="schedule-time">${item.time}</p>
          <div class="schedule-card">
            <h3 class="schedule-title">${item.title}</h3>
            ${item.description ? `<p class="schedule-description">${item.description}</p>` : ""}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderGroups(items) {
  const container = document.getElementById("group-list");
  if (!container) {
    return;
  }

  container.innerHTML = items
    .map(
      (item) => `
        <details class="group-card">
          <summary class="group-summary">
            <h3>${item.name}</h3>
            <span class="group-toggle" aria-hidden="true"></span>
          </summary>
          <ul class="plain-list">
            ${item.people.map((person) => `<li>${person}</li>`).join("")}
          </ul>
        </details>
      `
    )
    .join("");
}

function renderPeople(items) {
  const container = document.getElementById("people-list");
  if (!container) {
    return;
  }

  container.innerHTML = items
    .map(
      (item) => `
        <article class="note-card">
          <h3>${item.role}</h3>
          <ul class="plain-list">
            ${item.names.map((name) => `<li>${name}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderMap(mapContent) {
  setText("map-image-placeholder", mapContent.imageLabel);
  renderList("track-sections", mapContent.sections);
}

function setAccessMessage(message, type) {
  const messageElement = document.getElementById("access-message");
  if (!messageElement) {
    return;
  }

  messageElement.textContent = message;
  messageElement.classList.remove("is-error", "is-success");

  if (type) {
    messageElement.classList.add(`is-${type}`);
  }
}

function setParticipantContentVisibility(isUnlocked) {
  const content = document.getElementById("participant-content");
  const form = document.getElementById("access-form");
  const accessCard = document.querySelector(".participant-access");
  const sectionNav = document.querySelector(".section-nav");

  if (content) {
    content.hidden = !isUnlocked;
  }

  if (accessCard) {
    accessCard.hidden = isUnlocked;
  } else if (form) {
    form.hidden = isUnlocked;
  }

  if (sectionNav) {
    sectionNav.hidden = !isUnlocked;
  }
}

function unlockParticipantContent() {
  window.localStorage.setItem(participantAccessStorageKey, "true");
  setParticipantContentVisibility(true);
  setAccessMessage("Participant details unlocked on this device.", "success");
}

function setupParticipantAccess(content) {
  const form = document.getElementById("access-form");
  const input = document.getElementById("access-code");
  const isUnlocked = window.localStorage.getItem(participantAccessStorageKey) === "true";

  setParticipantContentVisibility(isUnlocked);

  if (isUnlocked) {
    setAccessMessage("Participant details unlocked on this device.", "success");
    return;
  }

  setAccessMessage("Enter the participant code to continue.");

  if (!form || !input) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (input.value === content.participantCode) {
      unlockParticipantContent();
      input.value = "";
      return;
    }

    setAccessMessage("That code does not match.", "error");
    input.select();
  });
}

function renderPage(content) {
  setText("event-title", content.title);
  setImage("overview-image", content.overviewImage);
  setText("event-date", content.date);
  setText("event-time", content.time);
  setText("event-location-name", content.locationName);
  setText("event-location-address", content.address);
  setLink("event-location-link", content.locationUrl);
  setText("event-summary", content.summary);
  renderSchedule(content.schedule);
  renderChecklist("required-items", "required", content.requiredItems);
  renderChecklist("recommended-items", "recommended", content.recommendedItems);
  renderGroups(content.groups);
  renderMap(content.map);
  renderPeople(content.importantPeople);
  setupParticipantAccess(content);

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

renderPage(eventContent);
