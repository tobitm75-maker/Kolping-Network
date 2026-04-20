// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════

const MOCK_USERS = [
{ id: 1, name: “Luisa Hartmann”, avatar: “LH”, color: “#C8A96E”, years: { from: 2022, to: 2023 }, purpose: “Internship”, company: “Deloitte New York”, role: “Associate Consultant”, location: “Frankfurt, Germany”, field: “Consulting”, bio: “Former Kolping resident, now building a career in management consulting. Always happy to chat about NYC life and career paths in consulting.”, connected: true, online: true },
{ id: 2, name: “Max Becker”, avatar: “MB”, color: “#7B9E87”, years: { from: 2023, to: 2024 }, purpose: “University Exchange”, company: “KPMG”, role: “Audit Junior”, location: “Cologne, Germany”, field: “Finance”, bio: “Studied at NYU Stern during my time at Kolping. Now doing audit at KPMG Cologne. Big fan of the Kolping community and German-American connections.”, connected: false, online: true },
{ id: 3, name: “Anna Mueller”, avatar: “AM”, color: “#9B7EC8”, years: { from: 2022, to: 2023 }, purpose: “Internship”, company: “Goldman Sachs”, role: “Investment Banking Analyst”, location: “London, UK”, field: “Finance”, bio: “Interned at a startup in Brooklyn while at Kolping. Ended up in IB. NYC shaped who I am professionally and personally.”, connected: true, online: false },
{ id: 4, name: “Jonas Weber”, avatar: “JW”, color: “#C87B7B”, years: { from: 2021, to: 2022 }, purpose: “Language School”, company: “Siemens AG”, role: “Product Manager”, location: “Munich, Germany”, field: “Technology”, bio: “Went to NYC to improve my English, left with lifelong friends and a clearer sense of direction. Working in product now.”, connected: false, online: false },
{ id: 5, name: “Sophie Klein”, avatar: “SK”, color: “#7BC8C8”, years: { from: 2023, to: 2024 }, purpose: “Internship”, company: “McKinsey & Company”, role: “Business Analyst”, location: “Berlin, Germany”, field: “Consulting”, bio: “Interned in finance in Midtown while living at Kolping. Now at McKinsey Berlin. Happy to connect with fellow alumni!”, connected: false, online: true },
{ id: 6, name: “Felix Braun”, avatar: “FB”, color: “#C8A07B”, years: { from: 2020, to: 2021 }, purpose: “University Exchange”, company: “Deutsche Bank”, role: “VP M&A Advisory”, location: “New York, USA”, field: “Finance”, bio: “Loved NYC so much I never really left. Now in M&A. The Kolping years were foundational – happy to mentor younger alumni.”, connected: true, online: true },
{ id: 7, name: “Mia Schaefer”, avatar: “MS”, color: “#B8C87B”, years: { from: 2024, to: 2025 }, purpose: “Internship”, company: “Freelance”, role: “UX/UI Designer”, location: “Hamburg, Germany”, field: “Design”, bio: “Just returned from NYC. Did my design internship at a creative agency in SoHo while living at Kolping. Looking to connect!”, connected: false, online: true }
];

const ME = {
id: 0, name: “Tobi Fischer”, avatar: “TF”, color: “#C8A96E”,
years: { from: 2023, to: 2024 }, purpose: “Internship”,
company: “PlayTheHype GmbH”, role: “Financial Controller”,
location: “Cologne, Germany”, field: “Finance”,
bio: “Did my NYC internship year while living at Kolping House. Grateful for the community. Always open to connect with fellow Kolping alumni.”
};

const DEFAULT_MESSAGES = {
1: [
{ from: 1, text: “Hey Tobi! Great to be on this platform”, time: “10:32” },
{ from: 0, text: “Luisa! Same, finally a place to stay connected. How’s Frankfurt?”, time: “10:34” },
{ from: 1, text: “Good! Busy with Deloitte but loving it. We should catch up properly soon.”, time: “10:35” },
{ from: 0, text: “Definitely. Are you coming to the Cologne meetup next month?”, time: “10:36” },
{ from: 1, text: “Yes! Already registered”, time: “10:37” }
],
3: [
{ from: 3, text: “Tobi, just moved to London! Big change from NYC haha”, time: “Yesterday” },
{ from: 0, text: “Whoa! Congrats Anna. IB life treating you well?”, time: “Yesterday” },
{ from: 3, text: “Intense but exciting. Miss the Kolping rooftop evenings though!”, time: “Yesterday” }
],
6: [
{ from: 6, text: “Hey! Felix here – if you’re ever thinking about M&A or NYC, reach out.”, time: “Mon” },
{ from: 0, text: “Thanks Felix, I’m actually very interested in M&A. Would love to chat sometime!”, time: “Mon” }
]
};

const MOCK_FEED = [
{ id: 1, userId: 2, text: “Max started a new role as Audit Junior at KPMG”, time: “2 hours ago”, icon: “💼” },
{ id: 2, userId: 3, text: “Anna moved to London”, time: “Yesterday”, icon: “📍” },
{ id: 3, userId: 5, text: “Sophie joined McKinsey & Company as Business Analyst”, time: “3 days ago”, icon: “💼” },
{ id: 4, userId: 7, text: “Mia Schaefer just joined the Kolping Network”, time: “4 days ago”, icon: “🎉” },
{ id: 5, userId: 6, text: “Felix shared: Happy to mentor anyone exploring M&A in NYC. DM me!”, time: “1 week ago”, icon: “✍️” },
{ id: 6, userId: 4, text: “Jonas became Product Manager at Siemens AG”, time: “2 weeks ago”, icon: “💼” }
];

const DEFAULT_EVENTS = [
{ id: 1, title: “Cologne Alumni Meetup”, date: “May 10, 2025”, location: “Cologne, Germany”, attending: 14, emoji: “🍻”, desc: “Casual get-together for Kolping NYC alumni living in or around Cologne. Bar TBD.”, rsvp: false },
{ id: 2, title: “NYC Reunion 2025”, date: “June 21, 2025”, location: “New York, USA”, attending: 31, emoji: “🗽”, desc: “Annual reunion at the Kolping House NYC. Open to all alumni from all years.”, rsvp: false },
{ id: 3, title: “Virtual Coffee Chat”, date: “Apr 28, 2025”, location: “Online (Zoom)”, attending: 8, emoji: “☕”, desc: “Monthly casual online call. Share what you’re up to, ask questions, reconnect.”, rsvp: false },
{ id: 4, title: “Frankfurt Finance Lunch”, date: “May 22, 2025”, location: “Frankfurt, Germany”, attending: 6, emoji: “📊”, desc: “For Kolping alumni working in finance in Frankfurt. Networking lunch.”, rsvp: false }
];

const DEFAULT_OPPORTUNITIES = [
{ id: 1, userId: 2, type: “looking”, title: “Looking for M&A internship in Frankfurt or NYC”, field: “Finance”, time: “1 day ago” },
{ id: 2, userId: 6, type: “hiring”, title: “Deutsche Bank M&A NYC – looking for German-speaking analysts”, field: “Finance”, time: “3 days ago” },
{ id: 3, userId: 5, type: “offer”, title: “Happy to refer McKinsey Berlin applications – DM me”, field: “Consulting”, time: “5 days ago” },
{ id: 4, userId: 7, type: “looking”, title: “Seeking UX freelance projects – portfolio available”, field: “Design”, time: “1 week ago” },
{ id: 5, userId: 4, type: “hiring”, title: “Siemens AG: PM Werkstudent in Munich”, field: “Technology”, time: “1 week ago” }
];

// ═══════════════════════════════════════════════════════════
// STATE (localStorage-backed)
// ═══════════════════════════════════════════════════════════

function loadState() {
try {
const s = localStorage.getItem(“kolping_state”);
if (s) return JSON.parse(s);
} catch (e) {}
return null;
}

function saveState() {
try {
localStorage.setItem(“kolping_state”, JSON.stringify(STATE));
} catch (e) {}
}

const saved = loadState();

const STATE = saved || {
connections: MOCK_USERS.filter(u => u.connected).map(u => u.id),
messages: JSON.parse(JSON.stringify(DEFAULT_MESSAGES)),
events: JSON.parse(JSON.stringify(DEFAULT_EVENTS)),
opportunities: JSON.parse(JSON.stringify(DEFAULT_OPPORTUNITIES)),
yearFilter: null,
oppFilter: “All”,
oppFormType: “looking”,
showOppForm: false,
activeTab: “network”,
activeChatId: null,
activeProfileId: null
};

// ═══════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════

function getUserById(id) {
if (id === 0) return ME;
return MOCK_USERS.find(u => u.id === id);
}

function overlapYears(a, b) {
return a.from <= b.to && b.from <= a.to;
}

function isConnected(id) {
return STATE.connections.includes(id);
}

function toggleConnection(id) {
if (isConnected(id)) {
STATE.connections = STATE.connections.filter(c => c !== id);
} else {
STATE.connections.push(id);
}
saveState();
}

function makeAvatar(user, size) {
const wrap = document.createElement(“div”);
wrap.className = “avatar”;
wrap.style.cssText = `width:${size}px;height:${size}px;background:${user.color};font-size:${Math.floor(size*0.35)}px;`;
wrap.textContent = user.avatar;
return wrap;
}

function makeAvatarWithDot(user, size, darkDot) {
const wrap = document.createElement(“div”);
wrap.style.position = “relative”;
wrap.style.flexShrink = “0”;
wrap.appendChild(makeAvatar(user, size));
if (user.online) {
const dot = document.createElement(“div”);
dot.className = “online-dot” + (darkDot ? “ online-dot-dark” : “”);
dot.style.cssText = `width:${Math.max(10,Math.floor(size*0.22))}px;height:${Math.max(10,Math.floor(size*0.22))}px;`;
wrap.appendChild(dot);
}
return wrap;
}

function el(tag, cls, html) {
const e = document.createElement(tag);
if (cls) e.className = cls;
if (html !== undefined) e.innerHTML = html;
return e;
}

function div(cls, html) { return el(“div”, cls, html); }

// ═══════════════════════════════════════════════════════════
// SCREEN ROUTING
// ═══════════════════════════════════════════════════════════

function showScreen(id) {
document.querySelectorAll(”.screen”).forEach(s => s.classList.remove(“active”));
document.getElementById(id).classList.add(“active”);
}

function enterApp() {
showScreen(“screen-app”);
renderTopbarAvatar();
switchTab(STATE.activeTab);
}

function renderTopbarAvatar() {
const el = document.getElementById(“topbar-avatar”);
el.style.background = ME.color;
el.textContent = ME.avatar;
}

// ═══════════════════════════════════════════════════════════
// TAB SWITCHING
// ═══════════════════════════════════════════════════════════

function switchTab(tabId, btnEl) {
STATE.activeTab = tabId;
saveState();

document.querySelectorAll(”.nav-btn”).forEach(b => b.classList.remove(“active”));
const btn = btnEl || document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
if (btn) btn.classList.add(“active”);

const content = document.getElementById(“tab-content”);
content.innerHTML = “”;

if (tabId === “network”)       renderNetwork(content);
else if (tabId === “messages”) renderMessages(content);
else if (tabId === “feed”)     renderFeed(content);
else if (tabId === “events”)   renderEvents(content);
else if (tabId === “opportunities”) renderOpportunities(content);
}

// ═══════════════════════════════════════════════════════════
// NETWORK TAB
// ═══════════════════════════════════════════════════════════

function renderNetwork(container) {
const pad = div(“tab-pad”);

// My card
const myCard = div(“my-card”);
const row = div(“my-card-row”);
const avWrap = makeAvatarWithDot(ME, 56, false);
row.appendChild(avWrap);
const info = div(””);
info.innerHTML = `<div class="my-card-name">${ME.name}</div> <div class="my-card-role">${ME.role} &middot; ${ME.company}</div> <div class="my-card-loc">${ME.location}</div>`;
const badge = div(“kolping-badge”);
badge.innerHTML = `<span>🏠</span> Kolping ${ME.years.from}&ndash;${ME.years.to}`;
info.appendChild(badge);
row.appendChild(info);
myCard.appendChild(row);

const stats = div(“my-card-stats”);
const s1 = div(””); s1.innerHTML = `<div class="my-stat-val">${STATE.connections.length}</div><div class="my-stat-lbl">connections</div>`;
const samePeriodCount = MOCK_USERS.filter(u => overlapYears(u.years, ME.years)).length;
const s2 = div(””); s2.innerHTML = `<div class="my-stat-val">${samePeriodCount}</div><div class="my-stat-lbl">cohort peers</div>`;
stats.appendChild(s1); stats.appendChild(s2);
myCard.appendChild(stats);
pad.appendChild(myCard);

// Cohort box
const cohortUsers = MOCK_USERS.filter(u => overlapYears(u.years, ME.years));
const cohortBox = div(“cohort-box”);
cohortBox.innerHTML = `<div class="cohort-header"><span>✨</span><span class="cohort-label">Your Kolping Cohort</span></div> <div class="cohort-sub">${cohortUsers.length} people were at Kolping at the same time as you (${ME.years.from}&ndash;${ME.years.to})</div>`;
const avatarsRow = div(“cohort-avatars”);
cohortUsers.forEach(u => {
const item = div(“cohort-avatar-item”);
item.appendChild(makeAvatarWithDot(u, 46, true));
const name = div(“cohort-avatar-name”); name.textContent = u.name.split(” “)[0];
item.appendChild(name);
item.addEventListener(“click”, () => openProfile(u.id));
avatarsRow.appendChild(item);
});
cohortBox.appendChild(avatarsRow);
pad.appendChild(cohortBox);

// Year filter
const yf = div(“year-filter”);
yf.appendChild(div(“section-title”, “Filter by year”));
const chips = div(“year-chips”);

const allChip = el(“button”, “year-chip all” + (!STATE.yearFilter ? “ active” : “”), “All”);
allChip.addEventListener(“click”, () => { STATE.yearFilter = null; saveState(); switchTab(“network”); });
chips.appendChild(allChip);

[2020,2021,2022,2023,2024,2025].forEach(y => {
const chip = el(“button”, “year-chip” + (STATE.yearFilter === y ? “ active” : “”), String(y));
chip.addEventListener(“click”, () => {
STATE.yearFilter = STATE.yearFilter === y ? null : y;
saveState(); switchTab(“network”);
});
chips.appendChild(chip);
});
yf.appendChild(chips);
pad.appendChild(yf);

// Suggested sections (only when no year filter)
if (!STATE.yearFilter) {
const sameField = MOCK_USERS.filter(u => u.field === ME.field);
appendSuggestedSection(pad, “Same field as you”, “Finance professionals”, sameField);

```
const sameCity = MOCK_USERS.filter(u => u.location === ME.location);
appendSuggestedSection(pad, "In your city", ME.location, sameCity);
```

}

// All / filtered members
const filtered = STATE.yearFilter
? MOCK_USERS.filter(u => u.years.from <= STATE.yearFilter && u.years.to >= STATE.yearFilter)
: MOCK_USERS;

const listTitle = div(“section-title”);
listTitle.innerHTML = (STATE.yearFilter ? `Class of ${STATE.yearFilter}` : “All Members”) +
` <span style="color:#C8A96E">${filtered.length}</span>`;
pad.appendChild(listTitle);

const list = div(“member-list”);
filtered.forEach(u => list.appendChild(makeMemberCard(u)));
pad.appendChild(list);

container.appendChild(pad);
}

function appendSuggestedSection(container, title, subtitle, users) {
if (!users.length) return;
const sec = div(””);
sec.style.marginBottom = “24px”;
const hdr = div(“suggested-section-header”);
hdr.innerHTML = `<div class="suggested-section-title">${title}</div><div class="suggested-section-sub">${subtitle}</div>`;
sec.appendChild(hdr);
const scroll = div(“suggested-scroll”);
users.forEach(u => {
const card = div(“suggested-card”);
card.appendChild(makeAvatar(u, 44));
const name = div(“suggested-card-name”); name.textContent = u.name;
const role = div(“suggested-card-role”); role.textContent = u.role;
const tag = div(“tag-year”); tag.textContent = `${u.years.from}–${u.years.to}`;
card.appendChild(name); card.appendChild(role); card.appendChild(tag);
card.addEventListener(“click”, () => openProfile(u.id));
scroll.appendChild(card);
});
sec.appendChild(scroll);
container.appendChild(sec);
}

function makeMemberCard(user) {
const card = div(“member-card”);

const avWrap = makeAvatarWithDot(user, 48, false);
avWrap.style.cursor = “pointer”;
avWrap.addEventListener(“click”, () => openProfile(user.id));
card.appendChild(avWrap);

const info = div(“member-info”);
info.innerHTML = `<div class="member-name">${user.name}</div><div class="member-role">${user.role}</div>`;
const tags = div(“member-tags”);
const ty = div(“tag-year”); ty.textContent = `${user.years.from}–${user.years.to}`;
const tl = div(“tag-loc”); tl.textContent = “📍 “ + user.location.split(”,”)[0];
tags.appendChild(ty); tags.appendChild(tl);
info.appendChild(tags);
info.addEventListener(“click”, () => openProfile(user.id));
card.appendChild(info);

const actions = div(“member-actions”);
if (isConnected(user.id)) {
const msgBtn = el(“button”, “btn-msg”, “💬”);
msgBtn.title = “Message”;
msgBtn.addEventListener(“click”, () => openChat(user.id));
actions.appendChild(msgBtn);
}
const connBtn = el(“button”, isConnected(user.id) ? “btn-connect connected” : “btn-connect”,
isConnected(user.id) ? “Connected” : “+ Connect”);
connBtn.addEventListener(“click”, () => {
toggleConnection(user.id);
switchTab(“network”);
});
actions.appendChild(connBtn);
card.appendChild(actions);
return card;
}

// ═══════════════════════════════════════════════════════════
// PROFILE OVERLAY
// ═══════════════════════════════════════════════════════════

function openProfile(userId) {
STATE.activeProfileId = userId;
const user = getUserById(userId);
const content = document.getElementById(“profile-content”);
content.innerHTML = “”;

const cover = div(“profile-cover”);
const avWrap = div(“profile-avatar-wrap”);
avWrap.appendChild(makeAvatar(user, 64));
cover.appendChild(avWrap);
content.appendChild(cover);

const body = div(“profile-body”);

const topRow = div(“profile-top-row”);
const nameBlock = div(””);
nameBlock.innerHTML = `<div class="profile-name">${user.name}</div> <div class="profile-role">${user.role} at ${user.company}</div> <div class="profile-loc">📍 ${user.location}</div>`;
topRow.appendChild(nameBlock);
if (user.online) {
const ob = div(“profile-online-badge”, “● Online”);
topRow.appendChild(ob);
}
body.appendChild(topRow);

const kb = div(“profile-kolping-badge”);
kb.innerHTML = `<span class="pkb-icon">🏠</span><div><div class="pkb-label">Kolping House ${user.years.from}–${user.years.to}</div><div class="pkb-sub">${user.purpose} · New York City</div></div>`;
body.appendChild(kb);

body.appendChild(div(“profile-about-title”, “About”));
body.appendChild(div(“profile-bio”, user.bio));

const tags = div(“profile-tags”);
[user.field, user.purpose, user.location.split(”,”)[0]].forEach(t => {
tags.appendChild(div(“profile-tag”, t));
});
body.appendChild(tags);

const actions = div(“profile-actions”);
const connBtn = el(“button”, isConnected(user.id) ? “btn-connect-lg connected” : “btn-connect-lg”,
isConnected(user.id) ? “✓ Connected” : “+ Connect”);
connBtn.addEventListener(“click”, () => {
toggleConnection(user.id);
connBtn.className = isConnected(user.id) ? “btn-connect-lg connected” : “btn-connect-lg”;
connBtn.textContent = isConnected(user.id) ? “✓ Connected” : “+ Connect”;
msgBtn.style.display = isConnected(user.id) ? “flex” : “none”;
});
actions.appendChild(connBtn);

const msgBtn = el(“button”, “btn-msg-lg”, “💬 Message”);
msgBtn.style.display = isConnected(user.id) ? “flex” : “none”;
msgBtn.addEventListener(“click”, () => { closeProfile(); openChat(user.id); });
actions.appendChild(msgBtn);
body.appendChild(actions);

if (overlapYears(user.years, ME.years)) {
const note = div(“profile-overlap-note”);
note.textContent = `✨ You and ${user.name.split(" ")[0]} overlapped at Kolping House in NYC!`;
body.appendChild(note);
}

content.appendChild(body);
showScreen(“screen-profile”);
}

function closeProfile() {
STATE.activeProfileId = null;
showScreen(“screen-app”);
// re-render current tab to reflect any connection changes
switchTab(STATE.activeTab);
}

// ═══════════════════════════════════════════════════════════
// MESSAGES TAB
// ═══════════════════════════════════════════════════════════

function renderMessages(container) {
const pad = div(“tab-pad”);
pad.innerHTML = `<div class="page-title">Messages</div> <div class="page-sub">${STATE.connections.length} connections</div>`;

const chatIds = Object.keys(STATE.messages).map(Number);
if (chatIds.length) {
pad.appendChild(div(“section-title”, “Recent”));
const list = div(“chat-list”);
chatIds.forEach(id => {
const user = getUserById(id);
const msgs = STATE.messages[id];
const last = msgs[msgs.length - 1];
list.appendChild(makeChatRow(user, last.from === 0 ? “You: “ + last.text : last.text, last.time));
});
pad.appendChild(list);
}

pad.appendChild(div(“section-title”, “Your Connections”));
const connList = div(“chat-list”);
const connUsers = MOCK_USERS.filter(u => isConnected(u.id));

if (!connUsers.length) {
connList.appendChild(div(“empty-state”, “Connect with alumni to start chatting”));
} else {
connUsers.forEach(u => {
const row = makeChatRow(u, u.location, null, true);
connList.appendChild(row);
});
}
pad.appendChild(connList);
container.appendChild(pad);
}

function makeChatRow(user, preview, time, isConn) {
const row = div(“chat-row”);
row.appendChild(makeAvatarWithDot(user, 46, false));

const info = div(“chat-row-info”);
info.innerHTML = `<div class="chat-row-name">${user.name}</div> <div class="chat-row-last">${preview}</div>`;
row.appendChild(info);

if (time) {
const t = div(“chat-row-time”, time);
row.appendChild(t);
} else if (isConn) {
row.appendChild(div(“tag-msg”, “Message”));
}

row.addEventListener(“click”, () => openChat(user.id));
return row;
}

// ═══════════════════════════════════════════════════════════
// CHAT VIEW
// ═══════════════════════════════════════════════════════════

function openChat(userId) {
STATE.activeChatId = userId;
const user = getUserById(userId);

// Build topbar
const tb = document.getElementById(“chat-topbar”);
tb.innerHTML = “”;
const backBtn = el(“button”, “back-btn”, “←”);
backBtn.addEventListener(“click”, closeChat);
tb.appendChild(backBtn);
const avWrap = makeAvatarWithDot(user, 38, false);
avWrap.style.marginRight = “12px”;
tb.appendChild(avWrap);
const nameBlock = div(””);
nameBlock.innerHTML = `<div style="font-weight:700;font-size:15px">${user.name}</div> <div style="font-size:11px;color:${user.online ? "#4CAF50" : "#AAA"}">${user.online ? "● Online" : "Offline"}</div>`;
tb.appendChild(nameBlock);

renderChatMessages(userId);

const input = document.getElementById(“chat-input”);
input.value = “”;
updateSendBtn();

// Show/hide app screen, show chat screen
document.getElementById(“screen-app”).style.display = “none”;
showScreen(“screen-chat”);
scrollChatToBottom();
}

function renderChatMessages(userId) {
const msgs = STATE.messages[userId] || [];
const container = document.getElementById(“chat-messages”);
container.innerHTML = “”;

const note = div(“chat-context-note”, “🏠 You both lived at Kolping House NYC”);
container.appendChild(note);

msgs.forEach(msg => {
const wrap = div(“bubble-wrap “ + (msg.from === 0 ? “me” : “them”));
const bubble = div(“bubble “ + (msg.from === 0 ? “me” : “them”));
bubble.innerHTML = `${msg.text}<div class="bubble-time">${msg.time}</div>`;
wrap.appendChild(bubble);
container.appendChild(wrap);
});
}

function closeChat() {
STATE.activeChatId = null;
document.getElementById(“screen-chat”).classList.remove(“active”);
document.getElementById(“screen-app”).style.display = “”;
document.getElementById(“screen-app”).style.display = “flex”;
switchTab(“messages”);
}

function scrollChatToBottom() {
const c = document.getElementById(“chat-messages”);
setTimeout(() => { c.scrollTop = c.scrollHeight; }, 50);
}

function chatKeydown(e) {
if (e.key === “Enter”) sendMessage();
updateSendBtn();
}

function updateSendBtn() {
const input = document.getElementById(“chat-input”);
const btn = document.getElementById(“chat-send-btn”);
if (input.value.trim()) {
btn.classList.add(“ready”);
} else {
btn.classList.remove(“ready”);
}
}

document.addEventListener(“DOMContentLoaded”, () => {
const inp = document.getElementById(“chat-input”);
if (inp) inp.addEventListener(“input”, updateSendBtn);
});

function sendMessage() {
const input = document.getElementById(“chat-input”);
const text = input.value.trim();
if (!text || STATE.activeChatId === null) return;

const id = STATE.activeChatId;
if (!STATE.messages[id]) STATE.messages[id] = [];

const now = new Date();
const time = now.getHours().toString().padStart(2,“0”) + “:” + now.getMinutes().toString().padStart(2,“0”);
STATE.messages[id].push({ from: 0, text, time });
saveState();

input.value = “”;
updateSendBtn();
renderChatMessages(id);
scrollChatToBottom();
}

// ═══════════════════════════════════════════════════════════
// FEED TAB
// ═══════════════════════════════════════════════════════════

function renderFeed(container) {
const pad = div(“tab-pad”);
pad.innerHTML = `<div class="page-title">Activity</div> <div class="page-sub">Updates from your network</div>`;

const list = div(“feed-list”);
MOCK_FEED.forEach(item => {
const user = getUserById(item.userId);
const card = div(“feed-card”);

```
const avWrap = div("feed-avatar-wrap");
avWrap.appendChild(makeAvatar(user, 42));
const iconEl = div("feed-icon", item.icon);
avWrap.appendChild(iconEl);
card.appendChild(avWrap);

const body = div("");
// Bold name, then rest of text
const nameStr = user.name;
const rest = item.text.startsWith(nameStr) ? item.text.slice(nameStr.length) : " " + item.text;
body.innerHTML = `<div class="feed-text"><strong>${nameStr}</strong>${rest}</div>
  <div class="feed-time">${item.time}</div>`;
card.appendChild(body);
list.appendChild(card);
```

});
pad.appendChild(list);

const cta = div(“feed-cta”);
cta.innerHTML = `<div class="feed-cta-icon">📣</div> <div class="feed-cta-title">Share an update</div> <div class="feed-cta-sub">Let your network know what's new</div>`;
const postBtn = el(“button”, “btn-post-update”, “Post update”);
postBtn.addEventListener(“click”, () => alert(“Post update coming soon!”));
cta.appendChild(postBtn);
pad.appendChild(cta);
container.appendChild(pad);
}

// ═══════════════════════════════════════════════════════════
// EVENTS TAB
// ═══════════════════════════════════════════════════════════

function renderEvents(container) {
const pad = div(“tab-pad”);
pad.innerHTML = `<div class="page-title">Events</div> <div class="page-sub">Alumni meetups &amp; reunions</div>`;

const list = div(“event-list”);
STATE.events.forEach(event => {
const card = div(“event-card”);
card.innerHTML = ` <div class="event-header"> <div class="event-emoji">${event.emoji}</div> <div> <div class="event-title">${event.title}</div> <div class="event-meta">${event.date} &middot; ${event.location}</div> </div> </div> <div class="event-body"> <div class="event-desc">${event.desc}</div> <div class="event-footer"> <div class="event-attending" id="event-att-${event.id}">👥 ${event.attending + (event.rsvp ? 1 : 0)} attending</div> <button class="btn-rsvp ${event.rsvp ? "going" : ""}" id="event-btn-${event.id}">${event.rsvp ? "✓ Going" : "RSVP"}</button> </div> </div>`;
list.appendChild(card);
});
pad.appendChild(list);
container.appendChild(pad);

// Bind RSVP buttons after DOM insertion
STATE.events.forEach(event => {
const btn = document.getElementById(“event-btn-” + event.id);
if (btn) {
btn.addEventListener(“click”, () => {
const ev = STATE.events.find(e => e.id === event.id);
ev.rsvp = !ev.rsvp;
saveState();
document.getElementById(“event-att-” + event.id).textContent =
“👥 “ + (ev.attending + (ev.rsvp ? 1 : 0)) + “ attending”;
btn.className = “btn-rsvp” + (ev.rsvp ? “ going” : “”);
btn.textContent = ev.rsvp ? “✓ Going” : “RSVP”;
});
}
});
}

// ═══════════════════════════════════════════════════════════
// OPPORTUNITIES TAB
// ═══════════════════════════════════════════════════════════

const TYPE_LABELS = { looking: “Looking”, hiring: “Hiring”, offer: “Offering” };

function renderOpportunities(container) {
const pad = div(“tab-pad”);

// Header row
const topRow = div(“opp-toprow”);
const titleBlock = div(””);
titleBlock.innerHTML = `<div class="page-title">Opportunities</div> <div class="page-sub" style="margin-bottom:0">Jobs, referrals &amp; requests</div>`;
topRow.appendChild(titleBlock);

const postBtn = el(“button”, “btn-post-opp”, “+ Post”);
postBtn.addEventListener(“click”, () => {
STATE.showOppForm = !STATE.showOppForm;
saveState();
renderOpportunities(container);
});
topRow.appendChild(postBtn);
pad.appendChild(topRow);

// New opp form
if (STATE.showOppForm) {
const form = div(“opp-form”);
form.appendChild(div(“opp-form-title”, “New Post”));

```
const typeRow = div("opp-type-row");
["looking","hiring","offer"].forEach(t => {
  const btn = el("button",
    "btn-type" + (STATE.oppFormType === t ? ` active-${t}` : ""),
    TYPE_LABELS[t]);
  btn.addEventListener("click", () => {
    STATE.oppFormType = t;
    saveState();
    renderOpportunities(container);
  });
  typeRow.appendChild(btn);
});
form.appendChild(typeRow);

const titleInput = el("input", "opp-input");
titleInput.placeholder = "Describe your post...";
titleInput.id = "opp-title-input";
form.appendChild(titleInput);

const fieldInput = el("input", "opp-input");
fieldInput.placeholder = "Field (Finance, Consulting, Design...)";
fieldInput.id = "opp-field-input";
form.appendChild(fieldInput);

const pubBtn = el("button", "btn-publish", "Publish");
pubBtn.addEventListener("click", () => {
  const t = document.getElementById("opp-title-input").value.trim();
  const f = document.getElementById("opp-field-input").value.trim();
  if (!t || !f) { alert("Please fill in both fields."); return; }
  STATE.opportunities.unshift({ id: Date.now(), userId: 0, type: STATE.oppFormType, title: t, field: f, time: "Just now" });
  STATE.showOppForm = false;
  saveState();
  renderOpportunities(container);
});
form.appendChild(pubBtn);
pad.appendChild(form);
```

}

// Field filters
const filters = div(“opp-filters”);
[“All”,“Finance”,“Consulting”,“Technology”,“Design”].forEach(f => {
const chip = el(“button”, “opp-filter-chip” + (STATE.oppFilter === f ? “ active” : “”), f);
chip.addEventListener(“click”, () => {
STATE.oppFilter = f;
saveState();
renderOpportunities(container);
});
filters.appendChild(chip);
});
pad.appendChild(filters);

// Opp list
const filtered = STATE.oppFilter === “All”
? STATE.opportunities
: STATE.opportunities.filter(o => o.field === STATE.oppFilter);

const list = div(“opp-list”);
filtered.forEach(opp => {
const user = getUserById(opp.userId);
const card = div(“opp-card”);

```
const topRow2 = div("opp-card-top");
const avWrap = document.createElement("div");
avWrap.style.cursor = "pointer";
avWrap.appendChild(makeAvatar(user, 38));
avWrap.addEventListener("click", () => openProfile(user.id));
topRow2.appendChild(avWrap);

const userInfo = div("opp-card-user");
userInfo.innerHTML = `<div class="opp-card-name">${user.name}</div>
  <div class="opp-card-role">${user.role}</div>`;
topRow2.appendChild(userInfo);

const badge = div("badge-" + opp.type, TYPE_LABELS[opp.type] || opp.type);
topRow2.appendChild(badge);
card.appendChild(topRow2);

card.appendChild(div("opp-card-title", opp.title));

const footer = div("opp-card-footer");
footer.appendChild(div("tag-field-gold", opp.field));
footer.appendChild(div("opp-card-time", opp.time));
card.appendChild(footer);

list.appendChild(card);
```

});

if (!filtered.length) list.appendChild(div(“empty-state”, “No posts in this category yet.”));
pad.appendChild(list);

container.innerHTML = “”;
container.appendChild(pad);
}

// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════

window.addEventListener(“DOMContentLoaded”, () => {
// Wire chat input live update
const chatInput = document.getElementById(“chat-input”);
if (chatInput) chatInput.addEventListener(“input”, updateSendBtn);

// Start on landing
showScreen(“screen-landing”);
});
