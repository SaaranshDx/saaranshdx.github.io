const links = {
  email: {
    name: "Email",
    url: "mailto:sillycat@mizucode.qzz.io",
    icon: "fa-solid fa-mail"
  },
  github: {
    name: "GitHub",
    url: "https://github.com/SaaranshDx",
    icon: "fa-brands fa-github"
  },
  discord: {
    name: "Discord",
    url: "https://discord.com/users/Saaransh_Xd",
    icon: "fa-brands fa-discord"
  },
  x: {
    name: "X",
    url: "https://x.com/SaaranshXd",
    icon: "fa-brands fa-x-twitter"
  },
  instagram: {
    name: "Instagram",
    url: "https://instagram.com/Saaransh_Xd",
    icon: "fa-brands fa-instagram"
  },
  namemc: {
    name: "NameMC",
    url: "https://namemc.com/Saaransh_Xd",
    iconHtml: '<svg class="custom-link-icon" role="img" viewBox="-8 -8 16 16" xmlns="http://www.w3.org/2000/svg" aria-label="NameMC" shape-rendering="crispEdges"><rect fill="black" x="-8" y="-8" width="16" height="16"></rect><path fill="white" d="M-5-5L+3-5L+3-3L+5-3L+5+5L+3+5L+3-3L-3-3L-3+5L-5+5"></path></svg>'
  },
  modrinth: {
    name: "Modrinth",
    url: "https://modrinth.com/user/Saaransh_Xd",
    customIcon: "modrinth"
  },
  roblox: {
    name: "Roblox",
    url: "https://roblox.com/users/Saaransh_Xd",
    iconHtml: '<svg class="custom-link-icon" role="img" viewBox="0 0 640 640" xmlns="http://www.w3.org/2000/svg" aria-label="Roblox"><path fill="currentColor" d="M362.3 393.5L381 323.7L530.9 363.9L472 583.5L56 472L96.2 322.2L362.3 393.5zM583.5 167.5L543.3 317.3L277.2 246L258.5 315.8L108.6 275.7L167.5 56L583.5 167.5z"></path></svg>'
  },
  pinterest: {
    name: "Pinterest",
    url: "https://pinterest.com/Saaransh_Xd",
    icon: "fa-brands fa-pinterest"
  },
  email: {
    name: "Email",
    url: "mailto:Sillycat@mizucode.qzz.io",
    icon: "fa-solid fa-envelope"
  },
  soundcloud: {
    name: "SoundCloud",
    url: "https://soundcloud.com/saaransh_xd",
    icon: "fa-brands fa-soundcloud"
  },
  spotify: {
    name: "Spotify",
    url: "https://open.spotify.com/user/Saaransh_Xd",
    icon: "fa-brands fa-spotify"
  },
  threads: {
    name: "Threads",
    url: "https://threads.net/@Saaransh_Xd",
    icon: "fa-brands fa-threads"
  },
  twitch: {
    name: "Twitch",
    url: "https://twitch.tv/saaransh_xd",
    icon: "fa-brands fa-twitch"
  },
  gitlab: {
    name: "GitLab",
    url: "https://gitlab.com/Saaransh_Xd",
    icon: "fa-brands fa-gitlab"
  },
  buymeacoffee: {
    name: "Buy Me a Coffee",
    url: "https://buymeacoffee.com/saaransh_xd",
    icon: "fa-solid fa-mug-hot"
  },
  bluesky: {
    name: "Bluesky",
    url: "https://bsky.app/profile/saaranshxd.bsky.social",
    icon: "fa-solid fa-cloud"
  },
  steam: {
    name: "Steam",
    url: "https://steamcommunity.com/id/Saaransh_Xd",
    icon: "fa-brands fa-steam"
  },
  snapchat: {
    name: "Snapchat",
    url: "https://snapchat.com/add/Saaransh_Xd",
    icon: "fa-brands fa-snapchat"
  },
  youtube: {
    name: "YouTube",
    url: "https://youtube.com/Saaransh_Xd",
    icon: "fa-brands fa-youtube"
  },
  facebook: {
    name: "Facebook",
    url: "https://facebook.com/Saaransh_Xd",
    icon: "fa-brands fa-facebook"
  },
  clipbin: {
    name: "Clipbin",
    url: "https://clipbin.example",
    icon: "fa-solid fa-code"
  }
};

