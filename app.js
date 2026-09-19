const VOWELS = [
  { l: "a", hint: "ah comme avion", img: "avion" },
  { l: "i", hint: "i comme igloo", img: "igloo" },
  { l: "o", hint: "o comme orange", img: "orange" },
  { l: "u", hint: "u comme une lune", img: "lune" },
  { l: "é", hint: "é comme été", img: "ete" },
  { l: "e", hint: "euh comme le", img: "lili" },
];
const CONSONANTS = [
  { l: "m", hint: "le son de maman, au début", color: "#f3d7c8", img: "maman" },
  { l: "l", hint: "le son de lune, au début", color: "#d7e6df", img: "lune" },
  { l: "s", hint: "le son de soleil, au début", color: "#efe3c8", img: "soleil" },
  { l: "n", hint: "le son de nid, au début", color: "#e4ddd4", img: "nid" },
  { l: "r", hint: "le son de rire, au début", color: "#f3d7c8", img: "rire" },
  { l: "f", hint: "le son de fée, au début", color: "#d7e6df", img: "fee" },
  { l: "v", hint: "le son de vélo, au début", color: "#efe3c8", img: "velo" },
  { l: "p", hint: "le son sec de papa, au début", color: "#e4ddd4", img: "papa" },
  { l: "t", hint: "le son sec de tomate, au début", color: "#f3d7c8", img: "tomate" },
  { l: "d", hint: "le son de dada, au début", color: "#d7e6df", img: "cheval" },
  { l: "b", hint: "le son de bébé, au début", color: "#efe3c8", img: "bebe" },
  { l: "c", hint: "le son dur de cadeau, comme k", color: "#d7e6df", img: "cadeau" },
  { l: "g", hint: "le son de gâteau, au début", color: "#efe3c8", img: "gateau" },
  { l: "j", hint: "le son de jus, au début", color: "#e4ddd4", img: "jus" },
  { l: "z", hint: "le son de zoo, au début", color: "#f3d7c8", img: "zoo" },
  { l: "ch", hint: "le son de chat, ch ch ch", color: "#d7e6df", img: "chat" },
  { l: "k", hint: "le son de kiwi, comme c dur", color: "#efe3c8", img: "kiwi" },
  { l: "q", hint: "qu comme quatre, son k", color: "#e4ddd4", img: "quatre" },
  { l: "y", hint: "comme i, yoyo", color: "#f3d7c8", img: "yoyo" },
  { l: "w", hint: "le son ou de wagon", color: "#d7e6df", img: "wagon" },
  { l: "x", hint: "le son ks de taxi", color: "#efe3c8", img: "taxi", noFusion: true },
  { l: "h", hint: "h se tait, comme hibou", color: "#e4ddd4", img: "hibou", noFusion: true },
];
const WORDS = [
  { w: "maman", cut: "ma – man", need: ["m", "a", "n"], img: "maman" },
  { w: "lili", cut: "li – li", need: ["l", "i"], img: "lili" },
  { w: "lolo", cut: "lo – lo", need: ["l", "o"], img: "lolo" },
  { w: "lala", cut: "la – la", need: ["l", "a"], img: "lala" },
  { w: "mimi", cut: "mi – mi", need: ["m", "i"], img: "mimi" },
  { w: "nana", cut: "na – na", need: ["n", "a"], img: "nana" },
  { w: "lune", cut: "lu – ne", need: ["l", "u", "n", "e"], img: "lune" },
  { w: "sol", cut: "sol", need: ["s", "o", "l"], img: "soleil" },
  { w: "ami", cut: "a – mi", need: ["a", "m", "i"], img: "ami" },
  { w: "papa", cut: "pa – pa", need: ["p", "a"], img: "papa" },
  { w: "bébé", cut: "bé – bé", need: ["b", "é"], img: "bebe" },
  { w: "vélo", cut: "vé – lo", need: ["v", "é", "l", "o"], img: "velo" },
  { w: "coco", cut: "co – co", need: ["c", "o"], img: "cadeau" },
  { w: "lac", cut: "lac", need: ["l", "a", "c"], img: "lune" },
  { w: "sac", cut: "sac", need: ["s", "a", "c"], img: "soleil" },
  { w: "gogo", cut: "go – go", need: ["g", "o"], img: "gateau" },
  { w: "jojo", cut: "jo – jo", need: ["j", "o"], img: "jus" },
  { w: "jus", cut: "jus", need: ["j", "u", "s"], img: "jus" },
  { w: "zoo", cut: "zo", need: ["z", "o"], img: "zoo" },
  { w: "chat", cut: "cha – t", need: ["ch", "a", "t"], img: "chat" },
  { w: "kiwi", cut: "ki – wi", need: ["k", "i", "w"], img: "kiwi" },
  { w: "taxi", cut: "ta – xi", need: ["t", "a", "x", "i"], img: "taxi" },
  { w: "yoyo", cut: "yo – yo", need: ["y", "o"], img: "yoyo" },
  { w: "qui", cut: "qui", need: ["q", "i"], img: "quatre" },
];
const PHRASES = [
  { t: "Lila lit.", cut: "Li – la    lit", say: "Lila lit.", img: "lili", parts: ["Li", "la", "lit"] },
  { t: "Maman lit.", cut: "Ma – man    lit", say: "Maman lit.", img: "maman", parts: ["Ma", "man", "lit"] },
  { t: "Papa et maman.", cut: "Pa – pa    et    ma – man", say: "Papa et maman.", img: "papa", parts: ["Pa", "pa", "et", "ma", "man"] },
  { t: "Le bébé rit.", cut: "Le    bé – bé    rit", say: "Le bébé rit.", img: "bebe", parts: ["Le", "bé", "bé", "rit"] },
  { t: "La fée vole.", cut: "La    fée    vo – le", say: "La fée vole.", img: "fee", parts: ["La", "fée", "vo", "le"] },
  { t: "Jojo rit.", cut: "Jo – jo    rit", say: "Jojo rit.", img: "jus", parts: ["Jo", "jo", "rit"] },
  { t: "Le chat lit.", cut: "Le    chat    lit", say: "Le chat lit.", img: "chat", parts: ["Le", "chat", "lit"] },
  { t: "Coco lit.", cut: "Co – co    lit", say: "Coco lit.", img: "cadeau", parts: ["Co", "co", "lit"] },
];
const TTS = { a: "ah", i: "i", o: "oh", u: "u", é: "é", e: "euh", m: "mmm", l: "lll", s: "sss", n: "nnn", r: "rrr", f: "fff", v: "vvv", p: "p", t: "t", d: "d", b: "b", c: "k", g: "g", j: "j", z: "zzz", k: "k", q: "k", y: "i", w: "ou", x: "ks", h: "h se tait", ch: "ch" };
const ALIAS = { a: ["a", "ah", "à"], i: ["i", "y"], o: ["o", "oh", "eau"], u: ["u"], é: ["é", "et", "est"], e: ["e", "euh"], m: ["m", "em", "aime"], l: ["l", "elle", "le"], s: ["s", "esse"], n: ["n", "ne"], r: ["r", "air"], f: ["f", "fée"], v: ["v", "vé"], p: ["p"], t: ["t"], d: ["d"], b: ["b", "bé"], c: ["c", "k", "ça"], g: ["g"], j: ["j", "ji"], z: ["z", "zed"], k: ["k", "ka"], q: ["q", "k", "qu"], y: ["y", "i"], w: ["w", "ou"], x: ["x", "ks"], h: ["h"], ch: ["ch", "chat"] };

