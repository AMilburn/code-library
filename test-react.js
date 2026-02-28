import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const file = fs.readFileSync('src/snippets.js', 'utf8');
console.log(file);
