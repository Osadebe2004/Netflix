/* =====================================================
   NETFLIX CLONE - JAVASCRIPT
   Compatible with the provided HTML structure
===================================================== */


/* =====================================================
   MOVIES DATA
===================================================== */

const movies = {

  anikulapo: {
    title: "Anikulapo",
    type: "Movie",
    year: "2022",
    rating: "16+",
    duration: "2h 22m",
    quality: "HD",
    creator: "Kunle Afolayan",
    cast: "Kunle Remi, Bimbo Ademoye, Sola Sobowale",
    genre: "Nigerian, Drama, Fantasy",
    country: "Nigeria",
    description:
      "A young man becomes involved with a powerful woman and discovers a mysterious supernatural gift that changes his life.",
    poster:
      "Netflix_images/img12.JPG",
    trailer:"https://www.youtube.com/embed/rXIKrHPaB-o"
  },

  kingofboys: {
    title: "King of Boys",
    type: "Movie",
    year: "2018",
    rating: "16+",
    duration: "2h 49m",
    quality: "HD",
    creator: "Kemi Adetiba",
    cast: "Sola Sobowale, Adesua Etomi, Richard Mofe-Damijo",
    genre: "Crime, Drama",
    country: "Nigeria",
    description:
      "A powerful businesswoman and political figure finds her empire threatened by enemies from both inside and outside her organization.",
    poster:
      "Netflix_images/img25.JPG",
    trailer: "https://www.youtube.com/embed/cF-FQLKaUCk"
  },

  brotherhood: {
    title: "Brotherhood",
    type: "Movie",
    year: "2022",
    rating: "16+",
    duration: "1h 53m",
    quality: "HD",
    creator: "Loukman Ali",
    cast: "Tobi Bakre, Falz, Toni Tones",
    genre: "Action, Crime, Drama",
    country: "Nigeria",
    description:
      "Two brothers find themselves on opposite sides of the law after choosing very different paths in life.",
    poster:
      "Netflix_images/img26.JPG",
    trailer: "https://www.youtube.com/embed/42HhowRmTSE"
  },

  weddingparty: {
    title: "The Wedding Party",
    type: "Movie",
    year: "2016",
    rating: "13+",
    duration: "1h 36m",
    quality: "HD",
    creator: "Kemi Adetiba",
    cast: "Adesua Etomi, Banky W, Sola Sobowale",
    genre: "Comedy, Romance",
    country: "Nigeria",
    description:
      "A wedding celebration turns into a hilarious disaster when family drama and unexpected guests take over the big day.",
    poster:
      "Netflix_images/img27.JPG",
    trailer: "https://www.youtube.com/embed/M8XaN1DtI7E"
  },

  bloodsisters: {
    title: "Blood Sisters",
    type: "Series",
    year: "2022",
    rating: "16+",
    duration: "4 Episodes",
    quality: "HD",
    creator: "Temidayo Abudu",
    cast: "Nancy Isime, Ini Dima-Okojie, Kate Henshaw",
    genre: "Drama, Thriller",
    country: "Nigeria",
    description:
      "Two best friends become fugitives after a wealthy groom mysteriously dies on his wedding day.",
    poster:
      "Netflix_images/img28.JPG",
    trailer: "https://www.youtube.com/embed/gmvZZ7MpOC8"
  },

  bloodandwater: {
    title: "Blood & Water",
    type: "Series",
    year: "2020",
    rating: "16+",
    duration: "4 Seasons",
    quality: "HD",
    creator: "Nosipho Dumisa",
    cast: "Ama Qamata, Khosi Ngema, Gail Mabalane",
    genre: "Teen, Drama, Mystery",
    country: "South Africa",
    description:
      "A teenager transfers to an elite school and begins investigating whether one of the students is her abducted sister.",
    poster:
      "Netflix_images/img24.JPG",
    trailer: "https://www.youtube.com/embed/2m0Cm2kMOBU"
  },

  queensono: {
    title: "Queen Sono",
    type: "Series",
    year: "2020",
    rating: "16+",
    duration: "2 Seasons",
    quality: "HD",
    creator: "Kagiso Lediga",
    cast: "Pearl Thusi, Vuyo Dabula, Kate Liquorish",
    genre: "Action, Drama",
    country: "South Africa",
    description:
      "A skilled spy takes on dangerous missions while uncovering secrets connected to her mother's past.",
    poster:
      "Netflix_images/img29.JPG",
    trailer: "https://www.youtube.com/embed/1zgxDFEifyI"
  },

  silvertonsiege: {
    title: "Silverton Siege",
    type: "Movie",
    year: "2022",
    rating: "16+",
    duration: "1h 40m",
    quality: "HD",
    creator: "Mandla Dube",
    cast: "Arnold Vosloo, Thabo Rametsi, Noxolo Dlamini",
    genre: "Action, Thriller",
    country: "South Africa",
    description:
      "A group of freedom fighters takes a bank hostage and demands the release of Nelson Mandela.",
    poster:
      "Netflix_images/img30.JPG",
    trailer: "https://www.youtube.com/embed/L23I_XopoA0"
  },

  parasite: {
    title: "Parasite",
    type: "Movie",
    year: "2019",
    rating: "16+",
    duration: "2h 12m",
    quality: "HD",
    creator: "Bong Joon Ho",
    cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
    genre: "Drama, Thriller",
    country: "South Korea",
    description:
      "A struggling family slowly becomes involved with a wealthy household, leading to unexpected consequences.",
    poster:
      "Netflix_images/img23.JPG",
    trailer: "https://www.youtube.com/embed/PhPROyE0OaM"
  },

  rrr: {
    title: "RRR",
    type: "Movie",
    year: "2022",
    rating: "16+",
    duration: "3h 7m",
    quality: "HD",
    creator: "S. S. Rajamouli",
    cast: "N. T. Rama Rao Jr., Ram Charan, Alia Bhatt",
    genre: "Action, Drama",
    country: "India",
    description:
      "Two legendary revolutionaries form an unexpected friendship while fighting against British rule.",
    poster:
      "Netflix_images/img31.JPG",
    trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
  },

  dangal: {
    title: "Dangal",
    type: "Movie",
    year: "2016",
    rating: "13+",
    duration: "2h 41m",
    quality: "HD",
    creator: "Nitesh Tiwari",
    cast: "Aamir Khan, Fatima Sana Shaikh, Sanya Malhotra",
    genre: "Drama, Sport",
    country: "India",
    description:
      "A former wrestler trains his daughters to become world-class wrestlers despite social opposition.",
    poster:
      "Netflix_images/img32.JPG",
    trailer: "https://www.youtube.com/embed/x_7YlGv9u1g"
  },

  lupin: {
    title: "Lupin",
    type: "Series",
    year: "2021",
    rating: "16+",
    duration: "3 Parts",
    quality: "HD",
    creator: "George Kay",
    cast: "Omar Sy, Ludivine Sagnier, Clotilde Hesme",
    genre: "Crime, Mystery, Drama",
    country: "France",
    description:
      "A gentleman thief uses his intelligence and charm to investigate an injustice against his father.",
    poster:
      "Netflix_images/img22.JPG",
    trailer: "https://www.youtube.com/embed/ga0iTWXCGa0"
  },

  aliceinborderland: {
    title: "Alice in Borderland",
    type: "Series",
    year: "2020",
    rating: "16+",
    duration: "3 Seasons",
    quality: "HD",
    creator: "Shinsuke Sato",
    cast: "Kento Yamazaki, Tao Tsuchiya",
    genre: "Sci-Fi, Thriller",
    country: "Japan",
    description:
      "A group of young people must compete in dangerous games to survive in a mysterious parallel Tokyo.",
    poster:
      "Netflix_images/img33.JPG",
    trailer: "https://www.youtube.com/embed/49_44FFKZ1M"
  },

  moneyheist: {
    title: "Money Heist",
    type: "Series",
    year: "2017",
    rating: "16+",
    duration: "5 Parts",
    quality: "HD",
    creator: "Álex Pina",
    cast: "Úrsula Corberó, Álvaro Morte, Itziar Ituño",
    genre: "Crime, Thriller",
    country: "Spain",
    description:
      "A mysterious mastermind recruits a group of criminals for an ambitious series of heists.",
    poster:
      "Netflix_images/img18.JPG",
    trailer: "https://www.youtube.com/embed/_InqQJRqGW4"
  },

  peaky: {
    title: "Peaky Blinders",
    type: "Series",
    year: "2013",
    rating: "18+",
    duration: "6 Seasons",
    quality: "HD",
    creator: "Steven Knight",
    cast: "Cillian Murphy, Paul Anderson, Helen McCrory",
    genre: "Crime, Drama",
    country: "United Kingdom",
    description:
      "A dangerous gang leader expands his family's criminal empire in post-war Birmingham.",
    poster:
      "Netflix_images/img34.JPG",
    trailer: "https://www.youtube.com/embed/lcvUGs3xaDM"
  },

  hangover: {
    title: "The Hangover",
    type: "Movie",
    year: "2009",
    rating: "18+",
    duration: "1h 40m",
    quality: "HD",
    creator: "Todd Phillips",
    cast: "Bradley Cooper, Zach Galifianakis, Ed Helms",
    genre: "Comedy",
    country: "USA",
    description:
      "Three friends wake up after a wild night in Las Vegas and must figure out what happened.",
    poster:
      "Netflix_images/img21.JPG",
    trailer: "https://www.youtube.com/embed/tlize92ffnY"
  },

  gamenight: {
    title: "Game Night",
    type: "Movie",
    year: "2018",
    rating: "16+",
    duration: "1h 40m",
    quality: "HD",
    creator: "John Francis Daley",
    cast: "Jason Bateman, Rachel McAdams, Kyle Chandler",
    genre: "Comedy, Mystery",
    country: "USA",
    description:
      "A regular game night becomes a real-life mystery when one of the players is kidnapped.",
    poster:
      "Netflix_images/img35.JPG",
    trailer: "https://www.youtube.com/embed/fNtLIcyjsnI"
  },

  strangerthings: {
    title: "Stranger Things",
    type: "Series",
    year: "2016",
    rating: "16+",
    duration: "5 Seasons",
    quality: "HD",
    creator: "The Duffer Brothers",
    cast: "Millie Bobby Brown, Finn Wolfhard, David Harbour",
    genre: "Drama, Fantasy, Horror",
    country: "USA",
    description:
      "A group of young friends uncover supernatural mysteries in their small town.",
    poster:
      "Netflix_images/img19.JPG",
    trailer: "https://www.youtube.com/embed/b9EkMc79ZSU"
  },

  blackpanther: {
    title: "Black Panther",
    type: "Movie",
    year: "2018",
    rating: "13+",
    duration: "2h 14m",
    quality: "HD",
    creator: "Ryan Coogler",
    cast: "Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o",
    genre: "Action, Adventure",
    country: "USA",
    description:
      "A new king must protect his nation while facing an old enemy who challenges his claim to the throne.",
    poster:
      "Netflix_images/img20.WEBP",
    trailer: "https://www.youtube.com/embed/xjDjIWPwcPU"
  }

};


