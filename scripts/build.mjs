import { readFile, writeFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const images = await Promise.all(Array.from({ length: 22 }, async (_, i) => {
  const bytes = await readFile(new URL(`assets/${String(i).padStart(2, '0')}.jpg`, root));
  if (bytes[0] !== 0xff || bytes[1] !== 0xd8) throw new Error(`Invalid JPEG: ${i}`);
  return `data:image/jpeg;base64,${bytes.toString('base64')}`;
}));
const template = await readFile(new URL('src/client.template.js', root), 'utf8');
if (!template.includes('__CARD_IMAGES__')) throw new Error('Missing image placeholder');
await writeFile(new URL('client.js', root), template.replace('__CARD_IMAGES__', JSON.stringify(images)));
console.log('Built offline client with 22 card images.');