const S = {
  stars: Number(localStorage.getItem("syl_stars") || 0),
  unlocked: JSON.parse(localStorage.getItem("syl_unlocked") || '["m"]'),
  style: localStorage.getItem("syl_style") || "cub",
  voice: localStorage.getItem("syl_voice") || "",
  vowel: "a", cons: "m", shown: "m", fusion: 0,
  listenT: "ma", listenC: [], listenOk: 0, listenN: 0,
  buildT: "ma", buildC: "", buildV: "",
  write: "ma", writeKind: "letter", writeTool: "kb", typed: "", phrase: 0, phraseStep: -1, raMode: "syl", raItem: "ma", expect: "", busy: false,
};
if (!localStorage.getItem("syl_simba")) {
  S.style = "cub";
  localStorage.setItem("syl_simba", "1");
}
function save() {
  localStorage.setItem("syl_stars", S.stars);
  localStorage.setItem("syl_unlocked", JSON.stringify(S.unlocked));
  localStorage.setItem("syl_style", S.style);
  localStorage.setItem("syl_voice", S.voice);
  const el = document.getElementById("starCount");
  if (el) el.textContent = S.stars;
  const bar = document.getElementById("progressFill");
  if (bar) {
    const pct = Math.min(100, Math.round((S.unlocked.length / CONSONANTS.length) * 70 + Math.min(30, S.stars / 2)));
    bar.style.width = pct + "%";
  }
}
function toast(m) {
  const el = document.getElementById("toast");
  el.textContent = m; el.classList.add("on");
  setTimeout(() => el.classList.remove("on"), 1600);
}
function award() { S.stars++; save(); toast("Bravo !"); }
function known() { return CONSONANTS.filter((c) => S.unlocked.includes(c.l)); }
function consSyls(c) {
  if (c.noFusion) return [];
  if (c.l === "q") return ["qua", "que", "qui", "quo", "qué"];
  if (c.l === "ch") return VOWELS.map((v) => "ch" + v.l);
  return VOWELS.map((v) => c.l + v.l);
}
function syls() {
  const out = [];
  known().forEach((c) => out.push(...consSyls(c)));
  return out;
}
function pickVoice() {
  const vs = speechSynthesis.getVoices();
  if (S.voice) { const x = vs.find((v) => v.name === S.voice); if (x) return x; }
  const fr = vs.filter((v) => /fr/i.test((v.lang || "") + (v.name || "")));
  const pool = fr.length ? fr : vs;
  if (S.style === "cub") {
    return (
      pool.find((v) => /amélie|amelie|audrey|marie|aria|google français/i.test(v.name)) ||
      pool.find((v) => /female|femme|woman/i.test(v.name)) ||
      pool[0]
    );
  }
  return (
    pool.find((v) => /amélie|amelie|audrey|marie|denise|google français|aria|hortense/i.test(v.name)) ||
    pool.find((v) => /female|femme|woman/i.test(v.name)) ||
    pool[0]
  );
}
function playClip(file, fallback) {
  return new Promise((resolve) => {
    try { speechSynthesis.cancel(); } catch (e) {}
    const a = new Audio(file);
    let done = false;
    const end = () => { if (done) return; done = true; resolve(); };
    a.onended = end;
    a.onerror = () => {
      if (fallback) speak(fallback).then(end);
      else end();
    };
    a.play().catch(() => {
      if (fallback) speak(fallback).then(end);
      else end();
    });
    setTimeout(end, 10000);
  });
}
function speak(text, extra) {
  return new Promise((resolve) => {
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "fr-FR";
      const cub = S.style === "cub";
      const child = S.style === "child";
      u.rate = (extra && extra.rate) || (cub ? 0.74 : child ? 0.76 : 0.68);
      u.pitch = (extra && extra.pitch) || (cub ? 1.04 : child ? 1.06 : 0.98);
      u.volume = 0.92;
      const v = pickVoice(); if (v) u.voice = v;
      u.onend = () => resolve();
      u.onerror = () => resolve();
      speechSynthesis.speak(u);
      setTimeout(() => resolve(), 8000);
    } catch (e) { resolve(); }
  });
}
function speakLila() {
  playClip("audio/lila-intro.mp3", "Hey ! Moi c'est Lila. Viens, on va lire ensemble.");
}
function playPhoneme(letter) {
  if (letter === "h") { speak("h se tait"); return; }
  const key = letter === "é" ? "e_aigu" : (letter === "k" || letter === "q" || letter === "qu") ? "c" : letter;
  const a = new Audio("audio/" + encodeURIComponent(key) + ".mp3");
  a.onerror = () => {
    if (letter === "l") return;
    speak(TTS[letter] || letter);
  };
  return a.play().catch(() => {
    if (letter === "l") return;
    speak(TTS[letter] || letter);
  });
}
function speakSyl(s) { if (String(s).length === 1 || s === "ch" || s === "qu") playPhoneme(s); else speak(s); }
function wait(ms) { return new Promise((r) => setTimeout(r, ms)); }

