// Edit the content in this object to update the page.
// Keep event details centralized here instead of in the HTML.
const participantCode = "0313";

const eventContent = {
  brandTitle: "YVR GRC Track Days",
  title: "Vancouver GR Corolla Club Track Day 2026",
  participantCode,
  groupColors: {
    a: "#A4CD2F",
    b: "#00ABF0",
    c: "#F57F04"
  },
  overviewImage: {
    src: "assets/images/cover.gif",
    alt: "Track day event cover image"
  },
  date: "March 13, 2026",
  time: "12:15 PM - 4:00 PM",
  locationName: "Mission Raceway Park",
  address: "32670 Dyke Rd, Mission, BC V2V 4J5",
  locationUrl: "https://maps.google.com/?q=32670+Dyke+Rd,+Mission,+BC+V2V+4J5",
  summary: "The first ever Vancouver GR Corolla Club track day, sponsored by Toyota Canada and OpenRoad Auto Group.",
  trackInfo: {
    tabs: [
      {
        id: "getting-there",
        label: "Getting There",
        title: "Arrival Instructions",
        featureCard: {
          eyebrow: "Gate Code",
          value: participantCode
        },
        description:
          "Upon entering the gate, turn RIGHT towards the paddock, and park in the area highlighted on the map for tech inspection.",
        media: {
          title: "Gate and paddock route",
          imageSrc: "assets/images/gettingthere.png",
          meta: "Opens a zoomable PDF in a new tab",
          pdfUrl: "assets/docs/gettingthere.pdf",
          pdfLabel: "Open getting-there PDF"
        },
        infoBox: {
          title: "Important!",
          items: [
            {
              title: "What Time Do I Need To Arrive?",
              body:
                "Aim to arrive on time, so that you have ample time to complete registration, tech inspection, and attend the driver's meeting."
            },
            {
              title: "What happens if I miss the driver's meeting?",
              body:
                "Attending the driver's meeting is mandatory. If you miss the driver's meeting, you will not be driving on track."
            }
          ]
        }
      },
      {
        id: "track-layout",
        label: "Track Layout",
        title: "Passing Zones and Education",
        description:
          "Take a moment to familiarize yourself with your group's passing zones.",
        media: {
          title: "Mission Raceway track layout",
          imageSrc: "assets/images/passingzones.png",
          meta: "Opens a zoomable PDF in a new tab",
          pdfUrl: "assets/docs/passingzones.pdf",
          pdfLabel: "Open track-layout PDF"
        },
        videos: [
          {
            youtubeId: "https://www.youtube.com/watch?v=KenIYlB2kvo",
            title: "Nathan Tong Onboard",
            caption: "Study Nathan sending it."
          },
          {
            title: "Instructor Demo Lap",
            youtubeId: "https://www.youtube.com/watch?v=VS9ga1GbPjI",
            caption: "Corner by corner guide."
          },
          {
            title: "Ross Dunnet Onboard",
            youtubeId: "https://www.youtube.com/watch?v=nJh48rrQEb4",
            caption: "Study Ross sending it."
          }
        ]
      },
      {
        id: "flags",
        label: "Flags",
        title: "Flags",
        description:
          "Review the common flags before your session begins.",
        flags: [
          {
            name: "Green",
            description: "Track is clear. Session is live.",
            imageSrc: "assets/images/flags/green.png"
          },
          {
            name: "Yellow",
            description: "Slow down. No passing until clear.",
            imageSrc: "assets/images/flags/yellow.png"
          },
          {
            name: "Waving Yellow",
            description: "Serious incident ahead. Slow down and be prepared to stop.",
            imageSrc: "assets/images/flags/wavingyellow.png"
          },
          {
            name: "Red",
            description: "Session stopped. Come off pace and follow marshal direction.",
            imageSrc: "assets/images/flags/red.png"
          },
          {
            name: "Black",
            description: "You have been flagged. Exit to pit lane on this lap.",
            imageSrc: "assets/images/flags/black.png"
          },
          {
            name: "Passing",
            description: "Point-by given. Complete the pass only in the approved zone.",
            imageSrc: "assets/images/flags/passing.png"
          },
          {
            name: "Checkered",
            description: "Session complete. Finish the lap and exit as directed.",
            imageSrc: "assets/images/flags/checkered.png"
          }
        ]
      }
    ]
  },
  schedule: [
    { time: "12:15 PM", title: "Gates Open to Participants", description: `Gate code is ${participantCode}` },
    { time: "12:20 PM", title: "Registration and Tech Inspection" },
    { time: "12:45 PM", title: "Driver's Meeting" },
    { type: "marker", time: "1:00 PM", title: "Track Hot" },
    { time: "1:00 PM", title: "Group A Running", description: "1:00 PM - 1:15 PM", group: "a" },
    { time: "1:15 PM", title: "Group B Running", description: "1:15 PM - 1:30 PM", group: "b" },
    { time: "1:30 PM", title: "Group C Running", description: "1:30 PM - 1:45 PM", group: "c" },
    { time: "1:45 PM", title: "Group A Running", description: "1:45 PM - 2:00 PM", group: "a" },
    { time: "2:00 PM", title: "Group B Running", description: "2:00 PM - 2:15 PM", group: "b" },
    { time: "2:15 PM", title: "Group C Running", description: "2:15 PM - 2:30 PM", group: "c" },
    { time: "2:30 PM", title: "Group A Running", description: "2:30 PM - 2:45 PM", group: "a" },
    { time: "2:45 PM", title: "Group B Running", description: "2:45 PM - 3:00 PM", group: "b" },
    { time: "3:00 PM", title: "Group C Running", description: "3:00 PM - 3:15 PM", group: "c" },
    { time: "3:15 PM", title: "Group A Running", description: "3:15 PM - 3:30 PM", group: "a" },
    { time: "3:30 PM", title: "Group B Running", description: "3:30 PM - 3:45 PM", group: "b" },
    { time: "3:45 PM", title: "Group C Running", description: "3:45 PM - 4:00 PM", group: "c" },
    { type: "marker", time: "4:00 PM", title: "Track Cold" }
  ],
  requiredItems: [
    "Snell 2010 or newer helmet",
    "Driver's License",
    "Signed online waiver",
    "Full tank of gas"
  ],
  recommendedItems: [
    "Water",
    "Tire pressure gauge",
    "Tire pump",
    "Snacks",
    "Folding chair",
    "Basic tools"
  ],
  faqItems: [
    {
      question: "How should I pace my laps?",
      answer:
        "Do one or two hot laps, then take a cooldown lap to manage heat in the car, tires, and brakes."
    },
    {
      question: "What if I feel overwhelmed on track?",
      answer:
        "Back off the pace, give point-bys early, and use the next cooldown lap to reset. Predictable driving matters more than speed."
    },
    {
      question: "Should I change tire pressures during the day?",
      answer:
        "Yes. Check pressures after sessions and adjust as needed, since repeated hot laps can raise them quickly."
    }
  ],
  groups: [
    {
      name: "Group A",
      group: "a",
      level: "Advanced",
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
      group: "b",
      level: "Intermediate",
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
      group: "c",
      level: "Novice",
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
  volunteers: [
    {
      role: "Registration & Coordination",
      names: ["Eugene Liew", "Calvin Zheng", "Mission Staff"]
    },
    {
      role: "Track Lot Marshals",
      names: ["Ross Dunnet", "Marc Brito", "Justin Ng"]
    },
    {
      role: "Tech Inspections & Support",
      names: ["Nathan Tong", "Marc Brito"]
    },
    {
      role: "Follow Lead Instructors",
      names: ["Jessie Pashak", "Nathan Tong", "Marc Brito"]
    },
    {
      role: "Medical",
      names: ["Victor Quintoro", "Justin Ng"]
    },
    {
      role: "Food & Beverage",
      names: ["Colin Yu", "Justin Ng"]
    }
  ]
};

const participantAccessStorageKey = "trackday2026:participant-access";
let scheduleRefreshTimerId = null;

function getStoredValue(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function setStoredValue(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    return;
  }
}

function updateTopChromeHeight() {
  const root = document.documentElement;
  const siteHeader = document.querySelector(".site-header");

  if (!root || !siteHeader) {
    return;
  }

  root.style.setProperty("--top-chrome-height", `${Math.ceil(siteHeader.offsetHeight)}px`);
}

function setupViewportOffsets() {
  updateTopChromeHeight();
  window.addEventListener("resize", updateTopChromeHeight);
}

function setActiveSectionNavLink(activeId) {
  const navLinks = document.querySelectorAll(".section-nav a");

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeId}`;
    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "location");
      return;
    }

    link.removeAttribute("aria-current");
  });
}

function setupSectionNavHighlight() {
  const navLinks = Array.from(document.querySelectorAll(".section-nav a"));

  if (!navLinks.length) {
    return;
  }

  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length) {
    return;
  }

  let activeSectionId = sections[0].id;
  let suppressScrollSyncUntil = 0;
  let scrollFrameId = null;

  const updateActiveSection = () => {
    if (Date.now() < suppressScrollSyncUntil) {
      return;
    }

    const headerOffset = document.querySelector(".site-header")?.offsetHeight || 0;
    const targetLine = headerOffset + 24;

    const nextActiveSection = sections.find((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= targetLine && rect.bottom > targetLine;
    }) || sections[0];

    if (nextActiveSection.id === activeSectionId) {
      return;
    }

    activeSectionId = nextActiveSection.id;
    setActiveSectionNavLink(activeSectionId);
  };

  setActiveSectionNavLink(activeSectionId);

  const syncActiveSectionOnScroll = () => {
    if (scrollFrameId) {
      return;
    }

    scrollFrameId = window.requestAnimationFrame(() => {
      scrollFrameId = null;
      updateActiveSection();
    });
  };

  window.addEventListener("scroll", syncActiveSectionOnScroll, { passive: true });
  window.addEventListener("resize", syncActiveSectionOnScroll);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("href")?.slice(1);

      if (!targetId) {
        return;
      }

      suppressScrollSyncUntil = Date.now() + 700;
      activeSectionId = targetId;
      setActiveSectionNavLink(activeSectionId);
    });
  });
}

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
      const isChecked = getStoredValue(getChecklistStorageKey(section, item)) === "true";

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
      setStoredValue(storageKey, String(event.currentTarget.checked));
    });
  });
}

function getGroupStyle(groupKey, groupColors) {
  const color = groupColors[groupKey];

  if (!color) {
    return "";
  }

  const sanitizedHex = color.trim().replace("#", "");

  if (!/^[0-9a-fA-F]{6}$/.test(sanitizedHex)) {
    return "";
  }

  const red = Number.parseInt(sanitizedHex.slice(0, 2), 16);
  const green = Number.parseInt(sanitizedHex.slice(2, 4), 16);
  const blue = Number.parseInt(sanitizedHex.slice(4, 6), 16);

  return `style="--group-color: ${color}; --group-color-soft: rgba(${red}, ${green}, ${blue}, 0.16);"`;
}

function parseScheduleTime(eventDate, timeLabel) {
  if (!eventDate || !timeLabel) {
    return null;
  }

  const match = timeLabel.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);

  if (!match) {
    return null;
  }

  const [, hourText, minuteText, meridiem] = match;
  let hours = Number.parseInt(hourText, 10);
  const minutes = Number.parseInt(minuteText, 10);

  if (Number.isNaN(hours) || Number.isNaN(minutes)) {
    return null;
  }

  if (meridiem.toUpperCase() === "PM" && hours !== 12) {
    hours += 12;
  }

  if (meridiem.toUpperCase() === "AM" && hours === 12) {
    hours = 0;
  }

  const scheduledTime = new Date(eventDate);

  if (Number.isNaN(scheduledTime.getTime())) {
    return null;
  }

  scheduledTime.setHours(hours, minutes, 0, 0);
  return scheduledTime;
}

function getDisplayRange(item) {
  if (item.description) {
    const descriptionRange = item.description.match(
      /(\d{1,2}:\d{2}\s*[AP]M)\s*-\s*(\d{1,2}:\d{2}\s*[AP]M)/i
    );

    if (descriptionRange) {
      return `${descriptionRange[1]} - ${descriptionRange[2]}`;
    }
  }

  return item.time;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getYouTubeEmbedUrl(value) {
  if (!value) {
    return "";
  }

  const trimmedValue = String(value).trim();

  if (!trimmedValue) {
    return "";
  }

  const directIdMatch = trimmedValue.match(/^[a-zA-Z0-9_-]{11}$/);

  if (directIdMatch) {
    return `https://www.youtube.com/embed/${directIdMatch[0]}`;
  }

  try {
    const parsedUrl = new URL(trimmedValue);
    const watchId = parsedUrl.searchParams.get("v");

    if (watchId && /^[a-zA-Z0-9_-]{11}$/.test(watchId)) {
      return `https://www.youtube.com/embed/${watchId}`;
    }

    const pathSegments = parsedUrl.pathname.split("/").filter(Boolean);
    const lastSegment = pathSegments.at(-1);

    if (
      (parsedUrl.hostname.includes("youtu.be") || pathSegments.includes("embed")) &&
      lastSegment &&
      /^[a-zA-Z0-9_-]{11}$/.test(lastSegment)
    ) {
      return `https://www.youtube.com/embed/${lastSegment}`;
    }
  } catch {
    return "";
  }

  return "";
}

