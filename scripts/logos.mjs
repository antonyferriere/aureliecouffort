import {writeFileSync} from 'node:fs';

const mark = '<path d="M0 32 12 1H17L29 32H23.6L20.2 23H8.7L5.3 32ZM10.3 18.5H18.6L14.4 7.3ZM55.5 5.7 52.3 9C50 6.5 47.5 5 44 5 37.7 5 33.6 9.6 33.6 16.5S37.7 28 44 28C47.5 28 50.3 26.4 52.6 23.8L56 27C52.8 30.8 48.8 32.7 43.8 32.7 34.8 32.7 28.6 26.1 28.6 16.5S34.8.3 43.8.3C48.8.3 52.7 2.2 55.5 5.7Z"/>';
const palette = {sauge: '#365c4c', graphite: '#2c2a28', monochrome: '#000000'};
const frames = {monogramme: '-2 -2 60 37', horizontal: '-8 -4 72 41', vertical: '-4 -16 64 65'};

for (const [name, color] of Object.entries(palette)) {
  for (const [layout, viewBox] of Object.entries(frames)) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="${color}">${mark}</svg>\n`;
    writeFileSync(`public/logos/${layout}-${name}.svg`, svg);
  }
}

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="${palette.sauge}"/><g transform="translate(4 15.5)" fill="#f6f1ea">${mark}</g></svg>\n`;
writeFileSync('public/favicon.svg', favicon);