/* =====================================================
   ROWS
===================================================== */

const rows = {
  continueWatching: ["moneyheist", "strangerthings", "bloodandwater", "lupin"],
  topPicks: ["blackpanther", "anikulapo", "parasite", "rrr", "dangal", "kingofboys"],
  hollywood: ["blackpanther", "hangover", "gamenight", "strangerthings", "peaky"],
  comedy: ["hangover", "gamenight", "weddingparty", "brotherhood"],
  becauseWatched: ["moneyheist", "lupin", "aliceinborderland", "bloodsisters"],
  newNetflix: ["anikulapo", "silvertonsiege", "bloodsisters", "gamenight", "rrr"],
  southAfrica: ["bloodandwater", "queensono", "silvertonsiege"],
  international: ["parasite", "rrr", "dangal", "aliceinborderland", "lupin"],
  nigerian: ["anikulapo", "kingofboys", "brotherhood", "weddingparty", "bloodsisters"],
  series: ["strangerthings", "moneyheist", "peaky", "lupin", "aliceinborderland", "bloodandwater"]
};


/* =====================================================
   STATE
===================================================== */

let selectedPlan = { name: "Basic", price: 7000 };
let currentMovieId = null;
let activeProfile = null;
let manageMode = false;


/* =====================================================
   HELPERS
===================================================== */