const important = ["github", "discord", "instagram", "youtube", "email"];

const modrinthIcon = `<svg class="custom-link-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Modrinth">
  <path d="M12.252 0.004a11.78 11.768 0 0 0 -8.92 3.73 11 10.999 0 0 0 -2.17 3.11 11.37 11.359 0 0 0 -1.16 5.169c0 1.42 0.17 2.5 0.6 3.77 0.24 0.759 0.77 1.899 1.17 2.529a12.3 12.298 0 0 0 8.85 5.639c0.44 0.05 2.54 0.07 2.76 0.02 0.2 -0.04 0.22 0.1 -0.26 -1.7l-0.36 -1.37 -1.01 -0.06a8.5 8.489 0 0 1 -5.18 -1.8 5.34 5.34 0 0 1 -1.3 -1.26c0 -0.05 0.34 -0.28 0.74 -0.5a37.572 37.545 0 0 1 2.88 -1.629c0.03 0 0.5 0.45 1.06 0.98l1 0.97 2.07 -0.43 2.06 -0.43 1.47 -1.47c0.8 -0.8 1.48 -1.5 1.48 -1.52 0 -0.09 -0.42 -1.63 -0.46 -1.7 -0.04 -0.06 -0.2 -0.03 -1.02 0.18 -0.53 0.13 -1.2 0.3 -1.45 0.4l-0.48 0.15 -0.53 0.53 -0.53 0.53 -0.93 0.1 -0.93 0.07 -0.52 -0.5a2.7 2.7 0 0 1 -0.96 -1.7l-0.13 -0.6 0.43 -0.57c0.68 -0.9 0.68 -0.9 1.46 -1.1 0.4 -0.1 0.65 -0.2 0.83 -0.33 0.13 -0.099 0.65 -0.579 1.14 -1.069l0.9 -0.9 -0.7 -0.7 -0.7 -0.7 -1.95 0.54c-1.07 0.3 -1.96 0.53 -1.97 0.53 -0.03 0 -2.23 2.48 -2.63 2.97l-0.29 0.35 0.28 1.03c0.16 0.56 0.3 1.16 0.31 1.34l0.03 0.3 -0.34 0.23c-0.37 0.23 -2.22 1.3 -2.84 1.63 -0.36 0.2 -0.37 0.2 -0.44 0.1 -0.08 -0.1 -0.23 -0.6 -0.32 -1.03 -0.18 -0.86 -0.17 -2.75 0.02 -3.73a8.84 8.839 0 0 1 7.9 -6.93c0.43 -0.03 0.77 -0.08 0.78 -0.1 0.06 -0.17 0.5 -2.999 0.47 -3.039 -0.01 -0.02 -0.1 -0.02 -0.2 -0.03Zm3.68 0.67c-0.2 0 -0.3 0.1 -0.37 0.38 -0.06 0.23 -0.46 2.42 -0.46 2.52 0 0.04 0.1 0.11 0.22 0.16a8.51 8.499 0 0 1 2.99 2 8.38 8.379 0 0 1 2.16 3.449 6.9 6.9 0 0 1 0.4 2.8c0 1.07 0 1.27 -0.1 1.73a9.37 9.369 0 0 1 -1.76 3.769c-0.32 0.4 -0.98 1.06 -1.37 1.38 -0.38 0.32 -1.54 1.1 -1.7 1.14 -0.1 0.03 -0.1 0.06 -0.07 0.26 0.03 0.18 0.64 2.56 0.7 2.78l0.06 0.06a12.07 12.058 0 0 0 7.27 -9.4c0.13 -0.77 0.13 -2.58 0 -3.4a11.96 11.948 0 0 0 -5.73 -8.578c-0.7 -0.42 -2.05 -1.06 -2.25 -1.06Z" fill="currentColor"></path>
</svg>`;

