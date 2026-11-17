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
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') close(true); });
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

// Cache geometry outside scroll handlers; only transform visible images per frame.
const motionWidth = matchMedia('(min-width: 701px)');
const parallaxFrames = [...document.querySelectorAll<HTMLElement>('.parallax')];
const geometry = new Map<HTMLElement, {top: number; height: number}>();
const visible = new Set<HTMLElement>();
let motionFrame = 0;
const paintMotion = () => {
  motionFrame = 0;
  const enabled = !reduced.matches && motionWidth.matches;
  for (const frame of parallaxFrames) {
    if (!enabled) { frame.style.removeProperty('--parallax-y'); continue; }
    if (!visible.has(frame)) continue;
    const box = geometry.get(frame);
    if (!box) continue;
    const progress = Math.max(0, Math.min(1, (scrollY + innerHeight - box.top) / (innerHeight + box.height)));
    frame.style.setProperty('--parallax-y', `${(progress - .5) * 32}px`);
  }
};
const scheduleMotion = () => { if (!motionFrame) motionFrame = requestAnimationFrame(paintMotion); };
const measureMotion = () => {
  for (const frame of parallaxFrames) {
    const box = frame.getBoundingClientRect();
    geometry.set(frame, {top: box.top + scrollY, height: box.height});
  }
  scheduleMotion();
};
if ('IntersectionObserver' in window) {
  const visibility = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const frame = entry.target as HTMLElement;
      if (entry.isIntersecting) visible.add(frame); else visible.delete(frame);
    }
    scheduleMotion();
  });
  parallaxFrames.forEach(frame => visibility.observe(frame));
  if ('ResizeObserver' in window) new ResizeObserver(measureMotion).observe(document.body);
  window.addEventListener('resize', measureMotion);
  window.addEventListener('scroll', scheduleMotion, {passive: true});
  document.addEventListener('toggle', measureMotion, true);
  reduced.addEventListener('change', measureMotion);
  motionWidth.addEventListener('change', measureMotion);
  document.fonts.ready.then(measureMotion);
  measureMotion();
}