function hideAllPages() {
  document.querySelectorAll(".page").forEach(function (el) {
    el.classList.add("hidden");
  });
  var mainApp = document.getElementById("mainApp");
  if (mainApp) mainApp.classList.add("hidden");
}

function showEl(id) {
  var el = document.getElementById(id);
  if (el) el.classList.remove("hidden");
}

function hideEl(id) {
  var el = document.getElementById(id);
  if (el) el.classList.add("hidden");
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showLanding() {
  hideAllPages();
  showEl("landingPage");
  closeAllMenus();
}

function showPlans() {
  hideAllPages();
  showEl("plansPage");
}

function showSignIn() {
  hideAllPages();
  showEl("signinPage");
  var msg = document.getElementById("loginMessage");
  if (msg) msg.textContent = "";
}

function showPayment() {
  hideAllPages();
  showEl("paymentPage");
  var text = document.getElementById("selectedPlanText");
  if (text) {
    text.textContent =
      selectedPlan.name + " — ₦" + selectedPlan.price.toLocaleString() + "/month";
  }
}

function showProfiles() {
  hideAllPages();
  showEl("profilesPage");
  renderProfiles();
}


/* =====================================================
   ACCOUNT / LOCAL STORAGE
===================================================== */

function getAccount() {
  try {
    return JSON.parse(localStorage.getItem("netflixAccount") || "null");
  } catch (e) {
    return null;
  }
}

function saveAccount(account) {
  localStorage.setItem("netflixAccount", JSON.stringify(account));
}

function getProfiles() {
  var account = getAccount();
  return account && account.profiles ? account.profiles : [];
}

function saveProfiles(profiles) {
  var account = getAccount();
  if (!account) return;
  account.profiles = profiles;
  saveAccount(account);
}

function getMyList() {
  try {
    return JSON.parse(localStorage.getItem("myNetflixList") || "[]");
  } catch (e) {
    return [];
  }
}

function saveMyList(list) {
  localStorage.setItem("myNetflixList", JSON.stringify(list));
}


/* =====================================================
   PLANS & PAYMENT
===================================================== */

function selectPlan(name, price) {
  selectedPlan = { name: name, price: price };
  showPayment();
}

function completePayment() {
  var nameEl = document.getElementById("paymentName");
  var emailEl = document.getElementById("paymentEmail");
  var passwordEl = document.getElementById("paymentPassword");

  var name = nameEl ? nameEl.value.trim() : "";
  var email = emailEl ? emailEl.value.trim() : "";
  var password = passwordEl ? passwordEl.value.trim() : "";

  if (!name || !email || !password) {
    alert("Please fill in all the details.");
    return;
  }

  var account = {
    name: name,
    email: email,
    password: password,
    plan: selectedPlan,
    profiles: [
      {
        id: 1,
        name: name.split(" ")[0] || "User",
        color: "#e50914"
      }
    ]
  };

  saveAccount(account);
  localStorage.setItem("myNetflixList", "[]");
  showProfiles();
}


/* =====================================================
   SIGN IN
===================================================== */

function login() {
  var emailEl = document.getElementById("loginEmail");
  var passwordEl = document.getElementById("loginPassword");
  var msg = document.getElementById("loginMessage");

  var email = emailEl ? emailEl.value.trim() : "";
  var password = passwordEl ? passwordEl.value.trim() : "";

  var account = getAccount();

  if (!account) {
    if (msg) msg.textContent = "No account found. Please sign up first.";
    return;
  }

  if (email === account.email && password === account.password) {
    showProfiles();
  } else {
    if (msg) msg.textContent = "Incorrect email or password.";
  }
}


/* =====================================================
   PROFILES
===================================================== */

function renderProfiles() {
  var container = document.getElementById("profilesContainer");
  if (!container) return;

  container.innerHTML = "";
  var profiles = getProfiles();

  profiles.forEach(function (profile, index) {
    var card = document.createElement("div");
    card.className = "profile-card";

    var color = profile.color || "#333";
    var initial = (profile.name || "U").charAt(0).toUpperCase();

    card.innerHTML =
      '<div class="profile-avatar" style="background:' +
      color +
      '">' +
      escapeHTML(initial) +
      "</div>" +
      '<div class="profile-name">' +
      escapeHTML(profile.name) +
      "</div>" +
      (manageMode
        ? '<button class="profile-delete" onclick="event.stopPropagation(); deleteProfile(' +
          index +
          ')"><i class="fa-solid fa-xmark"></i></button>'
        : "");

    if (!manageMode) {
      card.onclick = function () {
        selectProfile(index);
      };
    }

    container.appendChild(card);
  });
}

function selectProfile(index) {
  if (manageMode) return;
  var profiles = getProfiles();
  if (!profiles[index]) return;

  activeProfile = profiles[index];
  localStorage.setItem("activeProfile", JSON.stringify(activeProfile));
  enterMainApp();
}

function addProfile() {
  var profiles = getProfiles();
  if (profiles.length >= 5) {
    alert("You can have up to 5 profiles.");
    return;
  }

  var name = prompt("Enter profile name:");
  if (!name || !name.trim()) return;

  var colors = ["#e50914", "#0071eb", "#46d369", "#f5c518", "#b20710"];
  var maxId = 0;
  profiles.forEach(function (p) {
    if ((p.id || 0) > maxId) maxId = p.id;
  });

  profiles.push({
    id: maxId + 1,
    name: name.trim(),
    color: colors[profiles.length % colors.length]
  });

  saveProfiles(profiles);
  renderProfiles();
}

function deleteProfile(index) {
  var profiles = getProfiles();
  if (profiles.length <= 1) {
    alert("You need to keep at least one profile.");
    return;
  }

  if (!confirm("Are you sure you want to delete this profile?")) return;

  profiles.splice(index, 1);
  saveProfiles(profiles);
  renderProfiles();
}

function toggleManageProfiles() {
  manageMode = !manageMode;
  var btn = document.querySelector(".manage-profile-btn");
  if (btn) {
    btn.innerHTML = manageMode
      ? '<i class="fa-solid fa-check"></i> Done'
      : '<i class="fa-solid fa-pen"></i> Manage Profiles';
  }
  renderProfiles();
}


/* =====================================================
   MAIN APP
===================================================== */

function enterMainApp() {
  hideAllPages();
  var app = document.getElementById("mainApp");
  if (app) app.classList.remove("hidden");

  if (activeProfile) {
    var avatar = document.getElementById("navProfileAvatar");
    if (avatar) {
      avatar.textContent = (activeProfile.name || "N").charAt(0).toUpperCase();
    }
  }

  showHome();
}

function showHome() {
  closeAllMenus();
  showEl("heroSection");
  showEl("homeContent");
  hideEl("searchResults");
  hideEl("gamesSection");
  renderAllRows();
}

function showGames() {
  closeAllMenus();
  hideEl("heroSection");
  hideEl("homeContent");
  hideEl("searchResults");
  showEl("gamesSection");
}

function showNewPopular() {
  closeAllMenus();
  showHome();
  setTimeout(function () {
    var track = document.getElementById("track-newNetflix");
    if (track) {
      track.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, 150);
}

function showMyNetflix() {
  closeAllMenus();
  hideEl("heroSection");
  showEl("homeContent");
  hideEl("searchResults");
  hideEl("gamesSection");

  var container = document.getElementById("movieRows");
  if (!container) return;
  container.innerHTML = "";
  createRow(container, "My List", getMyList(), "myList");
}

function filterByType(type) {
  closeAllMenus();
  hideEl("heroSection");
  hideEl("homeContent");
  hideEl("gamesSection");
  showEl("searchResults");

  var title = document.getElementById("searchTitle");
  var grid = document.getElementById("searchGrid");
  if (!grid) return;

  var label = type === "movie" || type === "Movie" ? "Movies" : "TV Shows";
  if (title) title.textContent = label;

  var matchType = type === "movie" || type === "Movie" ? "Movie" : "Series";
  grid.innerHTML = "";

  Object.keys(movies).forEach(function (id) {
    var m = movies[id];
    if (m.type === matchType) {
      grid.appendChild(createMovieCard(id, m));
    }
  });
}


/* =====================================================
   RENDER ROWS
===================================================== */

function renderAllRows() {
  var container = document.getElementById("movieRows");
  if (!container) return;
  container.innerHTML = "";

  var profileName = activeProfile ? activeProfile.name : "You";

  createRow(container, "Continue Watching for " + profileName, rows.continueWatching, "continueWatching");
   createRankedRow(container, "Top Movies in Nigeria Today");
  createRow(container, "Today's Top Picks for You", rows.topPicks, "topPicks");
  createRow(container, "Hollywood Dramas", rows.hollywood, "hollywood");
  createRow(container, "Goofy Comedy Movies", rows.comedy, "comedy");
  createRow(container, "Because You Watched Money Heist", rows.becauseWatched, "becauseWatched");
  createRow(container, "New on Netflix", rows.newNetflix, "newNetflix");
  createRow(container, "South African Stories", rows.southAfrica, "southAfrica");
  createRow(container, "International Favorites", rows.international, "international");
  createRow(container, "Nigerian Movies & Series", rows.nigerian, "nigerian");
  createRow(container, "Popular Series", rows.series, "series");
  createRow(container, "My List", getMyList(), "myList");
}

function createRow(container, title, movieIds, rowId) {
  if (!movieIds || movieIds.length === 0) return;

  var section = document.createElement("div");
  section.className = "movie-row";

  section.innerHTML =
    '<div class="row-heading">' +
    "<h2>" +
    escapeHTML(title) +
    "</h2>" +
    '<div class="row-controls">' +
    '<button class="row-arrow" onclick="scrollRow(\'' +
    rowId +
    '\', -1)" aria-label="Previous">' +
    '<i class="fa-solid fa-chevron-left"></i></button>' +
    '<button class="row-arrow" onclick="scrollRow(\'' +
    rowId +
    '\', 1)" aria-label="Next">' +
    '<i class="fa-solid fa-chevron-right"></i></button>' +
    "</div>" +
    "</div>" +
    '<div class="movie-track" id="track-' +
    rowId +
    '"></div>';

  container.appendChild(section);

  var track = section.querySelector("#track-" + rowId);
  movieIds.forEach(function (id) {
    var movie = movies[id];
    if (movie) track.appendChild(createMovieCard(id, movie));
  });
}

function createRankedRow(container, title) {
  var rankedIds = [
    "anikulapo",
    "kingofboys",
    "blackpanther",
    "bloodsisters",
    "rrr",
    "parasite",
    "moneyheist",
    "strangerthings",
    "dangal",
    "weddingparty"
  ];

  var section = document.createElement("div");
  section.className = "movie-row";

  section.innerHTML =
    '<div class="row-heading">' +
    "<h2>" +
    escapeHTML(title) +
    "</h2>" +
    '<div class="row-controls">' +
    '<button class="row-arrow" onclick="scrollRow(\'ranked\', -1)"><i class="fa-solid fa-chevron-left"></i></button>' +
    '<button class="row-arrow" onclick="scrollRow(\'ranked\', 1)"><i class="fa-solid fa-chevron-right"></i></button>' +
    "</div>" +
    "</div>" +
    '<div class="movie-track" id="track-ranked"></div>';

  container.appendChild(section);

  var track = section.querySelector("#track-ranked");
  rankedIds.forEach(function (id, index) {
    var movie = movies[id];
    if (!movie) return;

    var card = document.createElement("div");
    card.className = "rank-card";
    card.onclick = function () {
      openMovie(id);
    };
    card.innerHTML =
      '<div class="rank-number">' +
      (index + 1) +
      "</div>" +
      '<img src="' +
      movie.poster +
      '" alt="' +
      escapeHTML(movie.title) +
      '" loading="lazy">';
    track.appendChild(card);
  });
}

function createMovieCard(id, movie) {
  var card = document.createElement("div");
  card.className = "movie-card";
  card.onclick = function () {
    openMovie(id);
  };

  card.innerHTML =
    '<img src="' +
    movie.poster +
    '" alt="' +
    escapeHTML(movie.title) +
    '" loading="lazy">' +
    '<div class="movie-card-title">' +
    escapeHTML(movie.title) +
    "</div>" +
    '<button class="movie-card-info" onclick="event.stopPropagation(); openMovie(\'' +
    id +
    '\')"><i class="fa-solid fa-info"></i></button>';

  return card;
}

function scrollRow(rowId, direction) {
  var track = document.getElementById("track-" + rowId);
  if (!track) return;
  track.scrollBy({ left: direction * 400, behavior: "smooth" });
}


/* =====================================================
   MOVIE MODAL
===================================================== */

function openMovie(id) {
  var movie = movies[id];
  if (!movie) return;

  currentMovieId = id;

  var poster = document.getElementById("modalPoster");
  var title = document.getElementById("modalTitle");
  var meta = document.getElementById("modalMeta");
  var description = document.getElementById("modalDescription");
  var creator = document.getElementById("modalCreator");
  var cast = document.getElementById("modalCast");
  var genre = document.getElementById("modalGenre");

  if (poster) poster.src = movie.poster;
  if (title) title.textContent = movie.title;
  if (meta) {
    meta.innerHTML =
      "<span>" +
      movie.year +
      "</span>" +
      "<span>" +
      movie.rating +
      "</span>" +
      "<span>" +
      movie.duration +
      "</span>" +
      "<span>" +
      movie.quality +
      "</span>";
  }
  if (description) description.textContent = movie.description;
  if (creator) creator.textContent = movie.creator;
  if (cast) cast.textContent = movie.cast;
  if (genre) genre.textContent = movie.genre;

  updateMyListButton();
  showEl("movieModal");
}

function closeMovieModal() {
  hideEl("movieModal");
  currentMovieId = null;
}

function playCurrentMovie() {
  if (!currentMovieId) return;
  playMovie(currentMovieId);
}

function playMovie(id) {
  var movie = movies[id];
  if (!movie) return;

  closeMovieModal();

  var iframe = document.getElementById("moviePlayer");
  var message = document.getElementById("playerMessage");

  if (movie.trailer) {
    if (iframe) {
      iframe.src =
        movie.trailer +
        (movie.trailer.indexOf("?") > -1 ? "&" : "?") +
        "autoplay=1";
      iframe.classList.remove("hidden");
    }
    if (message) message.classList.add("hidden");
  } else {
    if (iframe) {
      iframe.src = "";
      iframe.classList.add("hidden");
    }
    if (message) message.classList.remove("hidden");
  }

  showEl("playerOverlay");
}

function closePlayer() {
  hideEl("playerOverlay");
  var iframe = document.getElementById("moviePlayer");
  if (iframe) iframe.src = "";
}


/* =====================================================
   MY LIST
===================================================== */

function toggleCurrentMyList() {
  if (!currentMovieId) return;

  var list = getMyList();
  var pos = list.indexOf(currentMovieId);

  if (pos === -1) {
    list.push(currentMovieId);
  } else {
    list.splice(pos, 1);
  }

  saveMyList(list);
  updateMyListButton();
}

function updateMyListButton() {
  var btn = document.getElementById("myListButton");
  if (!btn || !currentMovieId) return;

  var inList = getMyList().indexOf(currentMovieId) !== -1;
  btn.innerHTML = inList
    ? '<i class="fa-solid fa-check"></i> In My List'
    : '<i class="fa-solid fa-plus"></i> My List';
}


/* =====================================================
   SEARCH
===================================================== */

function toggleSearch() {
  var box = document.getElementById("searchBox");
  if (!box) return;

  var isHidden = box.classList.contains("hidden");
  closeAllMenus();

  if (isHidden) {
    box.classList.remove("hidden");
    var input = document.getElementById("searchInput");
    if (input) input.focus();
  } else {
    box.classList.add("hidden");
    var input2 = document.getElementById("searchInput");
    if (input2) input2.value = "";
    showHome();
  }
}

function performSearch() {
  var input = document.getElementById("searchInput");
  if (!input) return;

  var query = input.value.trim().toLowerCase();

  if (!query) {
    showHome();
    return;
  }

  hideEl("heroSection");
  hideEl("homeContent");
  hideEl("gamesSection");
  showEl("searchResults");

  var title = document.getElementById("searchTitle");
  var grid = document.getElementById("searchGrid");
  if (!grid) return;

  if (title) title.textContent = 'Search results for "' + query + '"';
  grid.innerHTML = "";

  var found = 0;
  Object.keys(movies).forEach(function (id) {
    var m = movies[id];
    var text = (
      m.title +
      " " +
      m.genre +
      " " +
      m.country +
      " " +
      m.type +
      " " +
      m.cast +
      " " +
      m.creator
    ).toLowerCase();

    if (text.indexOf(query) !== -1) {
      grid.appendChild(createMovieCard(id, m));
      found++;
    }
  });

  if (found === 0 && title) {
    title.textContent = 'No results for "' + query + '"';
  }
}


/* =====================================================
   MENUS
===================================================== */

function closeAllMenus() {
  ["profileMenu", "mainMenu", "notificationBox", "moreMenu"].forEach(hideEl);
}

function toggleProfileMenu() {
  var menu = document.getElementById("profileMenu");
  if (!menu) return;
  var wasHidden = menu.classList.contains("hidden");
  closeAllMenus();
  if (wasHidden) menu.classList.remove("hidden");
}

function toggleMainMenu() {
  var menu = document.getElementById("mainMenu");
  if (!menu) return;
  var wasHidden = menu.classList.contains("hidden");
  closeAllMenus();
  if (wasHidden) menu.classList.remove("hidden");
}

function toggleNotifications() {
  var box = document.getElementById("notificationBox");
  if (!box) return;
  var wasHidden = box.classList.contains("hidden");
  closeAllMenus();
  if (wasHidden) box.classList.remove("hidden");
}

function toggleMoreMenu() {
  var menu = document.getElementById("moreMenu");
  if (!menu) return;
  var wasHidden = menu.classList.contains("hidden");
  closeAllMenus();
  if (wasHidden) menu.classList.remove("hidden");
}

function switchProfile() {
  closeAllMenus();
  manageMode = false;
  showProfiles();
}

function manageProfilesFromMenu() {
  closeAllMenus();
  manageMode = true;
  showProfiles();
  var btn = document.querySelector(".manage-profile-btn");
  if (btn) btn.innerHTML = '<i class="fa-solid fa-check"></i> Done';
}

function transferProfile() {
  closeAllMenus();
  alert("Profile transfer is a demo feature in this Netflix clone.");
}

function openAccount() {
  closeAllMenus();
  var account = getAccount();
  var content = document.getElementById("infoModalContent");
  if (!content) return;

  if (!account) {
    content.innerHTML = "<h2>Account</h2><p>No account found.</p>";
  } else {
    content.innerHTML =
      "<h2>Account</h2>" +
      "<p><strong>Name:</strong> " +
      escapeHTML(account.name) +
      "</p>" +
      "<p><strong>Email:</strong> " +
      escapeHTML(account.email) +
      "</p>" +
      "<p><strong>Plan:</strong> " +
      escapeHTML(account.plan.name) +
      " — ₦" +
      account.plan.price.toLocaleString() +
      "/month</p>" +
      '<p style="margin-top:16px;color:#888;">This is a demo. No real billing.</p>';
  }
  showEl("infoModal");
}

function openHelp() {
  closeAllMenus();
  var content = document.getElementById("infoModalContent");
  if (!content) return;

  content.innerHTML =
    "<h2>Help Center</h2>" +
    "<p>This is a demo Netflix clone.</p>" +
    "<p>• Use Search to find titles by name, cast, or genre.</p>" +
    "<p>• Click any poster for details, Play, or My List.</p>" +
    "<p>• Manage profiles from the profile menu.</p>" +
    '<p style="margin-top:16px;color:#888;">No real support is provided.</p>';
  showEl("infoModal");
}

function closeInfoModal() {
  hideEl("infoModal");
}

function signOut() {
  closeAllMenus();
  activeProfile = null;
  localStorage.removeItem("activeProfile");
  showLanding();
}


/* =====================================================
   EVENT LISTENERS
===================================================== */

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeMovieModal();
    closePlayer();
    closeInfoModal();
    closeAllMenus();
  }
});