const projects = [
  {
    name: "Loop",
    description: "The best music player known to man kind",
    language: "Javascript",
    languageColor: "#f1e05a",
    isCompleted: true,
    github: "https://github.com/loop-mp3/loop",
    live: "https://loop.mizucode.qzz.io"
  },
  {
    name: "Clipbin",
    description: "Share text like never before",
    language: "Python",
    languageColor: "#3572A5",
    isCompleted: true,
    github: "https://github.com/SaaranshDx/clipbin",
    live: "https://clipbin.github.io"
  },
  {
    name: "ghostdrop (archived)",
    description: "File sharing that actually works",
    language: "Javascript",
    languageColor: "#f1e05a",
    isCompleted: true,
    github: "https://github.com/SaaranshDx/ghostdrop",
    live: "https://ghostdrop.qzz.io"
  },
  {
    name: "larpfetch",
    description: "The endgame of fetch programs",
    language: "C++",
    languageColor: "#F34B7D",
    isCompleted: true,
    github: "https://github.com/SaaranshDx/larpfetch",
    live: ""
  },
  {
    name: "wisp",
    description: "Auth that dosent suck",
    language: "JavaScript",
    languageColor: "#f1e05a",
    isCompleted: false,
    github: "https://github.com/SaaranshDx/wisp",
    live: ""
  },
  {
    name: "bean",
    description: "A restapi which exposes discord rpc data of users (yes its used in the portfolio)",
    language: "Javascript",
    languageColor: "#f1e05a",
    isCompleted: true,
    github: "https://github.com/SaaranshDx/bean",
    live: ""
  },
  {
    name: "hex (archived)",
    description: "A community driven minecraft cosmetics projetc",
    language: "Kotlin",
    languageColor: "#A97BFF",
    isCompleted: true,
    github: "https://github.com/SaaranshDx/hex",
    live: ""
  },
  {
    name: "discord bridge",
    description: "A bridge to connect minecraft chat with discord using web hooks",
    language: "Java",
    languageColor: "#B07219",
    isCompleted: true,
    github: "https://github.com/SaaranshDx/discord-bridge",
    live: "https://modrinth.com/plugin/discord-bridge-mc"
  },  
  {
    name: "peek",
    description: "Blinders to peek through for browsers!",
    language: "Javascript",
    languageColor: "#f1e05a",
    isCompleted: true,
    github: "https://github.com/SaaranshDx/peek",
    live: ""
  }  
];

const importantLinks = document.getElementById("important-links");
const allLinks = document.getElementById("all-links");
const projectsList = document.getElementById("projects-list");
const modal = document.getElementById("links-modal");
const moreLinksToggle = document.getElementById("more-links-toggle");
const closeLinks = document.getElementById("close-links");
const video = document.getElementById("background-video");
const audio = document.getElementById("background-audio");
const soundToggle = document.getElementById("sound-toggle");
const scrollHint = document.querySelector(".scroll-hint");
const heroFadeElements = document.querySelectorAll(".corner, .scroll-hint");
const entryScreen = document.getElementById("entry-screen");
const enterSite = document.getElementById("enter-site");
const musicToast = document.getElementById("music-toast");
const externalWarning = document.getElementById("external-warning");
const externalWarningUrl = document.getElementById("external-warning-url");
const cancelExternalWarning = document.getElementById("cancel-external-warning");
const continueExternalWarning = document.getElementById("continue-external-warning");
const currentYear = document.getElementById("current-year");
let pendingExternalUrl = "";

currentYear.textContent = String(new Date().getFullYear());

document.body.classList.add("site-locked");
document.documentElement.classList.add("site-locked");

async function enterSiteNow() {
  entryScreen.classList.add("is-entered");
  document.body.classList.remove("site-locked");
  document.documentElement.classList.remove("site-locked");
  musicToast.classList.add("is-visible");
  window.setTimeout(() => musicToast.classList.remove("is-visible"), 3500);

  try {
    await audio.play();
    soundToggle.innerHTML = '<i class="fa-solid fa-volume-high" aria-hidden="true"></i>';
    soundToggle.setAttribute("aria-pressed", "true");
    soundToggle.setAttribute("aria-label", "Disable background sound");
  } catch {
    soundToggle.setAttribute("aria-label", "Enable background sound");
  }
}

