import {writeFileSync} from 'node:fs';

const letters = 'M1 32 14 1 27 32 M6.5 19H21.5 M55 6C52 2.8 48.8 1 44 1 35.7 1 30 7.6 30 16.5S35.7 32 44 32C48.8 32 52.3 30.1 55.3 26.8';
const mark = (width) => `<path d="${letters}" fill="none" stroke="currentColor" stroke-width="${width}" stroke-linejoin="round"/>`;
const palette = {sauge: '#365c4c', graphite: '#2c2a28', monochrome: '#000000'};
const frames = {monogramme: '-2 -2 60 37', horizontal: '-8 -4 72 41', vertical: '-4 -16 64 65'};

for (const [name, color] of Object.entries(palette)) {
  for (const [layout, viewBox] of Object.entries(frames)) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" color="${color}">${mark(1.8)}</svg>\n`;
    writeFileSync(`public/logos/${layout}-${name}.svg`, svg);
  }
}

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="${palette.sauge}"/><g transform="translate(4 15.5)" color="#f6f1ea">${mark(2.8)}</g></svg>\n`;
writeFileSync('public/favicon.svg', favicon);
