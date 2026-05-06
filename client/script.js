/* ═══════════════════════════════════════════
   DIVINE SOUL — script.js
   ═══════════════════════════════════════════ */

var API_BASE = "https://divine-soul.vercel.app/api";

/* ── PERSONALITIES DATA ─────────────────── */
var PERSONALITIES = [
  {
    id: 1,
    name: "Premanand Govind Sharan",
    title: "Radha Vallabha Saint & Guru",
    shortDesc: "A revered ascetic from the Radha Vallabha Sampradaya, guiding seekers on the sublime path of divine love and bhakti.",
    image: "premanand.jpg",
    fallback: "https://placehold.co/400x530/C8A84B/3A2810?text=Premanand+Maharaj",
    born: "30 March 1969, Sarsaul, Uttar Pradesh",
    tradition: "Radha Vallabha Sampradaya",
    guru: "Gaurangi Sharan",
    location: "Vrindavan, Uttar Pradesh, India",
    quote: "Spirituality is the essence of life, existence, and truth.",
    bio: [
      "Premanand Govind Sharan (born Aniruddh Kumar Pandey, 30 March 1969) is a revered Hindu ascetic and spiritual teacher from the Radha Vallabha Sampradaya. At the tender age of 13, he renounced worldly life and embarked on the path of sannyasa.",
      "He spent his formative years on the sacred banks of the Ganga in Varanasi, meditating beneath peepal trees, immersed in deep spiritual practice. It was during this time that he encountered the Radha Vallabha tradition.",
      "Under the guidance of his guru Gaurangi Sharan, he received the sacred 'Nij Mantra' — entering the exalted order of rasik saints who experience the eternal pastimes of Radha and Krishna.",
      "In 2016, he founded the Shri Hit Radha Keli Kunj Trust in Vrindavan, dedicated to spiritual upliftment. He emphasizes the importance of a true guru and the centrality of divine love in all aspects of life.",
      "Known to his devotees as Premanand Maharaj, his discourses on bhakti attract seekers from across India and the world."
    ]
  },
  {
    id: 2,
    name: "Vinod Baba",
    title: "Vinod Bihari Das Baba",
    shortDesc: "A deeply devoted saint residing at Priya Kunj Ashram, embodying the highest ideals of Vaishnava devotion and selfless service.",
    image: "vinod.jpg",
    fallback: "https://placehold.co/400x530/E8722A/FDFAF3?text=Vinod+Baba",
    born: "Details preserved in ashram tradition",
    tradition: "Vaishnava Bhakti",
    guru: "Paramparā lineage",
    location: "Priya Kunj Ashram",
    quote: "The greatest miracle is the transformation of the human heart.",
    bio: [
      "Vinod Bihari Das Baba, lovingly known as Vinod Baba, is a saint of deep renunciation and boundless compassion at the Priya Kunj Ashram, whose life embodies the highest principles of Vaishnava devotion.",
      "Vinod Baba's life is a testament to the power of sincere bhakti — devotion offered with purity, humility, and one-pointed focus on the Divine. He has dedicated his existence to the welfare of all beings.",
      "His teachings are rooted in the ancient wisdom of the Vedic tradition, emphasizing the primacy of divine love, selfless service (seva), and surrender (sharanagati).",
      "The ashram under his guidance has become a sanctuary of peace — a place where the fragrance of incense, the melody of kirtana, and the warmth of spiritual fellowship create an environment for inner transformation.",
      "Vinod Baba teaches that the greatest miracle is the transformation of a human heart from selfishness to selflessness, from darkness to divine light."
    ]
  },
  {
    id: 3,
    name: "Lokanath Swami",
    title: "ISKCON Sanyasi & Padayatra Minister",
    shortDesc: "A senior disciple of Srila Prabhupada, renowned globally for his inspiring lectures, melodious kirtanas, and sacred padayatras.",
    image: "lokanathswami.jpg",
    fallback: "https://placehold.co/400x530/6B1F1F/FDF3E7?text=Lokanath+Swami",
    born: "Maharashtra, India",
    tradition: "Gaudiya Vaishnavism (ISKCON)",
    guru: "His Divine Grace A.C. Bhaktivedanta Swami Prabhupada",
    location: "ISKCON — Worldwide",
    quote: "Chant, hear, and remember — this is the essence of devotional life.",
    bio: [
      "Lokanath Swami is a senior disciple of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, the founder-acharya of ISKCON. His life has been a journey of dedicated service, spiritual practice, and global outreach.",
      "As ISKCON's Padayatra Minister, Lokanath Swami expanded the tradition of sacred pilgrimage walking (padayatra) to a worldwide phenomenon, inspiring devotees across continents to chant the holy names of the Lord.",
      "He provided the inspiration to begin ISKCON's yearly Vraja-mandala parikrama in 1987, a sacred circumambulation of Vrindavan's holy forests and temples, which continues to grow each year.",
      "As the Minister for Srila Prabhupada's Centennial, he coordinated a global four-year campaign culminating in ISKCON's grand worldwide centennial celebrations of 1996.",
      "Known for his deeply moving lectures and soul-stirring kirtanas, Lokanath Swami attends hundreds of ISKCON festivals worldwide and personally guides devotees in the quality of their japa."
    ]
  }
];