function go(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("on"));
  document.getElementById(id).classList.add("on");
  document.querySelectorAll("footer button").forEach((b) => b.classList.remove("on"));
  const map = { home: "tab-home", map: "tab-map", island: "tab-map", listen: "tab-listen", build: "tab-listen", readaloud: "tab-listen", write: "tab-write", parent: "tab-parent" };
  const t = document.getElementById(map[id] || "tab-home");
  if (t) t.classList.add("on");
  if (id === "vowels") renderVowels();
  if (id === "map") renderMap();
  if (id === "fusion") renderFusion();
  if (id === "listen") startListen();
  if (id === "build") startBuild();
  if (id === "words") renderWords();
  if (id === "write") {
    if (!writePool().includes(S.write)) nextWrite();
    else renderWrite();
  }
  if (id === "readaloud") renderRA();
  if (id === "phrases") renderPhrases();
  if (id === "parent") renderParent();
  window.scrollTo(0, 0);
}

const ICO = {
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
  spark: '<path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5Z"/><path d="M19 14l.6 1.8L21.4 16.4 19.6 17l-.6 1.8L18.4 17l-1.8-.6 1.8-.6Z"/>',
  puzzle: '<path d="M19.4 11.2a2 2 0 0 0-2.8-2.8L15 10l-1.2-1.2a2 2 0 1 0-2.8 2.8L12.2 13 11 14.2a2 2 0 1 0 2.8 2.8L15 15.8l1.2 1.2a2 2 0 1 0 2.8-2.8L17.8 13Z"/>',
  vol: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
  book: '<path d="M2 6s2-2 6-2 6 2 6 2v12s-2-1-6-1-6 1-6 1V6z"/><path d="M12 6s2-2 6-2 6 2 6 2v12s-2-1-6-1-6 1-6 1"/>',
  pencil: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  mic: '<path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  print: '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
};
function ico(name) {
  return `<svg class="ico" viewBox="0 0 24 24">${ICO[name] || ""}</svg>`;
}
const HOME = [
  ["vowels", "Voyelles", "Les sons qui chantent", "sun", "c3"],
  ["map", "Îles des lettres", "Une consonne à la fois", "spark", "c1"],
  ["fusion", "Fusion magique", "m + a = ma", "puzzle", "c2"],
  ["listen", "J’écoute", "Trouve la syllabe", "vol", "c4"],
  ["build", "Je construis", "Lettres vers syllabe", "puzzle", "c2"],
  ["words", "Premiers mots", "Je lis pour de vrai", "book", "c3"],
  ["write", "J’écris", "Clavier ou doigt", "pencil", "c1"],
  ["readaloud", "Je lis tout haut", "Lila écoute et valide", "mic", "c4"],
  ["phrases", "Petites phrases", "Sens et fierté", "book", "c2"],
  ["parent", "Guide parent", "Voix et routine", "info", "c3"],
];
function renderHome() {
  document.getElementById("homeGrid").innerHTML =
    HOME.map(
      ([id, t, s, ic, tint]) =>
        `<button class="tile ${tint}" onclick="go('${id}')">${ico(ic)}<div><strong>${t}</strong><div class="sub">${s}</div></div></button>`
    ).join("") +
    `<a class="tile c1" href="cartes.html">${ico("print")}<div><strong>Cartes images</strong><div class="sub">À imprimer</div></div></a>`;
  save();
}
renderHome();