enterSite.addEventListener("click", enterSiteNow);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !entryScreen.classList.contains("is-entered")) {
    enterSiteNow();
  }
});

window.addEventListener("scroll", () => {
  heroFadeElements.forEach((element) => {
    element.classList.toggle("is-hidden", window.scrollY > 20);
  });
}, { passive: true });

function createLink(link, className = "") {
  const anchor = document.createElement("a");
  anchor.href = link.url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.className = className;
  anchor.setAttribute("aria-label", link.name);
  anchor.innerHTML = getLinkIcon(link);
  return anchor;
}

function getLinkIcon(link) {
  if (link.customIcon === "modrinth") {
    return modrinthIcon;
  }

  return link.iconHtml || `<i class="${link.icon}" aria-hidden="true"></i>`;
}

function renderProjects() {
  projectsList.innerHTML = projects.map((project) => {
    const projectLinks = [
      project.github ? `<a href="${escapeHtml(project.github)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(project.name)} on GitHub"><i class="fa-brands fa-github" aria-hidden="true"></i></a>` : "",
      project.live ? `<a href="${escapeHtml(project.live)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHtml(project.name)} live">${project.live.includes("modrinth.com") ? modrinthIcon : '<i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>'}</a>` : ""
    ].join("");
    const status = project.isCompleted ? "completed" : "in progress";
    const language = project.language
      ? `<span class="project-language"><i style="--language-color: ${escapeHtml(project.languageColor)}"></i>${escapeHtml(project.language)}</span>`
      : "";

    return `
      <article class="project-row">
        <div class="project-main">
          <div class="project-heading">
            <h3>${escapeHtml(project.name)}</h3>
            <span class="project-status ${project.isCompleted ? "is-completed" : ""}">${status}</span>
          </div>
          ${project.description ? `<p>${escapeHtml(project.description)}</p>` : ""}
        </div>
        <div class="project-meta">
          ${language}
          ${projectLinks ? `<span class="project-links">${projectLinks}</span>` : ""}
        </div>
      </article>
    `;
  }).join("");
}

important.forEach((key) => {
  if (links[key]) {
    importantLinks.appendChild(createLink(links[key]));
  }
});

renderProjects();

Object.entries(links).forEach(([key, link]) => {
  const card = document.createElement("a");
  card.href = link.url;
  card.target = "_blank";
  card.rel = "noopener noreferrer";
  card.className = "link-card";
  card.setAttribute("aria-label", link.name);
  card.innerHTML = getLinkIcon(link);
  allLinks.appendChild(card);
});

function openModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  moreLinksToggle.setAttribute("aria-expanded", "true");
  document.body.classList.add("modal-open");
  closeLinks.focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  moreLinksToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("modal-open");
  moreLinksToggle.focus();
}

moreLinksToggle.addEventListener("click", openModal);
closeLinks.addEventListener("click", closeModal);

document.querySelector("[data-close-modal]").addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (modal.classList.contains("is-open")) {
    closeModal();
  }
  if (externalWarning.classList.contains("is-open")) {
    closeExternalWarning();
  }
});

function closeExternalWarning() {
  externalWarning.classList.remove("is-open");
  externalWarning.setAttribute("aria-hidden", "true");
  pendingExternalUrl = "";
}

function openExternalWarning(url) {
  pendingExternalUrl = url;
  externalWarningUrl.textContent = url;
  externalWarning.classList.add("is-open");
  externalWarning.setAttribute("aria-hidden", "false");
  cancelExternalWarning.focus();
}

document.addEventListener("click", (event) => {
  const anchor = event.target.closest("a[href]");
  if (!anchor || !/^https?:$/i.test(anchor.protocol)) return;
  event.preventDefault();
  openExternalWarning(anchor.href);
});

