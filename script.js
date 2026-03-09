// Edit this object to replace placeholders with real event information.
// Keep the structure simple so collaborators can update it without digging through markup.
const eventContent = {
  title: "[Event title]",
  date: "[Event date]",
  trackName: "[Track name]",
  summary: "[Short event summary placeholder. Add the basic purpose of the day, who it is for, and any major notes.]",
  statusNote: "[Optional status note placeholder. Example: Registration opens next week.]",
  quickFacts: [
    { label: "Track location", value: "[Track location]" },
    { label: "Full address", value: "[Track address]" },
    { label: "Arrival time", value: "[Arrival time]" },
    { label: "Drivers meeting time", value: "[Drivers meeting time]" },
    { label: "Event end time", value: "[Event end time]" },
    { label: "Contact person", value: "[Contact person]" },
    { label: "Contact number or email", value: "[Contact number or email]" },
    { label: "Registration / waiver note", value: "[Registration / waiver note]" },
    { label: "Weather / rain note", value: "[Weather / rain note]" }
  ],
  scheduleNote: "[Add schedule here. This section can later support a simple live current-time highlight if needed.]",
  schedule: [
    { time: "[7:00 AM]", activity: "[Arrival / unload]", notes: "[Optional notes]" },
    { time: "[7:30 AM]", activity: "[Check-in / waiver]", notes: "[Optional notes]" },
    { time: "[8:00 AM]", activity: "[Drivers meeting]", notes: "[Optional notes]" },
    { time: "[8:30 AM]", activity: "[First session]", notes: "[Optional notes]" },
    { time: "[12:00 PM]", activity: "[Lunch / track break]", notes: "[Optional notes]" },
    { time: "[1:00 PM]", activity: "[Afternoon sessions resume]", notes: "[Optional notes]" },
    { time: "[5:00 PM]", activity: "[Pack up / end of day]", notes: "[Optional notes]" }
  ],
  requiredItems: [
    "[Helmet]",
    "[Driver's license]",
    "[Signed waiver]",
    "[Registration confirmation]"
  ],
  recommendedItems: [
    "[Water]",
    "[Tire pressure gauge]",
    "[Snacks]",
    "[Folding chair]",
    "[Basic tools]"
  ],
  map: {
    imageLabel: "[Track layout image placeholder]",
    caption: "[Map caption]",
    pitNote: "[Pit in / pit out note]",
    paddockNote: "[Paddock note]",
    parkingNote: "[Parking note]"
  },
  groups: [
    { name: "[Group A]", description: "[Placeholder description for this driver group]" },
    { name: "[Group B]", description: "[Placeholder description for this driver group]" },
    { name: "[Group C]", description: "[Placeholder description for this driver group]" }
  ],
  faq: [
    { question: "[What happens if it rains?]", answer: "[Add answer or note that confirmation is pending.]" },
    { question: "[Is fuel available on site?]", answer: "[Add answer here.]" },
    { question: "[Can passengers ride along?]", answer: "[Add answer here.]" },
    { question: "[What safety gear is required?]", answer: "[Add answer here.]" }
  ],
  contact: {
    organizerName: "[Club/organizer name placeholder]"
  },
  lastUpdated: "[Last updated placeholder]",
  adminNotes: [
    "[Still need to confirm run groups]",
    "[Need official address from organizer]",
    "[Confirm waiver/check-in process]"
  ]
};

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function renderQuickFacts(items) {
  const container = document.getElementById("quick-facts-list");
  container.innerHTML = items
    .map(
      (item) => `
        <dl class="fact-card">
          <dt>${item.label}</dt>
          <dd>${item.value}</dd>
        </dl>
      `
    )
    .join("");
}

function renderSchedule(items) {
  const container = document.getElementById("schedule-body");
  container.innerHTML = items
    .map(
      (item) => `
        <tr data-time="${item.time}">
          <td class="schedule-time">${item.time}</td>
          <td>${item.activity}</td>
          <td>${item.notes}</td>
        </tr>
      `
    )
    .join("");
}

function renderList(id, items) {
  const container = document.getElementById(id);
  container.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderMap(mapContent) {
  setText("map-image-placeholder", mapContent.imageLabel);

  const container = document.getElementById("map-details");
  const rows = [
    { label: "Map caption", value: mapContent.caption },
    { label: "Pit in / pit out note", value: mapContent.pitNote },
    { label: "Paddock note", value: mapContent.paddockNote },
    { label: "Parking note", value: mapContent.parkingNote }
  ];

  container.innerHTML = rows
    .map(
      (row) => `
        <div class="note-card">
          <h3>${row.label}</h3>
          <p>${row.value}</p>
        </div>
      `
    )
    .join("");
}

function renderGroups(items) {
  const container = document.getElementById("group-list");
  container.innerHTML = items
    .map(
      (item) => `
        <article class="group-card">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}

function renderFaq(items) {
  const container = document.getElementById("faq-list");
  container.innerHTML = items
    .map(
      (item) => `
        <article class="faq-item">
          <h3>${item.question}</h3>
          <p>${item.answer}</p>
        </article>
      `
    )
    .join("");
}

function applyScheduleHighlight() {
  const rows = document.querySelectorAll("#schedule-body tr");
  if (!rows.length) {
    return;
  }

  rows.forEach((row) => row.classList.remove("current"));

  // This only activates once real times replace placeholders like "[7:00 AM]".
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  let currentRow = null;

  rows.forEach((row) => {
    const timeText = row.dataset.time || "";
    const parsedMinutes = parseTimeToMinutes(timeText);
    if (parsedMinutes !== null && parsedMinutes <= nowMinutes) {
      currentRow = row;
    }
  });

  if (currentRow) {
    currentRow.classList.add("current");
  }
}

function parseTimeToMinutes(value) {
  const match = value.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) {
    return null;
  }

  let hours = Number(match[1]);
  const minutes = Number(match[2]);
  const period = match[3].toUpperCase();

  if (period === "PM" && hours !== 12) {
    hours += 12;
  }

  if (period === "AM" && hours === 12) {
    hours = 0;
  }

  return hours * 60 + minutes;
}

function renderPage(content) {
  setText("event-title", content.title);
  setText("event-date", content.date);
  setText("track-name", content.trackName);
  setText("event-summary", content.summary);
  setText("status-note", content.statusNote);
  setText("schedule-helper-note", content.scheduleNote);
  setText("organizer-name", content.contact.organizerName);
  setText("last-updated", content.lastUpdated);

  renderQuickFacts(content.quickFacts);
  renderSchedule(content.schedule);
  renderList("required-items", content.requiredItems);
  renderList("recommended-items", content.recommendedItems);
  renderMap(content.map);
  renderGroups(content.groups);
  renderFaq(content.faq);
  renderList("admin-notes-list", content.adminNotes);
  applyScheduleHighlight();
}

renderPage(eventContent);