function createPlaceholderImage(label) {
  const safeLabel = String(label).slice(0, 36);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" role="img" aria-label="${safeLabel}">
      <rect width="96" height="96" rx="12" fill="#111111"/>
      <rect x="12" y="16" width="72" height="48" rx="8" fill="#1f1f1f" stroke="#3a3a3a"/>
      <path d="M20 58L37 41L51 53L60 44L76 60" fill="none" stroke="#d0012b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="48" y="80" fill="#ffffff" font-family="Arial, sans-serif" font-size="10" text-anchor="middle">${safeLabel}</text>
    </svg>
  `.trim();

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function formatPersonSegment(segment) {
  const trimmedSegment = segment.trim();

  if (!trimmedSegment) {
    return "";
  }

  const parts = trimmedSegment.split(/\s+/).filter(Boolean);

  if (parts.length === 1) {
    return `<span class="surname">${escapeHtml(parts[0].toUpperCase())}</span>`;
  }

  const givenNames = parts.slice(0, -1).map((part) => escapeHtml(part)).join(" ");
  const surname = escapeHtml(parts[parts.length - 1].toUpperCase());

  return `${givenNames} <span class="surname">${surname}</span>`;
}

function formatPersonName(name) {
  return name
    .split("/")
    .map((segment) => `<span class="person-name">${formatPersonSegment(segment)}</span>`)
    .join(' <span aria-hidden="true">/</span> ');
}

function getEventStartTime(items, eventDate) {
  const firstScheduleItem = items.find((item) => item.type !== "marker");

  if (!firstScheduleItem) {
    return null;
  }

  return parseScheduleTime(eventDate, firstScheduleItem.time);
}

function getScheduleItemEndTime(item, itemIndex, items, eventDate) {
  const descriptionRange = item.description?.match(
    /(\d{1,2}:\d{2}\s*[AP]M)\s*-\s*(\d{1,2}:\d{2}\s*[AP]M)/i
  );

  if (descriptionRange) {
    return parseScheduleTime(eventDate, descriptionRange[2]);
  }

  for (let index = itemIndex + 1; index < items.length; index += 1) {
    const nextItem = items[index];

    if (nextItem.type === "marker") {
      continue;
    }

    return parseScheduleTime(eventDate, nextItem.time);
  }

  return null;
}

function getTrackState(items, eventDate, now = new Date()) {
  const scheduleItems = items.filter((item) => item.type !== "marker");
  const firstStart = getEventStartTime(items, eventDate);

  let currentIndex = -1;

  for (let index = 0; index < items.length; index += 1) {
    const item = items[index];

    if (item.type === "marker") {
      continue;
    }

    const startTime = parseScheduleTime(eventDate, item.time);
    const endTime = getScheduleItemEndTime(item, index, items, eventDate);

    if (!startTime || !endTime) {
      continue;
    }

    if (now >= startTime && now < endTime) {
      currentIndex = index;
      break;
    }
  }

  let lastMarkerTitle = "Track Cold";

  items.forEach((item) => {
    if (item.type !== "marker") {
      return;
    }

    const markerTime = parseScheduleTime(eventDate, item.time);

    if (markerTime && now >= markerTime) {
      lastMarkerTitle = item.title;
    }
  });

  const finalMarker = [...items].reverse().find((item) => item.type === "marker");
  const finalMarkerTime = finalMarker ? parseScheduleTime(eventDate, finalMarker.time) : null;
  const lastScheduleItem = scheduleItems[scheduleItems.length - 1];
  const fallbackEndTime = lastScheduleItem
    ? getScheduleItemEndTime(lastScheduleItem, items.lastIndexOf(lastScheduleItem), items, eventDate)
    : null;
  const eventEnd = finalMarkerTime || fallbackEndTime;

  if (firstStart && now < firstStart) {
    return {
      mode: "countdown",
      trackState: "upcoming",
      currentIndex: -1,
      nextTime: firstStart
    };
  }

  if (eventEnd && now >= eventEnd) {
    return {
      mode: "complete",
      trackState: "cold",
      currentIndex: -1
    };
  }

  if (currentIndex >= 0) {
    return {
      mode: "live",
      trackState: lastMarkerTitle.toLowerCase().includes("hot") ? "hot" : "cold",
      currentIndex,
      currentItem: items[currentIndex]
    };
  }

  return {
    mode: "between",
    trackState: lastMarkerTitle.toLowerCase().includes("hot") ? "hot" : "cold",
    currentIndex: -1
  };
}

function formatCountdown(targetTime) {
  const millisecondsRemaining = targetTime.getTime() - Date.now();
  const totalSeconds = Math.max(0, Math.floor(millisecondsRemaining / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${String(days).padStart(2, "0")}D:${String(hours).padStart(2, "0")}H:${String(minutes).padStart(2, "0")}M:${String(seconds).padStart(2, "0")}S`;
}