var QUOTES = [
  "The soul is eternal, the body is temporary. Seek the eternal.",
  "In the silence of the heart, God speaks.",
  "Service to the Divine is the highest form of self-realization.",
  "The lotus rises from muddy waters, pure and untouched — so too the soul.",
  "Devotion is not a practice; it is a way of being."
];

/* ── BOOKS DATA ─────────────────────────── */
var BOOKS = {
  1: [
    { title: "Hit Chaurasi",          author: "Hariray",             emoji: "📿", genre: "Bhakti Scripture" },
    { title: "Radhastami Mahatmya",   author: "Tradition",           emoji: "🌸", genre: "Devotion"         },
    { title: "Seva Kunja Ke Phool",   author: "Premanand Maharaj",   emoji: "🪷", genre: "Kirtan"           },
    { title: "Radha Madhuri",         author: "Premanand Maharaj",   emoji: "💛", genre: "Bhakti"           },
    { title: "Vrindavan Leela",       author: "Premanand Maharaj",   emoji: "🌿", genre: "Pastimes"         },
    { title: "Prema Bhakti Chandrika",author: "Narottama Das",       emoji: "🌙", genre: "Vaishnava"        }
  ],
  2: [
    { title: "Vaishnava Seva Rahasya",author: "Vinod Baba", emoji: "🔆", genre: "Seva"      },
    { title: "Bhakti Ki Seedhi",      author: "Vinod Baba", emoji: "🪜", genre: "Devotion"  },
    { title: "Priya Kunj Amrit Vachan",author:"Vinod Baba", emoji: "📖", genre: "Teachings" },
    { title: "Sharanagati Darshan",   author: "Vinod Baba", emoji: "🙏", genre: "Surrender" }
  ],
  3: [
    { title: "Pada Yatra",             author: "Lokanath Swami",          emoji: "👣", genre: "Pilgrimage" },
    { title: "Vraj Mandal Parikrama",  author: "Lokanath Swami",          emoji: "🏔️", genre: "Yatra"     },
    { title: "Prabhupada My Strength", author: "Lokanath Swami",          emoji: "✨", genre: "Biography"  },
    { title: "Chant & Be Happy",       author: "Prabhupada (fwd by LS)", emoji: "🎵", genre: "Japa"       },
    { title: "Walking with Krishna",   author: "Lokanath Swami",          emoji: "🌿", genre: "Devotion"   },
    { title: "Bhakti Rahasya",         author: "Lokanath Swami",          emoji: "📜", genre: "Bhakti"     }
  ]
};

/* ── STATE ──────────────────────────────── */
var currentMode   = "signup";
var currentLang   = "en";
var currentUser   = null;
var currentPerson = null;
var bookmarks     = loadBookmarks();

/* ════════════════════════════════════════
   INIT
   ════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", function () {
  applyStoredPrefs();

  var token = localStorage.getItem("divine_token");
  var user  = safeJSON("divine_user");

  if (token && user && user.username) {
    currentUser = user;
    renderDashboard();
    showPage("dashboard");
  } else {
    showPage("auth");
  }

  var q = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  document.getElementById("auth-quote").textContent = "\u201c" + q + "\u201d";

  // Close all dropdowns / slide panel on outside click
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".lang-wrap")) {
      document.querySelectorAll(".lang-wrap").forEach(function(w){ w.classList.remove("open"); });
    }
    if (!e.target.closest(".dash-dropdown-wrap")) {
      document.querySelectorAll(".dash-dropdown").forEach(function(m){ m.classList.remove("open"); });
    }
  });
});

/* ════════════════════════════════════════
   PAGE ROUTING
   ════════════════════════════════════════ */
