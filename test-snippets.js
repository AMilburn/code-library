import fs from 'fs';
const bfsCode = fs.readFileSync('src/snippetsData/trees/bfs.js', 'utf8');
console.log("BFS length:", bfsCode.length);