function getStatusPresentation(content) {
  const eventStartTime = getEventStartTime(content.schedule, content.date);
  const now = new Date();

  if (eventStartTime && now < eventStartTime) {
    return {
      pill: "Event Soon",
      pillState: "upcoming",
      primary: formatCountdown(eventStartTime),
      secondary: "until event starts"
    };
  }

  const state = getTrackState(content.schedule, content.date, now);

  if (state.mode === "countdown" && state.nextTime) {
    return {
      pill: "Event Soon",
      pillState: "upcoming",
      primary: formatCountdown(state.nextTime),
      secondary: "until event starts"
    };
  }

  if (state.mode === "live" && state.currentItem) {
    return {
      pill: state.trackState === "hot" ? "Track Hot" : "Track Cold",
      pillState: state.trackState,
      primary: state.currentItem.title,
      secondary: getDisplayRange(state.currentItem)
    };
  }

  if (state.mode === "complete") {
    return {
      pill: "Track Cold",
      pillState: "cold",
      primary: "Event Complete",
      secondary: content.time
    };
  }

  const upcomingItem = content.schedule.find((item) => item.type !== "marker");

  return {
    pill: state.trackState === "hot" ? "Track Hot" : "Track Cold",
    pillState: state.trackState,
    primary: upcomingItem ? upcomingItem.title : "Awaiting Next Update",
    secondary: upcomingItem ? upcomingItem.time : content.time
  };
}