document.addEventListener("click", function (e) {
  var modal = document.getElementById("movieModal");
  if (modal && e.target === modal) {
    closeMovieModal();
  }

  var menus = ["profileMenu", "mainMenu", "notificationBox", "moreMenu"];
  var clickedInside = menus.some(function (id) {
    var el = document.getElementById(id);
    return el && !el.classList.contains("hidden") && el.contains(e.target);
  });
  var isToggle = e.target.closest(
    ".profile-button, .icon-button, .nav-links button, [onclick*='toggle']"
  );
  if (!clickedInside && !isToggle) {
    closeAllMenus();
  }
});

// Card number formatting
var cardNumberEl = document.getElementById("cardNumber");
if (cardNumberEl) {
  cardNumberEl.addEventListener("input", function (e) {
    var v = e.target.value.replace(/\D/g, "").slice(0, 16);
    e.target.value = v.replace(/(.{4})/g, "$1 ").trim();
  });
}

// Expiry formatting
var cardExpiryEl = document.getElementById("cardExpiry");
if (cardExpiryEl) {
  cardExpiryEl.addEventListener("input", function (e) {
    var v = e.target.value.replace(/\D/g, "").slice(0, 4);
    if (v.length >= 3) v = v.slice(0, 2) + "/" + v.slice(2);
    e.target.value = v;
  });
}


/* =====================================================
   INIT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {
  showLanding();
});