document.querySelector("[data-close-external-warning]").addEventListener("click", closeExternalWarning);
cancelExternalWarning.addEventListener("click", closeExternalWarning);
continueExternalWarning.addEventListener("click", () => {
  if (pendingExternalUrl) window.open(pendingExternalUrl, "_blank", "noopener,noreferrer");
  closeExternalWarning();
});

soundToggle.addEventListener("click", async () => {
  audio.muted = !audio.muted;

  if (!audio.muted) {
    try {
      await audio.play();
    } catch {
      audio.muted = true;
      return;
    }
  }

  soundToggle.innerHTML = audio.muted
    ? '<i class="fa-solid fa-volume-xmark" aria-hidden="true"></i>'
    : '<i class="fa-solid fa-volume-high" aria-hidden="true"></i>';
  soundToggle.setAttribute("aria-pressed", String(!audio.muted));
  soundToggle.setAttribute("aria-label", audio.muted ? "Enable background sound" : "Disable background sound");
});

const beanUrl = "https://bean.apps.bot-hosting.cloud/data/1189872646163284041";
const githubUser = "SaaranshDx";

const LISTENING_KEYWORDS = [
  "spotify", "apple music", "youtube", "soundcloud", "loop",
  "deezer", "tidal", "pandora", "music", "listen"
];

const activityPanel = document.getElementById("panel-activity");
const githubPanel = document.getElementById("panel-github");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[ch]));
}

function isListening(activity) {
  if (activity.type === 2) return true;
  const searchable = [
    activity.application?.name,
    activity.details,
    activity.state
  ].filter(Boolean).join(" ").toLowerCase();
  return LISTENING_KEYWORDS.some((keyword) => searchable.includes(keyword));
}

function msToHuman(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${sec}s`;
  return `${sec}s`;
}

function activityTime(timestamps) {
  if (timestamps?.end) {
    const left = timestamps.end - Date.now();
    if (left > 0) return `ends in ${msToHuman(left)}`;
  }
  if (timestamps?.start) {
    const elapsed = Date.now() - timestamps.start;
    if (elapsed > 0) return `for ${msToHuman(elapsed)}`;
  }
  return "";
}

function formatClock(ms) {
  const seconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${String(seconds % 60).padStart(2, "0")}`;
}

function renderTimeline(timestamps) {
  if (!timestamps?.start || !timestamps?.end || timestamps.end <= timestamps.start) return "";
  const duration = timestamps.end - timestamps.start;
  const elapsed = Math.min(duration, Math.max(0, Date.now() - timestamps.start));
  const progress = Math.round((elapsed / duration) * 100);

  return `
    <div class="activity-timeline" data-start="${timestamps.start}" data-end="${timestamps.end}">
      <span class="timeline-time timeline-elapsed">${formatClock(elapsed)}</span>
      <span class="timeline-track"><span class="timeline-progress" style="width: ${progress}%"></span></span>
      <span class="timeline-time timeline-total">${formatClock(duration)}</span>
    </div>
  `;
}

