const header=document.querySelector('.site-header');
const toggle=document.querySelector('.menu-toggle');
toggle?.addEventListener('click',()=>{const open=header.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.desktop-nav a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}));
const links=[...document.querySelectorAll('.desktop-nav a')];
const sections=['top','projects','solutions','about','contact'].map(id=>document.getElementById(id)).filter(Boolean);
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(x=>x.classList.toggle('active',x.getAttribute('href')==='#'+entry.target.id));}})},{rootMargin:'-30% 0px -60% 0px',threshold:0});
sections.forEach(s=>observer.observe(s));