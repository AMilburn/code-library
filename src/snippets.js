import bfsCode from './snippetsData/trees/bfs.js?raw';
import bfsArgs from './snippetsData/trees/bfsArgs.json?raw';
import dfsCode from './snippetsData/trees/dfs.js?raw';
import dfsArgs from './snippetsData/trees/dfsArgs.json?raw';
import maxSubArrayCode from './snippetsData/arrays/maxSubarray.js?raw';
import maxSubArrayArgs from './snippetsData/arrays/maxSubarrayArgs.json?raw';

export const codeSnippets = [
  {
    id: 'tree-bfs',
    category: 'Trees',
    title: 'Breadth-First Search (BFS)',
    description: 'Traverses a tree data structure level by level directly to the end points. Useful for finding the shortest path.',
    code: bfsCode,
    argsModel: bfsArgs
  },
  {
    id: 'tree-dfs',
    category: 'Trees',
    title: 'Depth-First Search (DFS)',
    description: 'Explores as far as possible along each branch before backtracking. Useful for exhaustive searches.',
    code: dfsCode,
    argsModel: dfsArgs
  },
  {
    id: 'array-contiguous-max',
    category: 'Arrays',
    title: 'Maximum Contiguous Subarray',
    description: "Kadane's Algorithm: Finds the contiguous sub-array within a one-dimensional array of numbers which has the largest sum. Useful for stock/profit analysis.",
    code: maxSubArrayCode,
    argsModel: maxSubArrayArgs
  }
];

export const getCategories = () => {
  const categories = new Set(codeSnippets.map(s => s.category));
  return Array.from(categories);
}

export const getSnippetsByCategory = (category) => {
  return codeSnippets.filter(s => s.category === category);
}