function activityAssetUrl(activity, assetKey) {
  if (!assetKey) return "";
  if (/^https?:\/\//i.test(assetKey)) return assetKey;
  if (assetKey.startsWith("mp:external/")) {
    return `https://media.discordapp.net/external/${assetKey.slice("mp:external/".length)}`;
  }
  const applicationId = activity.application?.id;
  return applicationId
    ? `https://cdn.discordapp.com/app-assets/${applicationId}/${assetKey}.png?size=160`
    : "";
}

function renderActivityCard(activity, showButton = false) {
  const name = activity.application?.name || "Unknown";
  const details = activity.details || "";
  const state = activity.state || "";
  const time = activityTime(activity.timestamps);
  const largeImage = activityAssetUrl(activity, activity.assets?.large_image);
  const smallImage = activityAssetUrl(activity, activity.assets?.small_image);
  const buttons = showButton
    ? `<a class="activity-button" href="https://loop.mizucode.qzz.io" target="_blank" rel="noopener noreferrer">Get loop</a>`
    : "";
  const lines = [details, state]
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  return `
    <div class="activity-card">
      ${largeImage ? `<div class="activity-image-wrap"><img class="activity-image" src="${escapeHtml(largeImage)}" alt="${escapeHtml(activity.assets?.large_text || name)}" referrerpolicy="no-referrer">${smallImage ? `<img class="activity-small-image" src="${escapeHtml(smallImage)}" alt="${escapeHtml(activity.assets?.small_text || "")}" referrerpolicy="no-referrer">` : ""}</div>` : ""}
      <div>
        <h4>${escapeHtml(name)}</h4>
        ${lines}
        ${time ? `<div class="activity-time">${escapeHtml(time)}</div>` : ""}
        ${renderTimeline(activity.timestamps)}
        ${buttons ? `<div class="activity-buttons">${buttons}</div>` : ""}
      </div>
    </div>
  `;
}

function renderGroup(title, cards, emptyText) {
  if (!cards.length) return "";

  return `
    <div class="activity-group">
      <h3>${title}</h3>
      ${cards}
    </div>
  `;
}

async function loadActivity(showLoading = true) {
  if (showLoading) {
    activityPanel.innerHTML = `<div class="activity-empty">loading…</div>`;
  }
  try {
    const response = await fetch(beanUrl);
    if (!response.ok) throw new Error(String(response.status));
    const data = await response.json();
    const acts = data.activities || [];
    const listening = acts.filter(isListening);
    const playing = acts.filter((activity) => !isListening(activity));

    activityPanel.innerHTML =
      renderGroup(
        "playing",
        playing.map((a) => renderActivityCard(a, false)),
        "nothing"
      ) +
      renderGroup(
        "listening",
        listening.map((a) => renderActivityCard(a, true)),
        "nothing"
      );
  } catch {
    activityPanel.innerHTML = `
      <div class="api-down">
        <i class="fa-solid fa-plug-circle-exclamation" aria-hidden="true"></i>
        api is down
      </div>
    `;
  }
}

function updateActivityTimelines() {
  document.querySelectorAll(".activity-timeline").forEach((timeline) => {
    const start = Number(timeline.dataset.start);
    const end = Number(timeline.dataset.end);
    const duration = end - start;
    const elapsed = Math.min(duration, Math.max(0, Date.now() - start));
    const progress = Math.round((elapsed / duration) * 100);
    timeline.querySelector(".timeline-elapsed").textContent = formatClock(elapsed);
    timeline.querySelector(".timeline-progress").style.width = `${progress}%`;
  });
}

async function loadGithub() {
  githubPanel.innerHTML = `<div class="activity-empty">loading…</div>`;
  try {
    const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${githubUser}`);
    if (!response.ok) throw new Error(String(response.status));
    const data = await response.json();

    const cutoff = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
    const cutoffStr = cutoff.toISOString().slice(0, 10);
    const yearTotal = (data.contributions || [])
      .filter((entry) => entry.date >= cutoffStr)
      .reduce((sum, entry) => sum + (entry.count || 0), 0);

    githubPanel.innerHTML = `
      <div class="gh-total">${yearTotal.toLocaleString("en-US")} contributions in the last year</div>
      <div class="gh-graph">
        <img
          class="contribution-graph"
          src="https://ghchart.rshah.org/22272e/${githubUser}"
          alt="GitHub contribution graph for ${escapeHtml(githubUser)}"
          referrerpolicy="no-referrer"
          onerror="this.closest('.gh-graph').textContent = 'api is down'"
        >
      </div>
    `;
  } catch {
    githubPanel.innerHTML = `
      <div class="api-down">
        <i class="fa-solid fa-plug-circle-exclamation" aria-hidden="true"></i>
        api is down
      </div>
    `;
  }
}

function closeLinksModal() {
  const linksModal = document.getElementById("links-modal");
  if (linksModal.classList.contains("is-open")) {
    linksModal.classList.remove("is-open");
    linksModal.setAttribute("aria-hidden", "true");
    moreLinksToggle.setAttribute("aria-expanded", "false");
  }
}

loadGithub();
loadActivity();
setInterval(() => loadActivity(false), 1000);
setInterval(updateActivityTimelines, 1000);
