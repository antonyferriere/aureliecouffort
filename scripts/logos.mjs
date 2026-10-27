import {writeFileSync} from 'node:fs';
const mark = '<path d="M8 49 24 12l16 37M15 35h18M46 20c-19-13-33 23-13 29 5 1 10-1 14-4" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M28 12c-1 11-1 18 3 24 4 5 3 12-3 15-5 3-12 0-10-4" fill="none" stroke="currentColor" stroke-width="1.3"/>';
for (const [name,color] of [['sauge','#365c4c'],['graphite','#2c2a28'],['monochrome','#000000']]) {
 for(const [layout,width,height,body] of [
 ['monogramme',58,64,mark],
 ['horizontal',340,70,`${mark}<text x="72" y="30" font-family="Georgia,serif" font-size="25" fill="currentColor">Aurélie Couffort</text><text x="73" y="49" font-family="Arial,sans-serif" font-size="10" letter-spacing="1.4" fill="currentColor">PÉDICURE-PODOLOGUE</text>`],
 ['vertical',260,150,`<g transform="translate(101,0)">${mark}</g><text x="130" y="100" text-anchor="middle" font-family="Georgia,serif" font-size="26" fill="currentColor">Aurélie Couffort</text><text x="130" y="125" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" letter-spacing="1.2" fill="currentColor">PÉDICURE-PODOLOGUE</text>`],
 ]) writeFileSync(`public/logos/${layout}-${name}.svg`,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" style="color:${color}">${body}</svg>`);
}
writeFileSync('public/favicon.svg','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#365c4c"/><path d="M12 48 27 15l14 33M19 34h15M50 20c-19-13-30 20-13 27 5 2 9 0 13-4" fill="none" stroke="#f6f1ea" stroke-width="3" stroke-linecap="round"/></svg>');
