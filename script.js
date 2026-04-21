‘use strict’;

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════

var MOCK_USERS = [
{ id: 1, name: “Luisa Hartmann”,  avatar: “LH”, color: “#C8A96E”, years: { from: 2022, to: 2023 }, purpose: “Internship”,         company: “Deloitte New York”,   role: “Associate Consultant”,          location: “Frankfurt, Germany”, field: “Consulting”, bio: “Former Kolping resident, now building a career in management consulting. Always happy to chat about NYC life and career paths in consulting.”, online: true  },
{ id: 2, name: “Max Becker”,      avatar: “MB”, color: “#7B9E87”, years: { from: 2023, to: 2024 }, purpose: “University Exchange”, company: “KPMG”,                role: “Audit Junior”,                  location: “Cologne, Germany”,   field: “Finance”,    bio: “Studied at NYU Stern during my time at Kolping. Now doing audit at KPMG Cologne. Big fan of the Kolping community.”, online: true  },
{ id: 3, name: “Anna Mueller”,    avatar: “AM”, color: “#9B7EC8”, years: { from: 2022, to: 2023 }, purpose: “Internship”,         company: “Goldman Sachs”,       role: “Investment Banking Analyst”,    location: “London, UK”,         field: “Finance”,    bio: “Interned at a startup in Brooklyn while at Kolping. Ended up in IB. NYC shaped who I am professionally and personally.”, online: false },
{ id: 4, name: “Jonas Weber”,     avatar: “JW”, color: “#C87B7B”, years: { from: 2021, to: 2022 }, purpose: “Language School”,    company: “Siemens AG”,          role: “Product Manager”,               location: “Munich, Germany”,    field: “Technology”, bio: “Went to NYC to improve my English, left with lifelong friends and a clearer sense of direction. Working in product now.”, online: false },
{ id: 5, name: “Sophie Klein”,    avatar: “SK”, color: “#7BC8C8”, years: { from: 2023, to: 2024 }, purpose: “Internship”,         company: “McKinsey & Company”,  role: “Business Analyst”,              location: “Berlin, Germany”,    field: “Consulting”, bio: “Interned in finance in Midtown while living at Kolping. Now at McKinsey Berlin. Happy to connect with fellow alumni!”, online: true  },
{ id: 6, name: “Felix Braun”,     avatar: “FB”, color: “#C8A07B”, years: { from: 2020, to: 2021 }, purpose: “University Exchange”,company: “Deutsche Bank”,       role: “VP M&A Advisory”,               location: “New York, USA”,      field: “Finance”,    bio: “Loved NYC so much I never really left. Now in M&A. The Kolping years were foundational – happy to mentor younger alumni.”, online: true  },
{ id: 7, name: “Mia Schaefer”,    avatar: “MS”, color: “#B8C87B”, years: { from: 2024, to: 2025 }, purpose: “Internship”,         company: “Freelance”,           role: “UX/UI Designer”,                location: “Hamburg, Germany”,   field: “Design”,     bio: “Just returned from NYC. Did my design internship at a creative agency in SoHo while living at Kolping. Looking to connect!”, online: true  }
];

var ME = {
id: 0, name: “Tobi Fischer”, avatar: “TF”, color: “#C8A96E”,
years: { from: 2023, to: 2024 }, purpose: “Internship”,
company: “PlayTheHype GmbH”, role: “Financial Controller”,
location: “Cologne, Germany”, field: “Finance”,
bio: “Did my NYC internship year while living at Kolping House. Grateful for the community. Always open to connect with fellow Kolping alumni.”
};

var DEFAULT_MESSAGES = {
1: [
{ from: 1, text: “Hey Tobi! Great to be on this platform!”, time: “10:32” },
{ from: 0, text: “Luisa! Same, finally a place to stay connected. How’s Frankfurt?”, time: “10:34” },
{ from: 1, text: “Good! Busy with Deloitte but loving it. We should catch up properly soon.”, time: “10:35” },
{ from: 0, text: “Definitely. Are you coming to the Cologne meetup next month?”, time: “10:36” },
{ from: 1, text: “Yes! Already registered :)”, time: “10:37” }
],
3: [
{ from: 3, text: “Tobi, just moved to London! Big change from NYC haha”, time: “Yesterday” },
{ from: 0, text: “Whoa! Congrats Anna. IB life treating you well?”, time: “Yesterday” },
{ from: 3, text: “Intense but exciting. Miss the Kolping rooftop evenings though!”, time: “Yesterday” }
],
6: [
{ from: 6, text: “Hey! Felix here – if you’re ever thinking about M&A or NYC, reach out.”, time: “Mon” },
{ from: 0, text: “Thanks Felix, I’m very interested in M&A. Would love to chat sometime!”, time: “Mon” }
]
};

var MOCK_FEED = [
{ id: 1, userId: 2, text: “Max started a new role as Audit Junior at KPMG”,          time: “2 hours ago”, icon: “💼” },
{ id: 2, userId: 3, text: “Anna moved to London”,                                     time: “Yesterday”,   icon: “📍” },
{ id: 3, userId: 5, text: “Sophie joined McKinsey & Company as Business Analyst”,     time: “3 days ago”,  icon: “💼” },
{ id: 4, userId: 7, text: “Mia Schaefer just joined the Kolping Network”,             time: “4 days ago”,  icon: “🎉” },
{ id: 5, userId: 6, text: “Felix: Happy to mentor anyone exploring M&A in NYC. DM!”, time: “1 week ago”,  icon: “✍️” },
{ id: 6, userId: 4, text: “Jonas became Product Manager at Siemens AG”,               time: “2 weeks ago”, icon: “💼” }
];

var DEFAULT_EVENTS = [
{ id: 1, title: “Cologne Alumni Meetup”,   date: “May 10, 2025”,  location: “Cologne, Germany”,  attending: 14, emoji: “🍻”, desc: “Casual get-together for Kolping NYC alumni living in or around Cologne. Bar TBD.”, rsvp: false },
{ id: 2, title: “NYC Reunion 2025”,        date: “June 21, 2025”, location: “New York, USA”,     attending: 31, emoji: “🗽”, desc: “Annual reunion at the Kolping House NYC. Open to all alumni from all years.”, rsvp: false },
{ id: 3, title: “Virtual Coffee Chat”,     date: “Apr 28, 2025”,  location: “Online (Zoom)”,     attending: 8,  emoji: “☕”, desc: “Monthly casual online call. Share what you’re up to, ask questions, reconnect.”, rsvp: false },
{ id: 4, title: “Frankfurt Finance Lunch”, date: “May 22, 2025”,  location: “Frankfurt, Germany”,attending: 6,  emoji: “📊”, desc: “For Kolping alumni working in finance in Frankfurt. Networking lunch.”, rsvp: false }
];

var DEFAULT_OPPORTUNITIES = [
{ id: 1, userId: 2, type: “looking”, title: “Looking for M&A internship in Frankfurt or NYC”,                   field: “Finance”,    time: “1 day ago”  },
{ id: 2, userId: 6, type: “hiring”,  title: “Deutsche Bank M&A NYC – looking for German-speaking analysts”,    field: “Finance”,    time: “3 days ago” },
{ id: 3, userId: 5, type: “offer”,   title: “Happy to refer McKinsey Berlin applications – DM me”,             field: “Consulting”, time: “5 days ago” },
{ id: 4, userId: 7, type: “looking”, title: “Seeking UX freelance projects – portfolio available”,             field: “Design”,     time: “1 week ago” },
{ id: 5, userId: 4, type: “hiring”,  title: “Siemens AG: PM Werkstudent in Munich”,                            field: “Technology”, time: “1 week ago” }
];

var TYPE_LABELS = { looking: “Looking”, hiring: “Hiring”, offer: “Offering” };

// ═══════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════

function loadState() {
try {
var s = localStorage.getItem(‘kolping_state_v2’);
if (s) return JSON.parse(s);
} catch(e) {}
return null;
}

function saveState() {
try { localStorage.setItem(‘kolping_state_v2’, JSON.stringify(STATE)); } catch(e) {}
}

var saved = loadState();
var STATE = saved || {
connections:   [1, 3, 6],
messages:      JSON.parse(JSON.stringify(DEFAULT_MESSAGES)),
events:        JSON.parse(JSON.stringify(DEFAULT_EVENTS)),
opportunities: JSON.parse(JSON.stringify(DEFAULT_OPPORTUNITIES)),
yearFilter:    null,
oppFilter:     “All”,
oppFormType:   “looking”,
showOppForm:   false,
activeTab:     “network”,
activeChatId:  null
};

// ═══════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════

function getUserById(id) {
if (id === 0) return ME;
for (var i = 0; i < MOCK_USERS.length; i++) {
if (MOCK_USERS[i].id === id) return MOCK_USERS[i];
}
return null;
}

function overlapYears(a, b) {
return a.from <= b.to && b.from <= a.to;
}

function isConnected(id) {
return STATE.connections.indexOf(id) !== -1;
}

function toggleConnection(id) {
var idx = STATE.connections.indexOf(id);
if (idx !== -1) {
STATE.connections.splice(idx, 1);
} else {
STATE.connections.push(id);
}
saveState();
}

function el(tag, cls) {
var e = document.createElement(tag);
if (cls) e.className = cls;
return e;
}

function div(cls) {
return el(‘div’, cls);
}

function txt(text) {
return document.createTextNode(text);
}

function makeAvatar(user, size) {
var d = div(‘avatar’);
d.style.width  = size + ‘px’;
d.style.height = size + ‘px’;
d.style.background = user.color;
d.style.fontSize   = Math.floor(size * 0.35) + ‘px’;
d.appendChild(txt(user.avatar));
return d;
}

function makeAvatarWithDot(user, size, darkDot) {
var wrap = div(’’);
wrap.style.cssText = ‘position:relative;flex-shrink:0;’;
wrap.appendChild(makeAvatar(user, size));
if (user.online) {
var dot = div(‘online-dot’ + (darkDot ? ’ online-dot-dark’ : ‘’));
var dotSize = Math.max(10, Math.floor(size * 0.22));
dot.style.width  = dotSize + ‘px’;
dot.style.height = dotSize + ‘px’;
wrap.appendChild(dot);
}
return wrap;
}

// ═══════════════════════════════════════════════════════════
// SCREEN MANAGEMENT
// ═══════════════════════════════════════════════════════════

function showScreen(id) {
var screens = document.querySelectorAll(’.screen’);
for (var i = 0; i < screens.length; i++) {
screens[i].classList.remove(‘active’);
}
document.getElementById(id).classList.add(‘active’);
}

function enterApp() {
showScreen(‘screen-app’);
var av = document.getElementById(‘topbar-avatar’);
av.style.background = ME.color;
av.textContent = ME.avatar;
switchTab(STATE.activeTab);
}

// ═══════════════════════════════════════════════════════════
// TAB SWITCHING
// ═══════════════════════════════════════════════════════════

function switchTab(tabId) {
STATE.activeTab = tabId;
saveState();

var navBtns = document.querySelectorAll(’.nav-btn’);
for (var i = 0; i < navBtns.length; i++) {
navBtns[i].classList.remove(‘active’);
if (navBtns[i].getAttribute(‘data-tab’) === tabId) {
navBtns[i].classList.add(‘active’);
}
}

var content = document.getElementById(‘tab-content’);
content.innerHTML = ‘’;

if      (tabId === ‘network’)       renderNetwork(content);
else if (tabId === ‘messages’)      renderMessages(content);
else if (tabId === ‘feed’)          renderFeed(content);
else if (tabId === ‘events’)        renderEvents(content);
else if (tabId === ‘opportunities’) renderOpportunities(content);
}

// ═══════════════════════════════════════════════════════════
// NETWORK TAB
// ═══════════════════════════════════════════════════════════

function renderNetwork(container) {
var pad = div(‘tab-pad’);

// My card
var myCard = div(‘my-card’);
var row = div(‘my-card-row’);
var avWrap = makeAvatarWithDot(ME, 56, false);
row.appendChild(avWrap);

var info = div(’’);
var nameEl = div(‘my-card-name’); nameEl.appendChild(txt(ME.name));
var roleEl = div(‘my-card-role’); roleEl.appendChild(txt(ME.role + ’ · ’ + ME.company));
var locEl  = div(‘my-card-loc’);  locEl.appendChild(txt(ME.location));
var badge  = div(‘kolping-badge’);
badge.innerHTML = ’🏠 Kolping ’ + ME.years.from + ‘–’ + ME.years.to;
info.appendChild(nameEl); info.appendChild(roleEl); info.appendChild(locEl); info.appendChild(badge);
row.appendChild(info);
myCard.appendChild(row);

var stats = div(‘my-card-stats’);
var s1 = div(’’); s1.innerHTML = ‘<div class="my-stat-val">’ + STATE.connections.length + ‘</div><div class="my-stat-lbl">connections</div>’;
var cohortCount = 0;
for (var ci = 0; ci < MOCK_USERS.length; ci++) { if (overlapYears(MOCK_USERS[ci].years, ME.years)) cohortCount++; }
var s2 = div(’’); s2.innerHTML = ‘<div class="my-stat-val">’ + cohortCount + ‘</div><div class="my-stat-lbl">cohort peers</div>’;
stats.appendChild(s1); stats.appendChild(s2);
myCard.appendChild(stats);
pad.appendChild(myCard);

// Cohort box
var cohortUsers = [];
for (var i = 0; i < MOCK_USERS.length; i++) {
if (overlapYears(MOCK_USERS[i].years, ME.years)) cohortUsers.push(MOCK_USERS[i]);
}
var cohortBox = div(‘cohort-box’);
var ch = div(‘cohort-header’);
ch.innerHTML = ‘<span>✨</span>’;
var cl = div(‘cohort-label’); cl.appendChild(txt(‘Your Kolping Cohort’));
ch.appendChild(cl);
cohortBox.appendChild(ch);
var csub = div(‘cohort-sub’);
csub.appendChild(txt(cohortUsers.length + ’ people were at Kolping at the same time as you (’ + ME.years.from + ‘–’ + ME.years.to + ‘)’));
cohortBox.appendChild(csub);

var avatarsRow = div(‘cohort-avatars’);
cohortUsers.forEach(function(u) {
var item = div(‘cohort-avatar-item’);
item.appendChild(makeAvatarWithDot(u, 46, true));
var name = div(‘cohort-avatar-name’); name.appendChild(txt(u.name.split(’ ’)[0]));
item.appendChild(name);
(function(uid) {
item.addEventListener(‘click’, function() { openProfile(uid); });
})(u.id);
avatarsRow.appendChild(item);
});
cohortBox.appendChild(avatarsRow);
pad.appendChild(cohortBox);

// Year filter
var yf = div(‘year-filter’);
var yfTitle = div(‘section-title’); yfTitle.appendChild(txt(‘Filter by year’));
yf.appendChild(yfTitle);
var chips = div(‘year-chips’);

var allChip = el(‘button’, ‘year-chip all’ + (!STATE.yearFilter ? ’ active’ : ‘’));
allChip.appendChild(txt(‘All’));
allChip.addEventListener(‘click’, function() { STATE.yearFilter = null; saveState(); switchTab(‘network’); });
chips.appendChild(allChip);

[2020,2021,2022,2023,2024,2025].forEach(function(y) {
var chip = el(‘button’, ‘year-chip’ + (STATE.yearFilter === y ? ’ active’ : ‘’));
chip.appendChild(txt(String(y)));
(function(year) {
chip.addEventListener(‘click’, function() {
STATE.yearFilter = (STATE.yearFilter === year) ? null : year;
saveState(); switchTab(‘network’);
});
})(y);
chips.appendChild(chip);
});
yf.appendChild(chips);
pad.appendChild(yf);

// Suggested sections
if (!STATE.yearFilter) {
var sameField = MOCK_USERS.filter(function(u) { return u.field === ME.field; });
appendSuggestedSection(pad, ‘Same field as you’, ‘Finance professionals’, sameField);

```
var sameCity = MOCK_USERS.filter(function(u) { return u.location === ME.location; });
appendSuggestedSection(pad, 'In your city', ME.location, sameCity);
```

}

// Members list
var filtered = STATE.yearFilter
? MOCK_USERS.filter(function(u) { return u.years.from <= STATE.yearFilter && u.years.to >= STATE.yearFilter; })
: MOCK_USERS;

var listTitle = div(‘section-title’);
listTitle.innerHTML = (STATE.yearFilter ? ‘Class of ’ + STATE.yearFilter : ‘All Members’) +
’ <span style="color:#C8A96E">’ + filtered.length + ‘</span>’;
pad.appendChild(listTitle);

var list = div(‘member-list’);
filtered.forEach(function(u) { list.appendChild(makeMemberCard(u)); });
pad.appendChild(list);
container.appendChild(pad);
}

function appendSuggestedSection(container, title, subtitle, users) {
if (!users.length) return;
var sec = div(’’);
sec.style.marginBottom = ‘24px’;
var hdr = div(‘suggested-section-header’);
var t = div(‘suggested-section-title’); t.appendChild(txt(title));
var s = div(‘suggested-section-sub’);   s.appendChild(txt(subtitle));
hdr.appendChild(t); hdr.appendChild(s);
sec.appendChild(hdr);

var scroll = div(‘suggested-scroll’);
users.forEach(function(u) {
var card = div(‘suggested-card’);
card.appendChild(makeAvatar(u, 44));
var n = div(‘suggested-card-name’); n.appendChild(txt(u.name));
var r = div(‘suggested-card-role’); r.appendChild(txt(u.role));
var tag = div(‘tag-year’); tag.appendChild(txt(u.years.from + ‘–’ + u.years.to));
card.appendChild(n); card.appendChild(r); card.appendChild(tag);
(function(uid) { card.addEventListener(‘click’, function() { openProfile(uid); }); })(u.id);
scroll.appendChild(card);
});
sec.appendChild(scroll);
container.appendChild(sec);
}

function makeMemberCard(user) {
var card = div(‘member-card’);

var avWrap = makeAvatarWithDot(user, 48, false);
avWrap.style.cursor = ‘pointer’;
(function(uid) { avWrap.addEventListener(‘click’, function() { openProfile(uid); }); })(user.id);
card.appendChild(avWrap);

var info = div(‘member-info’);
var name = div(‘member-name’); name.appendChild(txt(user.name));
var role = div(‘member-role’); role.appendChild(txt(user.role));
var tags = div(‘member-tags’);
var ty = div(‘tag-year’); ty.appendChild(txt(user.years.from + ‘–’ + user.years.to));
var tl = div(‘tag-loc’);  tl.appendChild(txt(‘📍 ’ + user.location.split(’,’)[0]));
tags.appendChild(ty); tags.appendChild(tl);
info.appendChild(name); info.appendChild(role); info.appendChild(tags);
(function(uid) { info.addEventListener(‘click’, function() { openProfile(uid); }); })(user.id);
card.appendChild(info);

var actions = div(‘member-actions’);

if (isConnected(user.id)) {
var msgBtn = el(‘button’, ‘btn-msg’);
msgBtn.appendChild(txt(‘💬’));
(function(uid) { msgBtn.addEventListener(‘click’, function() { openChat(uid); }); })(user.id);
actions.appendChild(msgBtn);
}

var connected = isConnected(user.id);
var connBtn = el(‘button’, ‘btn-connect’ + (connected ? ’ connected’ : ‘’));
connBtn.appendChild(txt(connected ? ‘Connected’ : ‘+ Connect’));
(function(uid) {
connBtn.addEventListener(‘click’, function() {
toggleConnection(uid);
switchTab(‘network’);
});
})(user.id);
actions.appendChild(connBtn);
card.appendChild(actions);
return card;
}

// ═══════════════════════════════════════════════════════════
// PROFILE OVERLAY
// ═══════════════════════════════════════════════════════════

function openProfile(userId) {
var user = getUserById(userId);
var content = document.getElementById(‘profile-content’);
content.innerHTML = ‘’;

var cover = div(‘profile-cover’);
var avWrap = div(‘profile-avatar-wrap’);
avWrap.appendChild(makeAvatar(user, 64));
cover.appendChild(avWrap);
content.appendChild(cover);

var body = div(‘profile-body’);

var topRow = div(‘profile-top-row’);
var nameBlock = div(’’);
var pName = div(‘profile-name’); pName.appendChild(txt(user.name));
var pRole = div(‘profile-role’); pRole.appendChild(txt(user.role + ’ at ’ + user.company));
var pLoc  = div(‘profile-loc’);  pLoc.appendChild(txt(’📍 ’ + user.location));
nameBlock.appendChild(pName); nameBlock.appendChild(pRole); nameBlock.appendChild(pLoc);
topRow.appendChild(nameBlock);
if (user.online) {
var ob = div(‘profile-online-badge’); ob.appendChild(txt(‘● Online’));
topRow.appendChild(ob);
}
body.appendChild(topRow);

var kb = div(‘profile-kolping-badge’);
var kbIcon = div(‘pkb-icon’); kbIcon.appendChild(txt(‘🏠’));
var kbText = div(’’);
var kbLabel = div(‘pkb-label’); kbLabel.appendChild(txt(‘Kolping House ’ + user.years.from + ‘–’ + user.years.to));
var kbSub   = div(‘pkb-sub’);   kbSub.appendChild(txt(user.purpose + ’ · New York City’));
kbText.appendChild(kbLabel); kbText.appendChild(kbSub);
kb.appendChild(kbIcon); kb.appendChild(kbText);
body.appendChild(kb);

var aboutTitle = div(‘profile-about-title’); aboutTitle.appendChild(txt(‘About’));
var bio = div(‘profile-bio’); bio.appendChild(txt(user.bio));
body.appendChild(aboutTitle); body.appendChild(bio);

var ptags = div(‘profile-tags’);
[user.field, user.purpose, user.location.split(’,’)[0]].forEach(function(t) {
var tag = div(‘profile-tag’); tag.appendChild(txt(t));
ptags.appendChild(tag);
});
body.appendChild(ptags);

var pActions = div(‘profile-actions’);

var connected = isConnected(user.id);
var connBtn = el(‘button’, ‘btn-connect-lg’ + (connected ? ’ connected’ : ‘’));
connBtn.appendChild(txt(connected ? ‘✓ Connected’ : ‘+ Connect’));
var msgBtn2 = el(‘button’, ‘btn-msg-lg’);
msgBtn2.appendChild(txt(‘💬 Message’));
msgBtn2.style.display = connected ? ‘flex’ : ‘none’;

(function(uid, cb, mb) {
cb.addEventListener(‘click’, function() {
toggleConnection(uid);
var now = isConnected(uid);
cb.className = ‘btn-connect-lg’ + (now ? ’ connected’ : ‘’);
cb.textContent = now ? ‘✓ Connected’ : ‘+ Connect’;
mb.style.display = now ? ‘flex’ : ‘none’;
});
mb.addEventListener(‘click’, function() { closeProfile(); openChat(uid); });
})(user.id, connBtn, msgBtn2);

pActions.appendChild(connBtn);
pActions.appendChild(msgBtn2);
body.appendChild(pActions);

if (overlapYears(user.years, ME.years)) {
var note = div(‘profile-overlap-note’);
note.appendChild(txt(‘✨ You and ’ + user.name.split(’ ‘)[0] + ’ overlapped at Kolping House in NYC!’));
body.appendChild(note);
}

content.appendChild(body);
showScreen(‘screen-profile’);
}

function closeProfile() {
showScreen(‘screen-app’);
switchTab(STATE.activeTab);
}

// ═══════════════════════════════════════════════════════════
// MESSAGES TAB
// ═══════════════════════════════════════════════════════════

function renderMessages(container) {
var pad = div(‘tab-pad’);
var title = div(‘page-title’); title.appendChild(txt(‘Messages’));
var sub   = div(‘page-sub’);   sub.appendChild(txt(STATE.connections.length + ’ connections’));
pad.appendChild(title); pad.appendChild(sub);

var chatIds = Object.keys(STATE.messages).map(Number);
if (chatIds.length) {
var rTitle = div(‘section-title’); rTitle.appendChild(txt(‘Recent’));
pad.appendChild(rTitle);
var rList = div(‘chat-list’);
chatIds.forEach(function(id) {
var user = getUserById(id);
var msgs = STATE.messages[id];
var last = msgs[msgs.length - 1];
var preview = (last.from === 0 ? ’You: ’ : ‘’) + last.text;
rList.appendChild(makeChatRow(user, preview, last.time, false));
});
pad.appendChild(rList);
}

var cTitle = div(‘section-title’); cTitle.appendChild(txt(‘Your Connections’));
pad.appendChild(cTitle);
var cList = div(‘chat-list’);
var connUsers = MOCK_USERS.filter(function(u) { return isConnected(u.id); });
if (!connUsers.length) {
var empty = div(‘empty-state’); empty.appendChild(txt(‘Connect with alumni to start chatting’));
cList.appendChild(empty);
} else {
connUsers.forEach(function(u) { cList.appendChild(makeChatRow(u, u.location, null, true)); });
}
pad.appendChild(cList);
container.appendChild(pad);
}

function makeChatRow(user, preview, time, isConn) {
var row = div(‘chat-row’);
row.appendChild(makeAvatarWithDot(user, 46, false));
var info = div(‘chat-row-info’);
var n = div(‘chat-row-name’); n.appendChild(txt(user.name));
var p = div(‘chat-row-last’); p.appendChild(txt(preview));
info.appendChild(n); info.appendChild(p);
row.appendChild(info);
if (time) {
var t = div(‘chat-row-time’); t.appendChild(txt(time));
row.appendChild(t);
} else if (isConn) {
var m = div(‘tag-msg’); m.appendChild(txt(‘Message’));
row.appendChild(m);
}
(function(uid) { row.addEventListener(‘click’, function() { openChat(uid); }); })(user.id);
return row;
}

// ═══════════════════════════════════════════════════════════
// CHAT VIEW
// ═══════════════════════════════════════════════════════════

function openChat(userId) {
STATE.activeChatId = userId;
var user = getUserById(userId);

// Build topbar
var tb = document.getElementById(‘chat-topbar’);
tb.innerHTML = ‘’;
var backBtn = el(‘button’, ‘back-btn’);
backBtn.innerHTML = ‘←’;
backBtn.addEventListener(‘click’, function() { closeChat(); });
tb.appendChild(backBtn);

var avWrap = makeAvatarWithDot(user, 38, false);
avWrap.style.marginRight = ‘12px’;
tb.appendChild(avWrap);

var nameBlock = div(’’);
var nbName = el(‘div’, ‘’); nbName.style.cssText = ‘font-weight:700;font-size:15px;color:#1A1A1A;’; nbName.appendChild(txt(user.name));
var nbOnline = el(‘div’, ‘’); nbOnline.style.cssText = ‘font-size:11px;color:’ + (user.online ? ‘#4CAF50’ : ‘#AAA’) + ‘;’; nbOnline.appendChild(txt(user.online ? ‘● Online’ : ‘Offline’));
nameBlock.appendChild(nbName); nameBlock.appendChild(nbOnline);
tb.appendChild(nameBlock);

renderChatMessages(userId);

var input = document.getElementById(‘chat-input’);
input.value = ‘’;
updateSendBtn();

showScreen(‘screen-chat’);
scrollChatBottom();
}

function renderChatMessages(userId) {
var msgs = STATE.messages[userId] || [];
var container = document.getElementById(‘chat-messages’);
container.innerHTML = ‘’;

var note = div(‘chat-context-note’);
note.appendChild(txt(‘🏠 You both lived at Kolping House NYC’));
container.appendChild(note);

msgs.forEach(function(msg) {
var side = msg.from === 0 ? ‘me’ : ‘them’;
var wrap = div(‘bubble-wrap ’ + side);
var bubble = div(‘bubble ’ + side);
var textNode = div(’’); textNode.appendChild(txt(msg.text));
var timeEl = div(‘bubble-time’); timeEl.appendChild(txt(msg.time));
bubble.appendChild(textNode);
bubble.appendChild(timeEl);
wrap.appendChild(bubble);
container.appendChild(wrap);
});
}

function closeChat() {
STATE.activeChatId = null;
showScreen(‘screen-app’);
switchTab(‘messages’);
}

function scrollChatBottom() {
var c = document.getElementById(‘chat-messages’);
setTimeout(function() { c.scrollTop = c.scrollHeight; }, 50);
}

function updateSendBtn() {
var input = document.getElementById(‘chat-input’);
var btn   = document.getElementById(‘chat-send-btn’);
if (!input || !btn) return;
if (input.value.trim()) {
btn.classList.add(‘ready’);
} else {
btn.classList.remove(‘ready’);
}
}

function sendMessage() {
var input = document.getElementById(‘chat-input’);
var text  = input.value.trim();
if (!text || STATE.activeChatId === null) return;

var id = STATE.activeChatId;
if (!STATE.messages[id]) STATE.messages[id] = [];

var now = new Date();
var time = (‘0’ + now.getHours()).slice(-2) + ‘:’ + (‘0’ + now.getMinutes()).slice(-2);
STATE.messages[id].push({ from: 0, text: text, time: time });
saveState();

input.value = ‘’;
updateSendBtn();
renderChatMessages(id);
scrollChatBottom();
}

// ═══════════════════════════════════════════════════════════
// FEED TAB
// ═══════════════════════════════════════════════════════════

function renderFeed(container) {
var pad = div(‘tab-pad’);
var title = div(‘page-title’); title.appendChild(txt(‘Activity’));
var sub   = div(‘page-sub’);   sub.appendChild(txt(‘Updates from your network’));
pad.appendChild(title); pad.appendChild(sub);

var list = div(‘feed-list’);
MOCK_FEED.forEach(function(item) {
var user = getUserById(item.userId);
var card = div(‘feed-card’);

```
var avWrap = div('feed-avatar-wrap');
avWrap.appendChild(makeAvatar(user, 42));
var iconEl = div('feed-icon'); iconEl.appendChild(txt(item.icon));
avWrap.appendChild(iconEl);
card.appendChild(avWrap);

var body = div('');
var nameStr = user.name;
var rest = item.text.indexOf(nameStr) === 0 ? item.text.slice(nameStr.length) : ' ' + item.text;
var feedText = div('feed-text');
var strong = el('strong', ''); strong.appendChild(txt(nameStr));
feedText.appendChild(strong);
feedText.appendChild(txt(rest));
var feedTime = div('feed-time'); feedTime.appendChild(txt(item.time));
body.appendChild(feedText); body.appendChild(feedTime);
card.appendChild(body);
list.appendChild(card);
```

});
pad.appendChild(list);

var cta = div(‘feed-cta’);
var ctaIcon = div(‘feed-cta-icon’); ctaIcon.appendChild(txt(‘📣’));
var ctaTitle = div(‘feed-cta-title’); ctaTitle.appendChild(txt(‘Share an update’));
var ctaSub   = div(‘feed-cta-sub’);   ctaSub.appendChild(txt(“Let your network know what’s new”));
var postBtn  = el(‘button’, ‘btn-post-update’); postBtn.appendChild(txt(‘Post update’));
postBtn.addEventListener(‘click’, function() { alert(‘Post updates coming soon!’); });
cta.appendChild(ctaIcon); cta.appendChild(ctaTitle); cta.appendChild(ctaSub); cta.appendChild(postBtn);
pad.appendChild(cta);
container.appendChild(pad);
}

// ═══════════════════════════════════════════════════════════
// EVENTS TAB
// ═══════════════════════════════════════════════════════════

function renderEvents(container) {
var pad = div(‘tab-pad’);
var title = div(‘page-title’); title.appendChild(txt(‘Events’));
var sub   = div(‘page-sub’);   sub.appendChild(txt(‘Alumni meetups & reunions’));
pad.appendChild(title); pad.appendChild(sub);

var list = div(‘event-list’);
STATE.events.forEach(function(event) {
var card = div(‘event-card’);

```
var header = div('event-header');
var emojiEl = div('event-emoji'); emojiEl.appendChild(txt(event.emoji));
var headerText = div('');
var eTitle = div('event-title'); eTitle.appendChild(txt(event.title));
var eMeta  = div('event-meta');  eMeta.appendChild(txt(event.date + ' · ' + event.location));
headerText.appendChild(eTitle); headerText.appendChild(eMeta);
header.appendChild(emojiEl); header.appendChild(headerText);
card.appendChild(header);

var body = div('event-body');
var desc = div('event-desc'); desc.appendChild(txt(event.desc));
var footer = div('event-footer');

var attId = 'event-att-' + event.id;
var attEl = div('event-attending'); attEl.id = attId;
attEl.appendChild(txt('👥 ' + (event.attending + (event.rsvp ? 1 : 0)) + ' attending'));

var rsvpBtn = el('button', 'btn-rsvp' + (event.rsvp ? ' going' : ''));
rsvpBtn.appendChild(txt(event.rsvp ? '✓ Going' : 'RSVP'));

(function(ev, btn, attNode) {
  btn.addEventListener('click', function() {
    ev.rsvp = !ev.rsvp;
    saveState();
    attNode.textContent = '👥 ' + (ev.attending + (ev.rsvp ? 1 : 0)) + ' attending';
    btn.className = 'btn-rsvp' + (ev.rsvp ? ' going' : '');
    btn.textContent = ev.rsvp ? '✓ Going' : 'RSVP';
  });
})(event, rsvpBtn, attEl);

footer.appendChild(attEl); footer.appendChild(rsvpBtn);
body.appendChild(desc); body.appendChild(footer);
card.appendChild(body);
list.appendChild(card);
```

});

pad.appendChild(list);
container.appendChild(pad);
}

// ═══════════════════════════════════════════════════════════
// OPPORTUNITIES TAB
// ═══════════════════════════════════════════════════════════

function renderOpportunities(container) {
var pad = div(‘tab-pad’);

var topRow = div(‘opp-toprow’);
var titleBlock = div(’’);
var oTitle = div(‘page-title’); oTitle.appendChild(txt(‘Opportunities’));
var oSub   = div(‘page-sub’);   oSub.style.marginBottom = ‘0’; oSub.appendChild(txt(‘Jobs, referrals & requests’));
titleBlock.appendChild(oTitle); titleBlock.appendChild(oSub);
topRow.appendChild(titleBlock);

var postBtn = el(‘button’, ‘btn-post-opp’); postBtn.appendChild(txt(’+ Post’));
postBtn.addEventListener(‘click’, function() {
STATE.showOppForm = !STATE.showOppForm;
saveState();
container.innerHTML = ‘’;
renderOpportunities(container);
});
topRow.appendChild(postBtn);
pad.appendChild(topRow);

// Form
if (STATE.showOppForm) {
var form = div(‘opp-form’);
var formTitle = div(‘opp-form-title’); formTitle.appendChild(txt(‘New Post’));
form.appendChild(formTitle);

```
var typeRow = div('opp-type-row');
['looking','hiring','offer'].forEach(function(t) {
  var btn = el('button', 'btn-type' + (STATE.oppFormType === t ? ' active-' + t : ''));
  btn.appendChild(txt(TYPE_LABELS[t]));
  (function(type, b) {
    b.addEventListener('click', function() {
      STATE.oppFormType = type;
      saveState();
      container.innerHTML = '';
      renderOpportunities(container);
    });
  })(t, btn);
  typeRow.appendChild(btn);
});
form.appendChild(typeRow);

var titleInput = el('input', 'opp-input');
titleInput.id = 'opp-title-input';
titleInput.placeholder = 'Describe your post...';
form.appendChild(titleInput);

var fieldInput = el('input', 'opp-input');
fieldInput.id = 'opp-field-input';
fieldInput.placeholder = 'Field (Finance, Consulting, Design...)';
form.appendChild(fieldInput);

var pubBtn = el('button', 'btn-publish'); pubBtn.appendChild(txt('Publish'));
pubBtn.addEventListener('click', function() {
  var ti = document.getElementById('opp-title-input').value.trim();
  var fi = document.getElementById('opp-field-input').value.trim();
  if (!ti || !fi) { alert('Please fill in both fields.'); return; }
  STATE.opportunities.unshift({ id: Date.now(), userId: 0, type: STATE.oppFormType, title: ti, field: fi, time: 'Just now' });
  STATE.showOppForm = false;
  saveState();
  container.innerHTML = '';
  renderOpportunities(container);
});
form.appendChild(pubBtn);
pad.appendChild(form);
```

}

// Filters
var filters = div(‘opp-filters’);
[‘All’,‘Finance’,‘Consulting’,‘Technology’,‘Design’].forEach(function(f) {
var chip = el(‘button’, ‘opp-filter-chip’ + (STATE.oppFilter === f ? ’ active’ : ‘’));
chip.appendChild(txt(f));
(function(field) {
chip.addEventListener(‘click’, function() {
STATE.oppFilter = field;
saveState();
container.innerHTML = ‘’;
renderOpportunities(container);
});
})(f);
filters.appendChild(chip);
});
pad.appendChild(filters);

// List
var filtered = STATE.oppFilter === ‘All’
? STATE.opportunities
: STATE.opportunities.filter(function(o) { return o.field === STATE.oppFilter; });

var list = div(‘opp-list’);
if (!filtered.length) {
var empty = div(‘empty-state’); empty.appendChild(txt(‘No posts in this category yet.’));
list.appendChild(empty);
} else {
filtered.forEach(function(opp) {
var user = getUserById(opp.userId);
var card = div(‘opp-card’);

```
  var cardTop = div('opp-card-top');
  var avWrap2 = div(''); avWrap2.style.cursor = 'pointer';
  avWrap2.appendChild(makeAvatar(user, 38));
  (function(uid) { avWrap2.addEventListener('click', function() { openProfile(uid); }); })(user.id);
  cardTop.appendChild(avWrap2);

  var userInfo = div('opp-card-user');
  var un = div('opp-card-name'); un.appendChild(txt(user.name));
  var ur = div('opp-card-role'); ur.appendChild(txt(user.role));
  userInfo.appendChild(un); userInfo.appendChild(ur);
  cardTop.appendChild(userInfo);

  var badge = div('badge-' + opp.type); badge.appendChild(txt(TYPE_LABELS[opp.type] || opp.type));
  cardTop.appendChild(badge);
  card.appendChild(cardTop);

  var cardTitle = div('opp-card-title'); cardTitle.appendChild(txt(opp.title));
  card.appendChild(cardTitle);

  var footer2 = div('opp-card-footer');
  var fieldTag = div('tag-field-gold'); fieldTag.appendChild(txt(opp.field));
  var timeEl   = div('opp-card-time');  timeEl.appendChild(txt(opp.time));
  footer2.appendChild(fieldTag); footer2.appendChild(timeEl);
  card.appendChild(footer2);

  list.appendChild(card);
});
```

}
pad.appendChild(list);

container.innerHTML = ‘’;
container.appendChild(pad);
}

// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════

document.addEventListener(‘DOMContentLoaded’, function() {

// Landing button
document.getElementById(‘btn-enter’).addEventListener(‘click’, function() {
enterApp();
});

// Back from profile
document.getElementById(‘back-profile’).addEventListener(‘click’, function() {
closeProfile();
});

// Nav buttons
var navBtns = document.querySelectorAll(’.nav-btn’);
for (var i = 0; i < navBtns.length; i++) {
(function(btn) {
btn.addEventListener(‘click’, function() {
switchTab(btn.getAttribute(‘data-tab’));
});
})(navBtns[i]);
}

// Chat input
var chatInput = document.getElementById(‘chat-input’);
chatInput.addEventListener(‘input’, function() { updateSendBtn(); });
chatInput.addEventListener(‘keydown’, function(e) {
if (e.key === ‘Enter’) { sendMessage(); }
});

// Chat send button
document.getElementById(‘chat-send-btn’).addEventListener(‘click’, function() {
sendMessage();
});

// Start on landing
showScreen(‘screen-landing’);
});
