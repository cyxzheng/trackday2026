// Edit the content in this object to update the page.
// Keep event details centralized here instead of in the HTML.
const eventContent = {
  title: "Vancouver GR Corolla Club Track Day!",
  dayAndStartTime: "[Day and start time]",
  location: "Mission Raceway Park",
  summary: "The first ever Vancouver GR Corolla Club track day, sponsored by Toyota Canada and Openroad Auto Group.",
  schedule: [
    { time: "12:15 PM", activity: "Gates open to track participants", notes: "Gate code is 0313" },
    { time: "12:20 PM", activity: "Registration and Tech Inspection", },
    { time: "12:45 PM", activity: "Driver's meeting", },
    { time: "1:00 PM", activity: "Track hot", },
    { time: "1:00 PM - 1:15 PM", activity: "Group A" },
    { time: "1:15 PM - 1:30 PM", activity: "Group B" },
    { time: "1:30 PM - 1:45 PM", activity: "Group C" },
    { time: "1:45 PM - 2:00 PM", activity: "Group A" },
    { time: "2:00 PM - 2:15 PM", activity: "Group B" },
    { time: "2:15 PM - 2:30 PM", activity: "Group C" },
    { time: "2:30 PM - 2:45 PM", activity: "Group A" },
    { time: "2:45 PM - 3:00 PM", activity: "Group B" },
    { time: "3:00 PM - 3:15 PM", activity: "Group C" },
    { time: "3:15 PM - 3:30 PM", activity: "Group A" },
    { time: "3:30 PM - 3:45 PM", activity: "Group B" },
    { time: "3:45 PM - 4:00 PM", activity: "Group C" },
    { time: "4:00 PM", activity: "Track cold" },
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
        "Ansix Designs",
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
        "Caymin",
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
      role: "Main contact person",
      names: ["[Main contact name]"]
    },
    {
      role: "Medical volunteers",
      names: ["[Volunteer 1]", "[Volunteer 2]"]
    },
    {
      role: "Instructors / track leads / tech help",
      names: ["[Name 1]", "[Name 2]", "[Name 3]"]
    }
  ]
};

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function renderList(id, items) {
  const container = document.getElementById(id);
  if (!container) {
    return;
  }

  container.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderSchedule(items) {
  const container = document.getElementById("schedule-body");
  if (!container) {
    return;
  }

  container.innerHTML = items
    .map(
      (item) => `
        <tr data-time="${item.time}">
          <td class="schedule-time">${item.time}</td>
          <td>${item.activity}</td>
          <td>${item.notes || ""}</td>
        </tr>
      `
    )
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
        <article class="group-card">
          <h3>${item.name}</h3>
          <ul class="plain-list">
            ${item.people.map((person) => `<li>${person}</li>`).join("")}
          </ul>
        </article>
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

function renderPage(content) {
  setText("event-title", content.title);
  setText("event-day-time", content.dayAndStartTime);
  setText("event-location", content.location);
  setText("event-summary", content.summary);
  renderSchedule(content.schedule);
  renderList("required-items", content.requiredItems);
  renderList("recommended-items", content.recommendedItems);
  renderGroups(content.groups);
  renderMap(content.map);
  renderPeople(content.importantPeople);
}

renderPage(eventContent);
