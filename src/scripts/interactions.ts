const header = document.querySelector<HTMLElement>('#site-header');
const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const nav = document.querySelector<HTMLElement>('#navigation');
if (header && toggle && nav) {
  document.documentElement.classList.add('js');
  toggle.hidden = false;
  const close = (restoreFocus = false) => {
    toggle.setAttribute('aria-expanded', 'false');
    header.classList.remove('menu-open');
    if (restoreFocus) toggle.focus();
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    header.classList.toggle('menu-open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => close()));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(true); });
  document.addEventListener('click', e => { if (!header.contains(e.target as Node)) close(); });
  header.addEventListener('focusout', () => { requestAnimationFrame(() => {if (!header.contains(document.activeElement)) close();}); });
  const wide = matchMedia('(min-width: 1051px)');
  wide.addEventListener('change', () => close());
  let scheduled = false;
  const update = () => { header.classList.toggle('scrolled', window.scrollY > 24); scheduled = false; };
  window.addEventListener('scroll', () => { if (!scheduled) {scheduled = true; requestAnimationFrame(update);} }, {passive: true});
  update();
}
// Reveal only as progressive enhancement: text remains visible even without JS.
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reduced.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {if (entry.isIntersecting) { entry.target.classList.add('arrived'); observer.unobserve(entry.target); }});
  }, {threshold: .12});
  document.querySelectorAll('.section-heading, .expertise-copy, .service').forEach(el => observer.observe(el));
}
// Active section state follows the document, not the last clicked link.
if ('IntersectionObserver' in window) {
 const links = [...document.querySelectorAll<HTMLAnchorElement>('#navigation a[href*="#"]')];
 const activeObserver = new IntersectionObserver(entries => {
  for (const entry of entries) if (entry.isIntersecting) {
   links.forEach(link => {
    if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current','location');
    else link.removeAttribute('aria-current');
   });
  }
 }, {rootMargin:'-15% 0px -65% 0px',threshold:0});
 document.querySelectorAll('main section[id]').forEach(section=>activeObserver.observe(section));
}