function pic(name, cls) {
  if (!name) return "";
  return `<img class="${cls || "pic"}" src="img/${name}.jpg" alt="" onerror="this.style.display='none'" />`;
}
function glyph(s) {
  s = String(s || "");
  if (s.length === 1 || s === "ch" || s === "qu") {
    return `<span class="pair"><b>${s.toUpperCase()}</b><i>${s.toLowerCase()}</i></span>`;
  }
  return s;
}
function renderVowels() {
  const v = VOWELS.find((x) => x.l === S.vowel) || VOWELS[0];
  document.getElementById("vowelsBox").innerHTML = `
    <h2>Les voyelles chantent</h2>
    ${pic(v.img)}
    <div class="giant">${glyph(v.l)}</div>
    <p class="sub">${v.hint}</p>
    <div class="row">${VOWELS.map((x) => `<button class="letter" onclick="S.vowel='${x.l}';renderVowels();playPhoneme('${x.l}')">${glyph(x.l)}</button>`).join("")}</div>
    <div class="row">
      <button class="btn p" onclick="playPhoneme('${v.l}')">Écouter</button>
      <button class="btn m" onclick="listenCheck('${v.l}')">Je lis</button>
    </div>`;
}
function renderMap() {
  document.getElementById("mapBox").innerHTML = "<h2>Les îles des consonnes</h2><p class='sub'>Le vrai son, pas le nom de la lettre.</p><div class='grid'>" +
    CONSONANTS.map((c, i) => {
      const open = S.unlocked.includes(c.l) || i === 0;
      return `<button class="island" style="background:${c.color}" onclick="openIsland('${c.l}',${i},${open})">${open ? `${pic(c.img, "pic-sm")}<span style="font-family:Fredoka;font-size:2.1rem">${glyph(c.l)}</span><div>son ${c.l}</div>` : "bientôt"}</button>`;
    }).join("") + "</div>";
}
function openIsland(l, i, open) {
  if (!open) {
    if (S.stars >= i * 4) { S.unlocked.push(l); save(); }
    else { toast("Encore quelques étoiles"); return; }
  }
  S.cons = l; S.shown = l; go("island"); renderIsland(); playPhoneme(l);
}
function renderIsland() {
  const c = CONSONANTS.find((x) => x.l === S.cons);
  document.getElementById("islandBox").innerHTML = `
    <h2>Île de ${c.l.toUpperCase()} ${c.l}</h2>
    ${pic(c.img)}
    <p class="sub">${c.hint}</p>
    <div class="giant">${glyph(S.shown)}</div>
    <div class="row">
      <button class="btn p" onclick="S.shown='${c.l}';renderIsland();playPhoneme('${c.l}')">Son de la lettre</button>
      <button class="btn m" onclick="listenCheck(S.shown)">Je lis</button>
      ${c.noFusion ? "" : `<button class="btn s" onclick="go('fusion')">Fusionner</button>`}
    </div>
    ${c.noFusion ? "<p class='sub'>Cette lettre n’a pas de fusion simple. On la reconnaît dans les mots.</p>" : `<h3>Syllabes</h3>
    <div class="row">${consSyls(c).map((s) => `<button class="letter" style="width:88px" onclick="S.shown='${s}';renderIsland();speakSyl('${s}')">${s}</button>`).join("")}</div>`}`;
}
function fusionList() {
  const list = [];
  known().forEach((c) => {
    consSyls(c).slice(0, 5).forEach((s) => {
      const v = s.startsWith("ch") ? s.slice(2) : s.startsWith("qu") ? s.slice(2) : s.slice(c.l.length);
      list.push({ c: c.l === "q" ? "qu" : c.l, v: v || s.slice(-1), s });
    });
  });
  return list.length ? list : [{ c: "m", v: "a", s: "ma" }];
}
function renderFusion() {
  const list = fusionList();
  window._flist = list;
  const cur = list[S.fusion % list.length];
  document.getElementById("fusionBox").innerHTML = `
    <h2>La fusion magique</h2>
    <p class="sub">On glisse le son dans la voyelle.</p>
    <div class="row" style="font-family:Fredoka;font-size:2.2rem">
      <span class="letter">${glyph(cur.c)}</span> + <span class="letter">${glyph(cur.v)}</span> = <span class="letter" style="width:100px;background:#f3d7c8">${cur.s}</span>
    </div>
    <div class="row">
      <button class="btn g" onclick="playParts()">1. Sons séparés</button>
      <button class="btn p" onclick="playBlend()">2. Coller</button>
      <button class="btn s" onclick="speakSyl('${cur.s}')">3. Syllabe</button>
    </div>
    <div class="row"><button class="btn m" onclick="listenCheck('${cur.s}')">Je lis la syllabe</button></div>
    <div class="row">
      <button class="btn g" onclick="S.fusion=(S.fusion-1+window._flist.length)%window._flist.length;renderFusion()">Précédent</button>
      <button class="btn g" onclick="S.fusion=(S.fusion+1)%window._flist.length;renderFusion()">Suivant</button>
    </div>`;
}
async function playParts() {
  const cur = window._flist[S.fusion % window._flist.length];
  playPhoneme(cur.c); await wait(750); playPhoneme(cur.v);
}
async function playBlend() {
  const cur = window._flist[S.fusion % window._flist.length];
  playPhoneme(cur.c); await wait(600); playPhoneme(cur.v); await wait(700); speak(cur.s);
}
function startListen() {
  const pool = syls();
  S.listenT = pool[Math.floor(Math.random() * pool.length)] || "ma";
  const o = new Set([S.listenT]);
  while (o.size < 3 && pool.length) o.add(pool[Math.floor(Math.random() * pool.length)]);
  S.listenC = [...o].sort(() => Math.random() - 0.5);
  document.getElementById("listenBox").innerHTML = `
    <h2>J’écoute, je trouve</h2>
    <p class="sub">Quelle syllabe Lila a-t-elle dite ?</p>
    <div class="giant">?</div>
    <div class="row"><button class="btn p" onclick="speakSyl(S.listenT)">Écouter</button></div>
    <div class="row">${S.listenC.map((s) => `<button class="choice" onclick="guess('${s}')">${s}</button>`).join("")}</div>
    <p class="sub">Score : ${S.listenOk} / ${S.listenN}</p>`;
  setTimeout(() => speakSyl(S.listenT), 250);
}
function guess(s) {
  if (S.busy) return;
  S.busy = true;
  S.listenN++;
  if (s === S.listenT) {
    S.listenOk++;
    award();
    playClip("audio/bravo.mp3", "Bravo !").then(() => wait(350)).then(() => {
      S.busy = false;
      startListen();
    });
  } else {
    playClip("audio/encore.mp3", "Écoute encore.").then(() => wait(300)).then(() => {
      speakSyl(S.listenT);
      S.busy = false;
      const sc = document.querySelector("#listenBox .sub:last-child");
      if (sc) sc.textContent = "Score : " + S.listenOk + " / " + S.listenN;
    });
  }
}
function startBuild() {
  const pool = syls();
  S.buildT = pool[Math.floor(Math.random() * pool.length)] || "ma";
  S.buildC = ""; S.buildV = ""; renderBuild();
}
function renderBuild() {
  document.getElementById("buildBox").innerHTML = `
    <h2>Je construis</h2>
    <div class="giant">${S.buildT}</div>
    <div class="row"><button class="btn g" onclick="speakSyl(S.buildT)">Modèle</button><button class="btn m" onclick="listenCheck(S.buildT)">Je lis</button></div>
    <p class="sub">Consonnes</p>
    <div class="row">${known().map((c) => `<button class="letter" onclick="S.buildC='${c.l}';playPhoneme('${c.l}');checkBuild()">${glyph(c.l)}</button>`).join("")}</div>
    <p class="sub">Voyelles</p>
    <div class="row">${VOWELS.map((v) => `<button class="letter" onclick="S.buildV='${v.l}';playPhoneme('${v.l}');checkBuild()">${glyph(v.l)}</button>`).join("")}</div>
    <p class="giant" style="font-size:2.4rem">${S.buildC ? glyph(S.buildC) : "?"} + ${S.buildV ? glyph(S.buildV) : "?"} = ${S.buildC && S.buildV ? S.buildC + S.buildV : "?"}</p>`;
}
function checkBuild() {
  renderBuild();
  if (!S.buildC || !S.buildV) return;
  const s = S.buildC + S.buildV;
  if (s === S.buildT) {
    if (S.busy) return;
    S.busy = true;
    award();
    playClip("audio/bravo.mp3", "Bravo !").then(() => wait(350)).then(() => {
      S.busy = false;
      startBuild();
    });
  } else {
    speakSyl(s);
  }
}
function renderWords() {
  const k = new Set(["a", "e", "i", "o", "u", "é", ...S.unlocked]);
  const list = WORDS.filter((w) => w.need.every((l) => k.has(l)));
  document.getElementById("wordsBox").innerHTML = "<h2>Mes premiers mots</h2>" + (list.length
    ? `<div class="grid">${list.map((w) => `<div class="word">${pic(w.img)}<div style="font-family:Fredoka;font-size:1.8rem">${w.w}</div><div class="sub">${w.cut}</div><div class="row"><button class="btn g" onclick="playWord('${w.w}','${w.cut}')">Écouter</button><button class="btn m" onclick="listenCheck('${w.w}')">Je lis</button></div></div>`).join("")}</div>`
    : "<p>Ouvre d’abord l’île de M.</p>");
}
function playWord(w, cut) {
  const parts = cut.split(/[–-]/).map((s) => s.trim()).filter(Boolean);
  let i = 0;
  const tick = () => { if (i < parts.length) { speak(parts[i]); i++; setTimeout(tick, 1200); } else setTimeout(() => speak(w), 450); };
  tick();
}
function writePool() {
  if (S.writeKind === "letter") return [...VOWELS.map((v) => v.l), ...known().map((c) => c.l)];
  if (S.writeKind === "word") {
    const k = new Set(["a", "e", "i", "o", "u", "é", ...S.unlocked]);
    const list = WORDS.filter((w) => w.need.every((l) => k.has(l))).map((w) => w.w);
    return list.length ? list : ["maman"];
  }
  const s = syls();
  return s.length ? s : ["ma"];
}
function kbRows() {
  const rows = [
    ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["q", "s", "d", "f", "g", "h", "j", "k", "l", "m"],
    ["w", "x", "c", "v", "b", "n", "é"],
  ];
  return rows.map((row) =>
    `<div class="kb-row">${row.map((k) =>
      `<button type="button" class="key" onclick="writeAdd('${k}')">${glyph(k)}</button>`
    ).join("")}</div>`
  ).join("");
}
function renderWrite() {
  const ok = fold(S.typed) === fold(S.write) && S.typed;
  document.getElementById("writeBox").innerHTML = `
    <h2>J’écris</h2>
    <div class="row">
      <button class="btn ${S.writeTool === "kb" ? "p" : "g"}" onclick="S.writeTool='kb';renderWrite()">Clavier</button>
      <button class="btn ${S.writeTool === "finger" ? "p" : "g"}" onclick="S.writeTool='finger';renderWrite()">Doigt</button>
    </div>
    <div class="row">
      <button class="btn g" onclick="S.writeKind='letter';nextWrite()">Lettre</button>
      <button class="btn g" onclick="S.writeKind='syl';nextWrite()">Syllabe</button>
      <button class="btn g" onclick="S.writeKind='word';nextWrite()">Mot</button>
    </div>
    <p class="sub">${S.writeKind === "letter" ? "Écris cette lettre" : S.writeKind === "word" ? "Écris ce mot" : "Écris cette syllabe"}</p>
    <div class="giant" style="color:#d4c3ad">${glyph(S.write) === S.write && S.write.length > 2 ? S.write : glyph(S.write)}</div>
    ${S.writeTool === "kb" ? `
      <div class="typed ${S.typed ? "" : "empty"}">${S.typed ? S.typed : "…"}</div>
      <div class="kb">
        ${kbRows()}
        <div class="kb-row">
          <button type="button" class="key wide" onclick="writeDel()">Effacer</button>
          <button type="button" class="key wide" onclick="writeAdd(' ')">Espace</button>
          <button type="button" class="key wide" onclick="nextWrite()">Autre</button>
        </div>
      </div>
      <p class="sub">Tu peux aussi utiliser le clavier de l’ordinateur ou de la tablette.</p>
    ` : `
      <div id="boardWrap"><canvas id="board"></canvas></div>
    `}
    <div class="row">
      ${S.writeTool === "finger" ? `<button class="btn g" onclick="clearBoard()">Effacer</button>` : ""}
      <button class="btn p" onclick="speakSyl(S.write)">Dire</button>
      <button class="btn m" onclick="listenCheck(S.write)">Je lis</button>
      ${ok ? `<button class="btn s" onclick="writeSuccess()">Bravo, suivant</button>` : ""}
    </div>`;
  if (S.writeTool === "finger") setupBoard();
}
function nextWrite() {
  const pool = writePool();
  let pick = pool[Math.floor(Math.random() * pool.length)] || "ma";
  if (pool.length > 1 && pick === S.write) pick = pool[Math.floor(Math.random() * pool.length)];
  S.write = pick;
  S.typed = "";
  renderWrite();
  speakSyl(S.write);
}
function writeAdd(ch) {
  ch = String(ch).toLowerCase();
  if (ch === " ") {
    if (S.writeKind === "word") S.typed += " ";
  } else if (!/^[a-zàâéèêëïîôùûüç]$/.test(ch)) return;
  else if (S.writeKind === "letter" && S.write.length === 1) S.typed = ch;
  else S.typed += ch;
  renderWrite();
  if (fold(S.typed) === fold(S.write) && S.typed) writeSuccess();
}
function writeDel() {
  S.typed = String(S.typed || "").slice(0, -1);
  renderWrite();
}
function writeSuccess() {
  if (S.busy) return;
  S.busy = true;
  award();
  playClip("audio/bravo.mp3", "Bravo !").then(() => wait(300)).then(() => {
    S.busy = false;
    nextWrite();
  });
}
document.addEventListener("keydown", (e) => {
  const scr = document.getElementById("write");
  if (!scr || !scr.classList.contains("on") || S.writeTool !== "kb") return;
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.key === "Backspace") { e.preventDefault(); writeDel(); }
  else if (e.key === "Enter") { e.preventDefault(); if (fold(S.typed) === fold(S.write)) writeSuccess(); }
  else if (e.key === " ") { e.preventDefault(); writeAdd(" "); }
  else if (e.key.length === 1) { e.preventDefault(); writeAdd(e.key); }
});
let drawing = false, last = null;
function setupBoard() {
  const canvas = document.getElementById("board");
  const wrap = document.getElementById("boardWrap");
  if (!canvas || !wrap) return;
  const ctx = canvas.getContext("2d");
  const r = wrap.getBoundingClientRect();
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  canvas.width = r.width * dpr; canvas.height = 240 * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.lineCap = "round"; ctx.strokeStyle = "#d85a3a"; ctx.lineWidth = 8;
  const pos = (e) => { const b = canvas.getBoundingClientRect(); const t = e.touches ? e.touches[0] : e; return { x: t.clientX - b.left, y: t.clientY - b.top }; };
  canvas.onmousedown = (e) => { drawing = true; last = pos(e); };
  canvas.onmousemove = (e) => { if (!drawing) return; const p = pos(e); ctx.beginPath(); ctx.moveTo(last.x, last.y); ctx.lineTo(p.x, p.y); ctx.stroke(); last = p; };
  window.onmouseup = () => { drawing = false; };
  canvas.ontouchstart = (e) => { drawing = true; last = pos(e); e.preventDefault(); };
  canvas.ontouchmove = (e) => { if (!drawing) return; const p = pos(e); ctx.beginPath(); ctx.moveTo(last.x, last.y); ctx.lineTo(p.x, p.y); ctx.stroke(); last = p; e.preventDefault(); };
  canvas.ontouchend = () => { drawing = false; };
}
function clearBoard() { setupBoard(); }
function renderRA() {
  document.getElementById("raBox").innerHTML = `
    <h2>Je lis tout haut</h2>
    <div class="giant">${String(S.raItem).length === 1 ? glyph(S.raItem) : S.raItem}</div>
    <p class="sub">${S.raMode === "letter" ? "lettre" : S.raMode === "word" ? "mot" : "syllabe"}</p>
    <div class="row"><button class="btn p" onclick="speakSyl(S.raItem)">Modèle</button><button class="btn m" onclick="listenCheck(S.raItem)">Je lis</button></div>
    <div class="row">
      <button class="btn g" onclick="S.raMode='letter';nextRA()">Lettre</button>
      <button class="btn g" onclick="S.raMode='syl';nextRA()">Syllabe</button>
      <button class="btn g" onclick="S.raMode='word';nextRA()">Mot</button>
    </div>
    <div class="row"><button class="btn s" onclick="nextRA()">Suivant</button></div>`;
}
function nextRA() {
  let pool = [];
  if (S.raMode === "letter") pool = [...VOWELS.map((v) => v.l), ...known().map((c) => c.l)];
  else if (S.raMode === "word") {
    const k = new Set(["a", "e", "i", "o", "u", "é", ...S.unlocked]);
    pool = WORDS.filter((w) => w.need.every((l) => k.has(l))).map((w) => w.w);
  } else pool = syls();
  S.raItem = pool[Math.floor(Math.random() * pool.length)] || "ma";
  renderRA();
}
function renderPhrases() {
  const p = PHRASES[S.phrase];
  const step = S.phraseStep;
  document.getElementById("phrasesBox").innerHTML = `
    <h2>Petites phrases</h2>
    ${pic(p.img)}
    <div class="giant" style="font-size:2.2rem">${p.t}</div>
    <div class="chips">${p.parts.map((part, i) => `<span class="chip${step === i || step === -2 ? " on" : ""}">${part}</span>`).join("")}</div>
    <p class="sub">${step === -2 ? "Toute la phrase" : "Écoute d’abord chaque bout, puis la phrase."}</p>
    <div class="row">
      <button class="btn p" onclick="listenPhrase()">J’écoute</button>
      <button class="btn g" onclick="speak(PHRASES[S.phrase].say, {rate:0.7})">Phrase entière</button>
      <button class="btn m" onclick="listenCheck(PHRASES[S.phrase].say)">Je lis</button>
    </div>
    <div class="row">
      <button class="btn g" onclick="S.phrase=(S.phrase-1+PHRASES.length)%PHRASES.length;S.phraseStep=-1;renderPhrases()">Précédent</button>
      <button class="btn g" onclick="S.phrase=(S.phrase+1)%PHRASES.length;S.phraseStep=-1;renderPhrases()">Suivant</button>
    </div>`;
}
async function listenPhrase() {
  if (S.busy) return;
  S.busy = true;
  const p = PHRASES[S.phrase];
  for (let i = 0; i < p.parts.length; i++) {
    S.phraseStep = i;
    renderPhrases();
    await speak(p.parts[i], { rate: 0.68 });
    await wait(500);
  }
  S.phraseStep = -2;
  renderPhrases();
  await wait(400);
  await speak(p.say, { rate: 0.7 });
  S.busy = false;
}
function renderParent() {
  const vs = (speechSynthesis.getVoices() || []).filter((v) => /fr/i.test(v.lang + v.name));
  document.getElementById("parentBox").innerHTML = `
    <h2>Guide parent</h2>
    <label>Style
      <select onchange="S.style=this.value;save()">
        <option value="cub" ${S.style === "cub" ? "selected" : ""}>Conte (style Disney)</option>
        <option value="child" ${S.style === "child" ? "selected" : ""}>Enfant douce</option>
        <option value="soft" ${S.style === "soft" ? "selected" : ""}>Adulte très douce</option>
      </select>
    </label>
    <label>Voix
      <select onchange="S.voice=this.value;save()">
        <option value="">Auto</option>
        ${vs.map((v) => `<option ${S.voice === v.name ? "selected" : ""}>${v.name}</option>`).join("")}
      </select>
    </label>
    <button class="btn p" onclick="playClip('audio/test-voix.mp3','On lit ensemble, tout doucement.')">Tester la voix</button>
    <p>Règle d’or : le SON, pas le nom. Routine 10 min : voyelle, une île, fusion, je lis, un mot.</p>
    <p><a href="cartes.html">Cartes à imprimer</a></p>
    <button class="btn g" onclick="if(confirm('Remettre à zéro ?')){S.stars=0;S.unlocked=['m'];save();toast('Recommencé')}">Réinitialiser</button>`;
}
function fold(s) {
  return String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z ]/g, " ").replace(/\s+/g, " ").trim();
}
function match(heard, expected) {
  const h = fold(heard), e = fold(expected);
  if (!h || !e) return false;
  if (h === e || h.includes(e) || e.includes(h)) return true;
  return (ALIAS[expected] || []).some((a) => fold(a) === h || h.includes(fold(a)));
}
let rec = null;
function listenCheck(expected) {
  S.expect = expected;
  document.getElementById("ovExpect").innerHTML = String(expected).length === 1 ? glyph(expected) : expected;
  document.getElementById("ovStatus").textContent = "Parle maintenant…";
  document.getElementById("ov").classList.add("on");
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) { document.getElementById("ovStatus").textContent = "Micro indisponible. Dis le mot, puis C’est bon."; return; }
  try {
    rec = new SR(); rec.lang = "fr-FR"; rec.maxAlternatives = 5;
    rec.onresult = (ev) => {
      const t = ev.results[0][0].transcript;
      if (match(t, expected)) finish(true);
      else document.getElementById("ovStatus").textContent = "J’ai entendu « " + t + " ». Réessaie.";
    };
    rec.onerror = () => { document.getElementById("ovStatus").textContent = "Je n’ai pas entendu. Valide à la main si c’était juste."; };
    rec.start();
  } catch (e) { document.getElementById("ovStatus").textContent = "Micro bloqué. Utilise C’est bon."; }
}
function confirmRead() { finish(true); }
function finish(ok) {
  if (ok) { award(); document.getElementById("ovStatus").textContent = "Oui ! Bravo !"; playClip("audio/bravo.mp3", "Bravo !"); setTimeout(stopListen, 900); }
}
function stopListen() { try { rec && rec.abort(); } catch (e) {} document.getElementById("ov").classList.remove("on"); }
save();