function renderStatus(content) {
  const status = getStatusPresentation(content);
  const statusPill = document.getElementById("status-pill");
  const statusPrimary = document.getElementById("status-primary");
  const statusSecondary = document.getElementById("status-secondary");

  if (statusPill) {
    statusPill.textContent = status.pill;
    statusPill.dataset.state = status.pillState;
  }

  if (statusPrimary) {
    statusPrimary.textContent = status.primary;
  }

  if (statusSecondary) {
    statusSecondary.textContent = status.secondary;
  }
}

function renderSchedule(items, groupColors, eventDate) {
  const container = document.getElementById("schedule-body");

  if (!container) {
    return;
  }

  const currentState = getTrackState(items, eventDate);
  const currentScheduleIndex = currentState.currentIndex;

  container.innerHTML = items
    .map((item, index) => {
      if (item.type === "marker") {
        const markerState = item.title.toLowerCase().includes("hot") ? "hot" : "cold";
        return `
          <article class="schedule-marker" data-state="${markerState}">
            <p class="schedule-marker-label">${item.time}</p>
            <h3 class="schedule-marker-title">${item.title}</h3>
          </article>
        `;
      }

      const groupAttribute = item.group ? ` data-group="${item.group}"` : "";
      const groupStyle = item.group ? ` ${getGroupStyle(item.group, groupColors)}` : "";
      const isCurrent = index === currentScheduleIndex;
      const currentAttribute = isCurrent ? ' data-current="true"' : "";
      const currentBadge = isCurrent ? '<span class="schedule-now-badge">Now</span>' : "";

      return `
        <article class="schedule-item"${groupAttribute}${currentAttribute}${groupStyle}>
          <p class="schedule-time">${item.time}</p>
          <div class="schedule-divider"></div>
          <div class="schedule-frame">
            <div class="schedule-heading">
              <h4 class="schedule-title">${item.title}</h4>
              ${currentBadge}
            </div>
            ${item.description ? `<p class="schedule-description">${item.description}</p>` : ""}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderFaqItems(items) {
  const container = document.getElementById("faq-list");

  if (!container) {
    return;
  }

  container.innerHTML = items
    .map(
      (item, index) => `
        <details class="faq-item"${index === 0 ? " open" : ""}>
          <summary class="faq-summary">
            <h3>${escapeHtml(item.question)}</h3>
            <i data-lucide="chevron-down" class="group-toggle" aria-hidden="true"></i>
          </summary>
          <p class="faq-answer">${escapeHtml(item.answer)}</p>
        </details>
      `
    )
    .join("");
}

function setupScheduleRefresh(content) {
  if (scheduleRefreshTimerId) {
    window.clearInterval(scheduleRefreshTimerId);
  }

  const refreshLiveState = () => {
    renderStatus(content);
    renderSchedule(content.schedule, content.groupColors, content.date);
    updateTopChromeHeight();
  };

  refreshLiveState();
  scheduleRefreshTimerId = window.setInterval(refreshLiveState, 1000);
}

function renderGroups(items, groupColors) {
  const container = document.getElementById("group-list");

  if (!container) {
    return;
  }

  container.innerHTML = items
    .map(
      (item) => `
        <details class="group-card" data-group="${item.group}" ${getGroupStyle(item.group, groupColors)}>
          <summary class="group-summary">
            <div class="group-summary-copy">
              <div class="group-summary-title">
                <span class="group-summary-label">Group</span>
                <span class="group-summary-letter">${item.group.toUpperCase()}</span>
                <span class="group-summary-level">${item.level || ""}</span>
              </div>
            </div>
            <i data-lucide="chevron-down" class="group-toggle" aria-hidden="true"></i>
          </summary>
          <ul class="plain-list">
            ${item.people.map((person) => `<li>${formatPersonName(person)}</li>`).join("")}
          </ul>
        </details>
      `
    )
    .join("");
}

function renderVolunteers(items) {
  const container = document.getElementById("people-list");

  if (!container) {
    return;
  }

  container.innerHTML = items
    .map(
      (item) => `
        <article class="volunteer-group">
          <h4 class="volunteer-role">${item.role}</h4>
          <div class="volunteer-names">
            ${item.names.map((name) => `<span>${name}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderTrackInfoMedia(media) {
  if (!media) {
    return "";
  }

  const previewMarkup = media.imageSrc
    ? `
      <div class="track-media-preview">
        <img
          class="track-media-preview-image"
          src="${escapeHtml(media.imageSrc)}"
          alt="${escapeHtml(media.previewLabel || media.title || "PDF preview")}"
        >
      </div>
    `
    : `
      <div class="track-media-preview" aria-hidden="true">
        <div>
          <strong>${escapeHtml(media.previewLabel || media.title || "PDF Preview")}</strong>
          <span>${escapeHtml(media.previewHint || "Preview image goes here.")}</span>
        </div>
      </div>
    `;

  const copyMarkup = media.meta
    ? `
      <p class="track-media-meta">${escapeHtml(media.meta)}</p>
    `
    : "";

  if (media.pdfUrl) {
    return `
      <a class="track-info-visual track-media-link" href="${escapeHtml(media.pdfUrl)}" target="_blank" rel="noreferrer">
        <div class="track-info-visual-frame">
          ${previewMarkup}
        </div>
      </a>
      ${copyMarkup}
    `;
  }

  return `
    <div class="track-media-placeholder" aria-label="${escapeHtml(media.pdfLabel || "PDF placeholder")}">
      <div class="track-info-visual-frame">
        ${previewMarkup}
      </div>
      ${copyMarkup}
      <p class="track-media-meta">${escapeHtml(media.pdfLabel || "Add a PDF URL to enable this link.")}</p>
    </div>
  `;
}

function renderTrackInfoVideos(videos = []) {
  if (!videos.length) {
    return "";
  }

  return `
    <div class="track-video-section">
      <div class="track-video-header">
        <h3 class="track-video-title">First time here?</h3>
        <p class="track-video-intro">Watch some onboards to get familiar with the track before you arrive.</p>
      </div>
      <div class="track-video-list">
        ${videos
      .map((video) => {
        const embedUrl = getYouTubeEmbedUrl(video.youtubeId);
        const videoFrame = embedUrl
          ? `
                <iframe
                  class="track-video-embed"
                  src="${escapeHtml(embedUrl)}"
                  title="${escapeHtml(video.title)}"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              `
          : `
                <div class="track-video-placeholder">
                  <span>${escapeHtml(video.title)}</span>
                </div>
              `;

        return `
              <article class="track-video-card">
                ${videoFrame}
                <p class="track-video-heading">${escapeHtml(video.title)}</p>
                ${video.caption ? `<p class="track-video-caption">${escapeHtml(video.caption)}</p>` : ""}
              </article>
            `;
      })
      .join("")}
      </div>
    </div>
  `;
}

function renderTrackInfoFlags(flags = []) {
  if (!flags.length) {
    return "";
  }

  return `
    <div class="track-flags-list">
      ${flags
      .map((flag) => {
        const imageSrc = flag.imageSrc || createPlaceholderImage(`${flag.name} Flag`);
        const imageAlt = flag.imageSrc
          ? `${flag.name} flag`
          : `${flag.name} flag placeholder`;

        return `
            <article class="track-flag-card">
              <img class="track-flag-image" src="${escapeHtml(imageSrc)}" alt="${escapeHtml(imageAlt)}">
              <div class="track-flag-copy">
                <p class="track-flag-name">${escapeHtml(flag.name)}</p>
                <p class="track-flag-description">${escapeHtml(flag.description || "")}</p>
              </div>
            </article>
          `;
      })
      .join("")}
    </div>
  `;
}

function renderTrackInfoFeatureCard(featureCard) {
  if (!featureCard?.value) {
    return "";
  }

  return `
    <article class="track-info-feature-card" aria-label="${escapeHtml(featureCard.eyebrow || "Track info")}">
      ${featureCard.eyebrow ? `<p class="track-info-feature-eyebrow">${escapeHtml(featureCard.eyebrow)}</p>` : ""}
      <p class="track-info-feature-value">${escapeHtml(featureCard.value)}</p>
    </article>
  `;
}

function renderTrackInfoInfoBox(infoBox) {
  if (!infoBox?.title && !infoBox?.items?.length) {
    return "";
  }

  return `
    <aside class="track-info-callout" aria-label="${escapeHtml(infoBox.title || "Important information")}">
      ${infoBox.title ? `<h3 class="track-info-callout-title">${escapeHtml(infoBox.title)}</h3>` : ""}
      <div class="track-info-callout-items">
        ${(infoBox.items || [])
      .map((item) => `
            <div class="track-info-callout-item">
              ${item.title ? `<h4 class="track-info-callout-question">${escapeHtml(item.title)}</h4>` : ""}
              ${item.body ? `<p class="track-info-callout-answer">${escapeHtml(item.body)}</p>` : ""}
            </div>
          `)
      .join("")}
      </div>
    </aside>
  `;
}

function renderTrackInfoPanel(tab) {
  const sections = [];
  const primaryGroupParts = [];
  const isFlagsOnlyPanel = Boolean(tab.flags?.length) && !tab.featureCard && !tab.media && !tab.infoBox && !tab.videos?.length;

  if (tab.title) {
    primaryGroupParts.push(`<h3 class="track-info-heading">${escapeHtml(tab.title)}</h3>`);
  }

  if (tab.description) {
    primaryGroupParts.push(`<p class="track-info-lead">${escapeHtml(tab.description)}</p>`);
  }

  if (tab.featureCard) {
    primaryGroupParts.push(renderTrackInfoFeatureCard(tab.featureCard));
  }

  if (tab.media) {
    primaryGroupParts.push(renderTrackInfoMedia(tab.media));
  }

  if (tab.infoBox) {
    sections.push(`
      <div class="track-info-group">
        ${renderTrackInfoInfoBox(tab.infoBox)}
      </div>
    `);
  }

  if (tab.videos?.length) {
    sections.push(`
      <div class="track-info-group">
        ${renderTrackInfoVideos(tab.videos)}
      </div>
    `);
  }

  if (tab.flags?.length) {
    if (isFlagsOnlyPanel) {
      primaryGroupParts.push(renderTrackInfoFlags(tab.flags));
    } else {
      sections.push(`
        <div class="track-info-group">
          ${renderTrackInfoFlags(tab.flags)}
        </div>
      `);
    }
  }

  return `
    <section
      id="track-info-panel-${escapeHtml(tab.id)}"
      class="track-info-panel"
      role="tabpanel"
      aria-labelledby="track-info-tab-${escapeHtml(tab.id)}"
      tabindex="0"
      ${tab.isActive ? "" : "hidden"}
    >
      ${primaryGroupParts.length ? `
      <div class="track-info-group">
        ${primaryGroupParts.join("")}
      </div>
      ` : ""}
      ${sections.join("")}
    </section>
  `;
}

function setupTrackInfoTabs() {
  const tablist = document.getElementById("track-info-tablist");
  const tabs = Array.from(document.querySelectorAll(".track-info-tab"));
  const panels = Array.from(document.querySelectorAll(".track-info-panel"));

  if (!tablist || !tabs.length || !panels.length) {
    return;
  }

  const activateTab = (tabId, shouldFocus = false) => {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.tab === tabId;
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;

      if (isActive && shouldFocus) {
        tab.focus();
      }

      if (isActive) {
        tab.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
      }
    });

    panels.forEach((panel) => {
      panel.hidden = panel.id !== `track-info-panel-${tabId}`;
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(tab.dataset.tab, false));
    tab.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "Home" && event.key !== "End") {
        return;
      }

      event.preventDefault();

      let nextIndex = index;

      if (event.key === "ArrowRight") {
        nextIndex = (index + 1) % tabs.length;
      } else if (event.key === "ArrowLeft") {
        nextIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = tabs.length - 1;
      }

      activateTab(tabs[nextIndex].dataset.tab, true);
    });
  });
}

function renderTrackInfo(trackInfo) {
  const tablist = document.getElementById("track-info-tablist");
  const panelContainer = document.getElementById("track-info-panels");
  const tabs = trackInfo.tabs || [];

  if (!tablist || !panelContainer || !tabs.length) {
    return;
  }

  tablist.innerHTML = tabs
    .map(
      (tab, index) => `
        <button
          id="track-info-tab-${escapeHtml(tab.id)}"
          class="track-info-tab"
          type="button"
          role="tab"
          aria-selected="${index === 0 ? "true" : "false"}"
          aria-controls="track-info-panel-${escapeHtml(tab.id)}"
          tabindex="${index === 0 ? "0" : "-1"}"
          data-tab="${escapeHtml(tab.id)}"
        >
          ${escapeHtml(tab.label)}
        </button>
      `
    )
    .join("");

  panelContainer.innerHTML = tabs
    .map((tab, index) => renderTrackInfoPanel({ ...tab, isActive: index === 0 }))
    .join("");

  setupTrackInfoTabs();
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
  setStoredValue(participantAccessStorageKey, "true");
  setParticipantContentVisibility(true);
  setAccessMessage("Participant details unlocked on this device.", "success");
  updateTopChromeHeight();
}

function setupParticipantAccess(content) {
  const form = document.getElementById("access-form");
  const input = document.getElementById("access-code");
  const isUnlocked = getStoredValue(participantAccessStorageKey) === "true";

  setParticipantContentVisibility(isUnlocked);

  if (isUnlocked) {
    setAccessMessage("Participant details unlocked on this device.", "success");
    return;
  }

  setAccessMessage("Check your email for the code.");

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
  setText("brand-title", content.brandTitle);
  setText("event-title", content.title);
  setImage("overview-image", content.overviewImage);
  setText("event-date", content.date);
  setText("event-time", content.time);
  setText("event-location-name", content.locationName);
  setText("track-info-title", content.locationName);
  setText("event-location-address", content.address);
  setLink("event-location-link", content.locationUrl);
  setText("event-summary", content.summary);
  renderStatus(content);
  renderTrackInfo(content.trackInfo);
  renderChecklist("required-items", "required", content.requiredItems);
  renderChecklist("recommended-items", "recommended", content.recommendedItems);
  renderFaqItems(content.faqItems);
  renderGroups(content.groups, content.groupColors);
  renderVolunteers(content.volunteers);
  setupScheduleRefresh(content);
  setupParticipantAccess(content);

  setupViewportOffsets();
  setupSectionNavHighlight();
  updateTopChromeHeight();
}

renderPage(eventContent);

if (window.lucide && typeof window.lucide.createIcons === "function") {
  window.lucide.createIcons();
}
