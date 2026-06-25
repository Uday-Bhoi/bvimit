import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generatedFile = path.resolve(__dirname, '../src/data/site/legacy-pages.generated.ts');
const content = fs.readFileSync(generatedFile, 'utf8');

const regex = /"\/legacy\/([^"]+)"/g;
const matches = [...content.matchAll(regex)].map(m => m[1]);
const uniqueMatches = [...new Set(matches)];

const legacyDir = path.resolve(__dirname, '../../bvimit');
const publicDir = path.resolve(__dirname, '../public/legacy');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

let copiedCount = 0;
let missingCount = 0;

for (const match of uniqueMatches) {
  let sourcePath = match;
  if (match.startsWith('pdfs/')) {
    sourcePath = 'pdf/' + match.slice(5);
  }

  // Handle URL hashes/query params
  sourcePath = sourcePath.split('?')[0].split('#')[0];
  const destPath = match.split('?')[0].split('#')[0];

  const srcFile = path.join(legacyDir, sourcePath);
  const destFile = path.join(publicDir, destPath);

  try {
    if (fs.existsSync(srcFile)) {
      const stat = fs.statSync(srcFile);
      if (stat.isFile()) {
        fs.mkdirSync(path.dirname(destFile), { recursive: true });
        fs.copyFileSync(srcFile, destFile);
        copiedCount++;
      } else {
         console.log(`Skipping directory: ${srcFile}`);
      }
    } else {
      console.log(`Missing: ${srcFile}`);
      missingCount++;
    }
  } catch (err) {
    console.error(`Error copying ${srcFile}: ${err.message}`);
  }
}

console.log(`Copied ${copiedCount} assets. Missing ${missingCount} assets.`);
