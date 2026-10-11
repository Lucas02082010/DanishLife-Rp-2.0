const APPS='danishlife_applications_v1', NEWS='danishlife_news_v1';
/* Lokal demo-kode: DL2026. Dette er IKKE sikker adgangskontrol til offentlig hosting. */
const ADMIN_CODE='DL2026';
const loginGate=document.querySelector('#loginGate');
const dashboard=document.querySelector('#adminDashboard');
document.querySelector('#loginForm').addEventListener('submit',e=>{
 e.preventDefault();
 if(new FormData(e.currentTarget).get('code')===ADMIN_CODE){loginGate.hidden=true;dashboard.hidden=false;renderApps();renderNewsAdmin();}
 else document.querySelector('#loginMessage').textContent='Forkert kode. Prøv igen.';
});
const read=(k)=>{try{const x=JSON.parse(localStorage.getItem(k)||'[]');return Array.isArray(x)?x:[]}catch{return[]}};
const save=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const esc=(v)=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function renderApps(){
 const host=document.querySelector('#applications'), apps=read(APPS);
 if(!apps.length){host.innerHTML='<p>Der er ingen ansøgninger i denne browsers lokale lager endnu. Send en testansøgning fra hjemmesiden.</p>';return;}
 host.innerHTML=apps.map(a=>`<article class="admin-item"><h3>${esc(a.name)} — ${esc(a.role)}</h3><p><b>Status:</b> ${esc(a.status)} · <b>Modtaget:</b> ${esc(a.createdAt)}</p><p>${esc(a.message)}</p><button data-status="Under behandling" data-id="${a.id}">Under behandling</button><button data-status="Godkendt" data-id="${a.id}">Godkend</button><button data-status="Afvist" data-id="${a.id}">Afvis</button><button data-delete="${a.id}">Slet</button></article>`).join('');
 host.querySelectorAll('[data-status]').forEach(b=>b.onclick=()=>{const list=read(APPS);const a=list.find(x=>String(x.id)===b.dataset.id);if(a){a.status=b.dataset.status;save(APPS,list);renderApps();}});
 host.querySelectorAll('[data-delete]').forEach(b=>b.onclick=()=>{if(confirm('Vil du slette denne ansøgning?')){save(APPS,read(APPS).filter(x=>String(x.id)!==b.dataset.delete));renderApps();}});
}
function renderNewsAdmin(){const host=document.querySelector('#newsAdmin'), news=read(NEWS);host.innerHTML=news.map(n=>`<article class="admin-item"><h3>${esc(n.title)}</h3><p>${esc(n.body)}</p><button data-news-delete="${n.id}">Slet nyhed</button></article>`).join('')||'<p>Du har ikke oprettet nyheder endnu.</p>';host.querySelectorAll('[data-news-delete]').forEach(b=>b.onclick=()=>{save(NEWS,read(NEWS).filter(n=>String(n.id)!==b.dataset.newsDelete));renderNewsAdmin();});}
document.querySelector('#newsForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget).entries());const news=read(NEWS);news.unshift({...data,id:Date.now()});save(NEWS,news);e.currentTarget.reset();renderNewsAdmin();alert('Nyheden er gemt i denne browser.');});
