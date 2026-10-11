const $ = (s) => document.querySelector(s);
const menuToggle = $('#menuToggle');
const nav = $('#nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}
$('#year').textContent = new Date().getFullYear();

const STORAGE_APPS = 'danishlife_applications_v1';
const STORAGE_NEWS = 'danishlife_news_v1';
function readStore(key, fallback=[]) {
  try { const value = JSON.parse(localStorage.getItem(key) || 'null'); return Array.isArray(value) ? value : fallback; }
  catch { return fallback; }
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
const form = $('#applicationForm');
if (form) form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const applications = readStore(STORAGE_APPS);
  applications.unshift({...data, id: Date.now(), createdAt: new Date().toLocaleString('da-DK'), status:'Modtaget'});
  localStorage.setItem(STORAGE_APPS, JSON.stringify(applications));
  form.reset();
  $('#formMessage').textContent = 'Tak! Din ansøgning er gemt i denne browser. I denne version er den ikke sendt til en server eller administrator.';
  $('#formMessage').style.color = '#8ee4b1';
});
function renderNews() {
  const grid = $('#newsGrid');
  if (!grid) return;
  const news = readStore(STORAGE_NEWS);
  if (!news.length) return;
  grid.innerHTML = news.map(item => `<article class="news-card"><div class="news-image city-image"><span>NYHED</span></div><div class="news-body"><small>${escapeHTML(item.date || 'DANISHLIFE RP')}</small><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.body)}</p></div></article>`).join('');
}
renderNews();