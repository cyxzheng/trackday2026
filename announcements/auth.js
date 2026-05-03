(function () {
  var unlockAt = new Date("2026-05-04T00:00:00-07:00").getTime();
  var storageKey = "yvrgrcAnnouncementsUnlocked";
  var password = "supremeleader";

  if (Date.now() >= unlockAt || sessionStorage.getItem(storageKey) === "true") {
    document.documentElement.classList.remove("auth-pending");
    return;
  }

  if (window.prompt("Enter password to view announcements") === password) {
    sessionStorage.setItem(storageKey, "true");
    document.documentElement.classList.remove("auth-pending");
    return;
  }

  document.documentElement.classList.add("auth-denied");
  window.location.replace("../");
})();
