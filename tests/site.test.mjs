import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import {join} from 'node:path';
const html=readFileSync('dist/index.html','utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
test('one H1 and all editorial destinations exist without duplicate IDs',()=>{
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1);
 assert.equal(new Set(ids).size,ids.length);
 for(const id of ['accueil','expertises','podologie-enfant','podologie-sport','soins','consultation','a-propos','comprendre-le-pied','conseils','faq','contact']) assert.ok(ids.includes(id),id);
});
test('every internal anchor resolves',()=>{
 for(const [,id] of html.matchAll(/href="\/?#([^"]+)"/g)) assert.ok(ids.includes(id),id);
});
test('all referenced local files and page destinations exist',()=>{
 for(const [,path] of html.matchAll(/(?:src|href)="(\/[^"#?]+)"/g)) assert.ok(existsSync(join('dist',path,path.endsWith('/')?'index.html':'')),path);
});
test('development cannot be indexed and sitemap contains no fabricated domain',()=>{
 assert.match(html,/name="robots" content="noindex,nofollow"/);
 assert.match(readFileSync('dist/robots.txt','utf8'),/Disallow: \//);
 assert.ok(!readFileSync('dist/sitemap.xml','utf8').includes('<loc>'));
 assert.ok(!html.includes('application/ld+json'));
});
test('no false contact, third party tracking or fictional booking link',()=>{
 assert.ok(!/href="(?:tel:|mailto:|https:\/\/.*doctolib)/.test(html));
 assert.ok(!/google-analytics|gtag\(|facebook.net|maps.google/.test(html));
 assert.match(html,/Prise de rendez-vous bientôt disponible/);
 assert.match(html,/Images d’ambiance générées/);
});
test('responsive imagery and native disclosure controls remain accessible without JS',()=>{
 assert.ok((html.match(/<details/g)||[]).length>=19);
 assert.match(html,/class="skip"/);assert.match(html,/lang="fr"/);
 for(const tag of html.match(/<img\b[^>]*>/g)||[]) {assert.match(tag,/\balt(?:="[^"]*")?(?=\s|>)/);assert.match(tag,/width="\d+"/);assert.match(tag,/height="\d+"/);}
 assert.match(html,/fetchpriority="high"/);
 assert.match(readFileSync('src/styles/global.css','utf8'),/prefers-reduced-motion/);
});
test('mobile images and JS have bounded transfer budgets',()=>{
 for(const file of ['hero-480.webp','enfant-480.webp','sport-480.webp']) assert.ok(readFileSync('dist/images/'+file).length<100000,file);
 const files=readdirSync('dist/_astro').filter(x=>x.endsWith('.js'));
 assert.ok(files.reduce((total,file)=>total+readFileSync('dist/_astro/'+file).length,0)<15000);
});