function showPage(name) {
  document.querySelectorAll(".page").forEach(function(p){ p.classList.remove("active"); });
  var page = document.getElementById("page-" + name);
  if (page) { page.classList.add("active"); window.scrollTo(0, 0); }
}

/* ════════════════════════════════════════
   SLIDE PANEL (left drawer)
   ════════════════════════════════════════ */
function openSlidePanel() {
  document.getElementById("slidePanel").classList.add("open");
  document.getElementById("slideOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeSlidePanel() {
  document.getElementById("slidePanel").classList.remove("open");
  document.getElementById("slideOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

/* ════════════════════════════════════════
   LANGUAGE
   ════════════════════════════════════════ */
function toggleLangMenu(wrapId) {
  var wrap = document.getElementById(wrapId);
  var isOpen = wrap.classList.contains("open");
  document.querySelectorAll(".lang-wrap").forEach(function(w){ w.classList.remove("open"); });
  if (!isOpen) wrap.classList.add("open");
}

function selectLang(lang, wrapId) {
  var wrap = document.getElementById(wrapId);
  wrap.querySelector(".lang-btn-text").textContent = lang === "en" ? "文ᴬ English" : "🕉 हिन्दी";
  wrap.classList.remove("open");
  setLang(lang);
}

function setLang(lang) {
  currentLang = lang;
  var label = lang === "en" ? "文ᴬ English" : "🕉 हिन्दी";
  document.querySelectorAll(".lang-wrap").forEach(function(w){
    var bt = w.querySelector(".lang-btn-text");
    if (bt) bt.textContent = label;
  });
  document.querySelectorAll("[data-en]").forEach(function(el){
    el.textContent = el.getAttribute("data-" + lang) || el.getAttribute("data-en");
  });
  document.querySelectorAll("[data-en-ph]").forEach(function(el){
    el.placeholder = el.getAttribute("data-" + lang + "-ph") || el.getAttribute("data-en-ph");
  });
  updateSubmitBtn();
}

/* ════════════════════════════════════════
   AUTH MODE
   ════════════════════════════════════════ */
function switchMode(mode) {
  if (mode === currentMode) return;
  currentMode = mode;
  document.getElementById("tab-signup").classList.toggle("active", mode === "signup");
  document.getElementById("tab-login").classList.toggle("active",  mode === "login");
  document.getElementById("field-name").style.display = mode === "signup" ? "block" : "none";
  document.getElementById("inp-name").value  = "";
  document.getElementById("inp-email").value = "";
  document.getElementById("inp-pass").value  = "";
  hideError();
  updateSubmitBtn();
}

function updateSubmitBtn() {
  var btn = document.getElementById("btn-text");
  var key = "data-" + currentLang + "-" + currentMode;
  btn.textContent = btn.getAttribute(key) || btn.getAttribute("data-en-" + currentMode);
}

/* ════════════════════════════════════════
   AUTH SUBMIT
   ════════════════════════════════════════ */
function handleAuth() {
  hideError();
  var name  = document.getElementById("inp-name").value.trim();
  var email = document.getElementById("inp-email").value.trim();
  var pass  = document.getElementById("inp-pass").value.trim();

  if (currentMode === "signup" && !name)      return showError("Please enter your full name.");
  if (!email || email.indexOf("@") === -1)    return showError("Please enter a valid email address.");
  if (!pass || pass.length < 6)               return showError("Password must be at least 6 characters.");

  var btn = document.querySelector(".submit-btn");
  var btnText = document.getElementById("btn-text");
  btn.disabled = true;
  btnText.textContent = "⏳ Please wait…";

  var endpoint = currentMode === "signup" ? API_BASE + "/auth/signup" : API_BASE + "/auth/login";
  var body = currentMode === "signup"
    ? { username: name, email: email, password: pass }
    : { email: email, password: pass };

  fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
    .then(function(res){ return res.json(); })
    .then(function(data){
      btn.disabled = false; updateSubmitBtn();
      if (!data.success) return showError(data.message || "Something went wrong. Please try again.");
      localStorage.setItem("divine_token", data.token);
      localStorage.setItem("divine_user",  JSON.stringify(data.user));
      currentUser = data.user;
      document.getElementById("inp-name").value  = "";
      document.getElementById("inp-email").value = "";
      document.getElementById("inp-pass").value  = "";
      renderDashboard();
      showPage("dashboard");
    })
    .catch(function(err){
      btn.disabled = false; updateSubmitBtn();
      showError("Cannot connect to server. Please make sure the backend is running on port 5000.");
      console.error("Auth fetch error:", err);
    });
}

/* ════════════════════════════════════════
   LOGOUT
   ════════════════════════════════════════ */
function logout() {
  localStorage.removeItem("divine_token");
  localStorage.removeItem("divine_user");
  currentUser = null; currentPerson = null;
  currentMode = "signup";
  document.getElementById("tab-signup").classList.add("active");
  document.getElementById("tab-login").classList.remove("active");
  document.getElementById("field-name").style.display = "block";
  document.getElementById("inp-name").value  = "";
  document.getElementById("inp-email").value = "";
  document.getElementById("inp-pass").value  = "";
  hideError(); updateSubmitBtn();
  // close all dropdowns
  document.querySelectorAll(".dash-dropdown").forEach(function(m){ m.classList.remove("open"); });
  showPage("auth");
}

/* ════════════════════════════════════════
   DASHBOARD
   ════════════════════════════════════════ */
function renderDashboard() {
  if (!currentUser) return;

  var name = currentUser.username || "Seeker";
  document.getElementById("welcome-name-text").textContent = name;

  // Profile avatar & dropdown name
  var initLetter = name.charAt(0).toUpperCase();
  var avatarInit = document.getElementById("profile-avatar-initials");
  var dropInit   = document.getElementById("profile-drop-initials");
  var dropName   = document.getElementById("profile-drop-name");
  if (avatarInit) avatarInit.textContent = initLetter;
  if (dropInit)   dropInit.textContent   = initLetter;
  if (dropName)   dropName.textContent   = name;

  // Profile avatar: only show image if user explicitly set a custom pfp
  var avatarImg = document.getElementById("profile-avatar-img");
  var dropImg   = document.getElementById("profile-drop-img");
  var avatarInitEl = document.getElementById("profile-avatar-initials");
  var dropInitEl   = document.getElementById("profile-drop-initials");
  if (currentUser.pfp) {
    if (avatarImg) { avatarImg.src = currentUser.pfp; avatarImg.style.display = "block"; }
    if (dropImg)   { dropImg.src   = currentUser.pfp; dropImg.style.display   = "block"; }
    if (avatarInitEl) avatarInitEl.style.display = "none";
    if (dropInitEl)   dropInitEl.style.display   = "none";
  } else {
    // No custom pfp — use default avatar image
    if (avatarImg)    { avatarImg.src = "default-avatar.png"; avatarImg.style.display = "block"; }
    if (dropImg)      { dropImg.src   = "default-avatar.png"; dropImg.style.display   = "block"; }
    if (avatarInitEl) avatarInitEl.style.display = "none";
    if (dropInitEl)   dropInitEl.style.display   = "none";
  }
  var logoImg = document.getElementById("dash-logo-pfp");
  if (logoImg && currentUser.pfp) logoImg.src = currentUser.pfp;

  var q = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  document.getElementById("dash-quote").textContent = "\u201c" + q + "\u201d";

  var grid = document.getElementById("cards-grid");
  grid.innerHTML = "";
  for (var i = 0; i < PERSONALITIES.length; i++) {
    grid.appendChild(buildCard(PERSONALITIES[i], i));
  }

  renderBookmarksList();
  applyStoredPrefs();
}

function showDashboard() {
  currentPerson = null;
  showPage("dashboard");
}

/* ════════════════════════════════════════
   BUILD CARD
   ════════════════════════════════════════ */
function buildCard(p, idx) {
  var card = document.createElement("div");
  card.className = "p-card";
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");

  card.innerHTML =
    '<div class="card-image-wrap">' +
      '<img class="card-img" src="' + p.image + '" alt="' + p.name + '" ' +
           'onerror="this.onerror=null;this.src=\'' + p.fallback + '\';" />' +
      '<div class="card-image-overlay"></div>' +
      '<div class="card-corner tl"></div><div class="card-corner tr"></div>' +
      '<div class="card-corner bl"></div><div class="card-corner br"></div>' +
    '</div>' +
    '<div class="card-body">' +
      '<h3 class="card-name">'  + p.name  + '</h3>' +
      '<p class="card-title">'  + p.title + '</p>' +
      '<div class="om-divider"><span></span><span class="om-icon">✦</span><span></span></div>' +
      '<p class="card-desc">'   + p.shortDesc + '</p>' +
      '<p class="card-read-more">✦ READ FULL BIOGRAPHY ✦</p>' +
    '</div>';

  card.onclick   = function () { showDetail(p); };
  card.onkeydown = function (e) { if (e.key === "Enter") showDetail(p); };
  return card;
}

/* ════════════════════════════════════════
   DETAIL PAGE
   ════════════════════════════════════════ */
function showDetail(person) {
  currentPerson = person;

  var metaHTML =
    metaRow("TRADITION", person.tradition) +
    metaRow("GURU",      person.guru)      +
    metaRow("BORN",      person.born)      +
    metaRow("LOCATION",  person.location);

  var bioHTML = "";
  for (var i = 0; i < person.bio.length; i++) {
    bioHTML += "<p>" + person.bio[i] + "</p>";
  }

  document.getElementById("detail-content").innerHTML =
    '<div class="detail-hero">' +
      '<div class="detail-image-frame">' +
        '<img src="' + person.image + '" alt="' + person.name + '" ' +
             'onerror="this.onerror=null;this.src=\'' + person.fallback + '\';" />' +
      '</div>' +
      '<div class="detail-info">' +
        '<h1 class="detail-name">'      + person.name  + '</h1>' +
        '<p class="detail-title-text">' + person.title + '</p>' +
        '<div class="om-divider"><span></span><span class="om-icon">✦</span><span></span></div>' +
        '<div style="margin-top:18px;">' + metaHTML + '</div>' +
      '</div>' +
    '</div>' +

    '<div class="detail-quote-box">' +
      '<p class="detail-quote-text">\u201c' + person.quote + '\u201d</p>' +
    '</div>' +

    '<div class="om-divider"><span></span><span class="om-icon">✦</span><span></span></div>' +
    '<h3 class="bio-section-title" style="margin-top:22px;">📖 LIFE &amp; TEACHINGS</h3>' +
    '<div class="bio-text">' + bioHTML + '</div>' +

    buildBooksSection(person) +

    '<div class="comment-section" id="comment-section-' + person.id + '">' +
      '<h3 class="comment-heading">💬 Devotee Reflections</h3>' +
      '<div class="om-divider"><span></span><span class="om-icon">✦</span><span></span></div>' +
      '<div style="margin-top:16px;">' +
        '<textarea class="comment-textarea" id="comment-input-' + person.id + '"' +
          ' placeholder="Share your thoughts or reverence\u2026" rows="4"></textarea>' +
        '<button class="comment-submit-btn" id="comment-btn-' + person.id + '" onclick="submitComment(' + person.id + ')">' +
          '🙏 OFFER REFLECTION' +
        '</button>' +
      '</div>' +
      '<div class="comment-list" id="comment-list-' + person.id + '">' +
        '<p class="comment-empty">Loading reflections\u2026</p>' +
      '</div>' +
    '</div>';

  fetchComments(person.id);
  showPage("detail");
}

function metaRow(label, value) {
  return '<div class="meta-row"><span class="meta-label">' + label + '</span><span class="meta-value">' + value + '</span></div>';
}

/* ════════════════════════════════════════
   BOOKS
   ════════════════════════════════════════ */
function buildBooksSection(person) {
  var books = BOOKS[person.id];
  if (!books || !books.length) return "";

  var cards = books.map(function(book) {
    var id    = person.id + "::" + book.title;
    var saved = bookmarks.some(function(b){ return b.id === id; });
    return '<div class="book-card">' +
      '<div class="book-cover-emoji">' + book.emoji + '</div>' +
      '<div class="book-info">' +
        '<div class="book-title">'  + escapeHTML(book.title)  + '</div>' +
        '<div class="book-author">' + escapeHTML(book.author) + '</div>' +
        '<button class="book-save-btn' + (saved ? ' saved' : '') + '" ' +
          'onclick="handleBookSave(' + person.id + ',\'' + book.title.replace(/'/g,"\\'") + '\',\'' + book.author.replace(/'/g,"\\'") + '\',\'' + book.emoji + '\',this)">' +
          (saved ? '🔖 SAVED' : '✦ SAVE') +
        '</button>' +
      '</div>' +
    '</div>';
  }).join('');

  return '<div class="books-section">' +
    '<h3 class="books-section-title">📚 BOOKS &amp; TEACHINGS</h3>' +
    '<div class="om-divider"><span></span><span class="om-icon">✦</span><span></span></div>' +
    '<div class="books-row" style="margin-top:16px;">' + cards + '</div>' +
  '</div>';
}

function handleBookSave(pid, title, author, emoji, btnEl) {
  var id  = pid + "::" + title;
  var idx = bookmarks.findIndex(function(b){ return b.id === id; });
  if (idx > -1) {
    bookmarks.splice(idx, 1);
    btnEl.textContent = "✦ SAVE";
    btnEl.classList.remove("saved");
    showToast("Bookmark removed");
  } else {
    bookmarks.push({ id: id, pid: pid, title: title, author: author, emoji: emoji });
    btnEl.textContent = "🔖 SAVED";
    btnEl.classList.add("saved");
    showToast("Saved to bookmarks!");
  }
  saveBookmarks();
  renderBookmarksList();
}

/* ════════════════════════════════════════
   BOOKMARKS
   ════════════════════════════════════════ */
function loadBookmarks() {
  try { return JSON.parse(localStorage.getItem("ds_bookmarks") || "[]"); }
  catch(e) { return []; }
}
function saveBookmarks() {
  localStorage.setItem("ds_bookmarks", JSON.stringify(bookmarks));
}
function removeBookmark(id) {
  bookmarks = bookmarks.filter(function(b){ return b.id !== id; });
  saveBookmarks();
  renderBookmarksList();
}
function renderBookmarksList() {
  var el = document.getElementById("bookmarks-list");
  if (!el) return;
  if (!bookmarks.length) {
    el.innerHTML = '<p class="dash-empty-msg">No saved books yet.</p>';
    return;
  }
  el.innerHTML = bookmarks.map(function(b) {
    return '<div class="bookmark-entry">' +
      '<span class="bookmark-emoji">' + b.emoji + '</span>' +
      '<div class="bookmark-info">' +
        '<strong>' + escapeHTML(b.title)  + '</strong>' +
        '<span>'   + escapeHTML(b.author) + '</span>' +
      '</div>' +
      '<button class="bookmark-remove" onclick="removeBookmark(\'' + b.id.replace(/'/g,"\\'") + '\')">✕</button>' +
    '</div>';
  }).join('');
}

/* ════════════════════════════════════════
   COMMENTS
   ════════════════════════════════════════ */
function fetchComments(pid) {
  var list = document.getElementById("comment-list-" + pid);
  if (!list) return;
  fetch(API_BASE + "/comments?personalityId=" + pid)
    .then(function(res){ return res.json(); })
    .then(function(data){
      if (!data.success) { list.innerHTML = '<p class="comment-empty">Could not load reflections.</p>'; return; }
      renderComments(pid, data.comments);
    })
    .catch(function(){
      if (list) list.innerHTML = '<p class="comment-empty">Server offline — reflections unavailable.</p>';
    });
}

function submitComment(pid) {
  var input = document.getElementById("comment-input-" + pid);
  var text  = input ? input.value.trim() : "";
  if (!text) return;
  var token = localStorage.getItem("divine_token");
  if (!token) { alert("Please log in to share a reflection."); return; }
  var btn = document.getElementById("comment-btn-" + pid);
  if (btn) { btn.disabled = true; btn.textContent = "⏳ Submitting…"; }
  fetch(API_BASE + "/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
    body: JSON.stringify({ personalityId: pid, commentText: text })
  })
    .then(function(res){ return res.json(); })
    .then(function(data){
      if (btn) { btn.disabled = false; btn.textContent = "🙏 OFFER REFLECTION"; }
      if (!data.success) { alert(data.message || "Could not post reflection."); return; }
      if (input) input.value = "";
      fetchComments(pid);
    })
    .catch(function(){
      if (btn) { btn.disabled = false; btn.textContent = "🙏 OFFER REFLECTION"; }
      alert("Cannot connect to server.");
    });
}

function renderComments(pid, comments) {
  var list = document.getElementById("comment-list-" + pid);
  if (!list) return;
  if (!comments || !comments.length) {
    list.innerHTML = '<p class="comment-empty">Be the first to offer a reflection.</p>';
    return;
  }
  var html = "";
  for (var i = 0; i < comments.length; i++) {
    var c = comments[i];
    var timeStr = "";
    if (c.createdAt) {
      timeStr = new Date(c.createdAt).toLocaleString("en-IN", {
        day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit"
      });
    }
    html += '<div class="comment-item">' +
      '<div class="comment-user">🪷 ' + escapeHTML(c.username)    + '</div>' +
      '<p class="comment-body">'       + escapeHTML(c.commentText) + '</p>' +
      '<div class="comment-time">'     + timeStr                   + '</div>' +
    '</div>';
  }
  list.innerHTML = html;
}

/* ════════════════════════════════════════
   DROPDOWNS (settings / profile)
   ════════════════════════════════════════ */
function toggleDashDropdown(wrapId) {
  var wrap = document.getElementById(wrapId);
  var menu = wrap.querySelector(".dash-dropdown");
  var wasOpen = menu.classList.contains("open");
  document.querySelectorAll(".dash-dropdown").forEach(function(m){ m.classList.remove("open"); });
  if (!wasOpen) menu.classList.add("open");
}

/* ════════════════════════════════════════
   ACCORDION
   ════════════════════════════════════════ */
function toggleDashAccordion(id) {
  var body = document.getElementById(id);
  if (!body) return;
  body.classList.toggle("open");
  var caret = body.previousElementSibling && body.previousElementSibling.querySelector(".acc-caret");
  if (caret) caret.style.transform = body.classList.contains("open") ? "rotate(90deg)" : "";
}

/* ════════════════════════════════════════
   SETTINGS — dark mode, font size, compact, quote
   ════════════════════════════════════════ */
function applyStoredPrefs() {
  // Dark mode
  var dark = localStorage.getItem("ds_dark") === "1";
  document.body.classList.toggle("dark-mode", dark);
  document.querySelectorAll(".dash-toggle[id*='darkMode']").forEach(function(t){
    t.classList.toggle("active", dark);
  });

  // Large font
  var large = localStorage.getItem("ds_font") === "1";
  document.body.classList.toggle("large-font", large);
  document.querySelectorAll(".dash-toggle[id*='font']").forEach(function(t){
    t.classList.toggle("active", large);
  });

  // Compact cards
  var compact = localStorage.getItem("ds_compact") === "1";
  document.body.classList.toggle("compact-cards", compact);
  var ct = document.getElementById("compactToggle");
  if (ct) ct.classList.toggle("active", compact);

  // Quote
  var hideQuote = localStorage.getItem("ds_quote") === "0";
  var strip = document.querySelector(".quote-strip");
  if (strip) strip.style.display = hideQuote ? "none" : "";
  var qt = document.getElementById("quoteToggle");
  if (qt) qt.classList.toggle("active", !hideQuote);
}

function toggleDarkMode() {
  var isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("ds_dark", isDark ? "1" : "0");
  document.querySelectorAll(".dash-toggle[id*='darkMode']").forEach(function(t){
    t.classList.toggle("active", isDark);
  });
}

function toggleFontSize() {
  var large = document.body.classList.toggle("large-font");
  localStorage.setItem("ds_font", large ? "1" : "0");
  document.querySelectorAll(".dash-toggle[id*='font']").forEach(function(t){
    t.classList.toggle("active", large);
  });
}

function toggleCompactCards() {
  var on = document.body.classList.toggle("compact-cards");
  localStorage.setItem("ds_compact", on ? "1" : "0");
  var ct = document.getElementById("compactToggle");
  if (ct) ct.classList.toggle("active", on);
}

function toggleQuoteStrip() {
  var strip = document.querySelector(".quote-strip");
  if (!strip) return;
  var hidden = strip.style.display === "none";
  strip.style.display = hidden ? "" : "none";
  localStorage.setItem("ds_quote", hidden ? "1" : "0");
  var qt = document.getElementById("quoteToggle");
  if (qt) qt.classList.toggle("active", hidden);
}

function resetPreferences() {
  ["ds_dark","ds_font","ds_compact","ds_quote"].forEach(function(k){ localStorage.removeItem(k); });
  document.body.classList.remove("dark-mode","large-font","compact-cards");
  var strip = document.querySelector(".quote-strip");
  if (strip) strip.style.display = "";
  applyStoredPrefs();
  showToast("Preferences reset");
}

/* ════════════════════════════════════════
   PROFILE ACCOUNT SETTINGS
   ════════════════════════════════════════ */
function saveDisplayName() {
  var val = document.getElementById("new-display-name").value.trim();
  if (!val || !currentUser) return;
  currentUser.username = val;
  localStorage.setItem("divine_user", JSON.stringify(currentUser));
  document.getElementById("welcome-name-text").textContent = val;
  var dn = document.getElementById("profile-drop-name");
  var ai = document.getElementById("profile-avatar-initials");
  var di = document.getElementById("profile-drop-initials");
  if (dn) dn.textContent = val;
  if (ai) ai.textContent = val.charAt(0).toUpperCase();
  if (di) di.textContent = val.charAt(0).toUpperCase();
  document.getElementById("new-display-name").value = "";
  showToast("Display name updated!");
}

function savePfpUrl() {
  var val = document.getElementById("new-pfp-url").value.trim();
  if (!val || !currentUser) return;
  currentUser.pfp = val;
  localStorage.setItem("divine_user", JSON.stringify(currentUser));
  var ai = document.getElementById("profile-avatar-img");
  var di = document.getElementById("profile-drop-img");
  var li = document.getElementById("dash-logo-pfp");
  if (ai) { ai.style.display = "block"; ai.src = val; }
  if (di) { di.style.display = "block"; di.src = val; }
  if (li) li.src = val;
  document.getElementById("new-pfp-url").value = "";
  showToast("Profile picture updated!");
}

/* ════════════════════════════════════════
   TOAST
   ════════════════════════════════════════ */
var _toastTimer;
function showToast(msg) {
  var toast = document.getElementById("ds-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "ds-toast";
    toast.className = "ds-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(function(){ toast.classList.remove("show"); }, 2600);
}

/* ════════════════════════════════════════
   HELPERS
   ════════════════════════════════════════ */
function safeJSON(key) {
  try { return JSON.parse(localStorage.getItem(key)); }
  catch(e) { return null; }
}

function escapeHTML(str) {
  var d = document.createElement("div");
  d.appendChild(document.createTextNode(String(str || "")));
  return d.innerHTML;
}

function showError(msg) {
  var el = document.getElementById("auth-error");
  if (el) { el.textContent = msg; el.style.display = "block"; }
}

function hideError() {
  var el = document.getElementById("auth-error");
  if (el) el.style.display = "none";
}

document.addEventListener("keydown", function(e) {
  if (e.key !== "Enter") return;
  var authPage = document.getElementById("page-auth");
  if (authPage && authPage.classList.contains("active")) handleAuth();
});

/* ════════════════════════════════════════
   SEARCH — personalities + books
   ════════════════════════════════════════ */
function filterPersonalities(query) {
  var q = query.trim().toLowerCase();
  var clearBtn = document.getElementById("search-clear-btn");
  var noResults = document.getElementById("search-no-results");
  if (clearBtn) clearBtn.style.display = q ? "block" : "none";

  var cards = document.querySelectorAll("#cards-grid .p-card");
  var visibleCount = 0;

  cards.forEach(function(card, idx) {
    var person = PERSONALITIES[idx];
    if (!person) return;

    // Match against name, title, shortDesc, and book titles
    var searchText = [
      person.name,
      person.title,
      person.shortDesc,
      person.tradition,
      person.location
    ].join(" ").toLowerCase();

    // Also search book titles for this personality
    var books = BOOKS[person.id] || [];
    books.forEach(function(b) {
      searchText += " " + b.title.toLowerCase() + " " + b.author.toLowerCase();
    });

    var match = !q || searchText.indexOf(q) !== -1;
    card.style.display = match ? "" : "none";
    if (match) visibleCount++;
  });

  if (noResults) noResults.style.display = (q && visibleCount === 0) ? "block" : "none";
}

function clearSearch() {
  var input = document.getElementById("personality-search");
  if (input) { input.value = ""; input.focus(); }
  filterPersonalities("");
}
