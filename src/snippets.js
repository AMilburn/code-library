import bfsCode from './snippetsData/trees/bfs.js?raw';
import bfsArgs from './snippetsData/trees/bfsArgs.json?raw';
import dfsCode from './snippetsData/trees/dfs.js?raw';
import dfsArgs from './snippetsData/trees/dfsArgs.json?raw';
import maxSubArrayCode from './snippetsData/arrays/maxSubarray.js?raw';
import maxSubArrayArgs from './snippetsData/arrays/maxSubarrayArgs.json?raw';
import maxDepthCode from './snippetsData/trees/maxDepth.js?raw';
import maxDepthArgs from './snippetsData/trees/maxDepthArgs.json?raw';
import iterativeDfsCode from './snippetsData/trees/iterativeDfs.js?raw';
import iterativeDfsArgs from './snippetsData/trees/iterativeDfsArgs.json?raw';

export const codeSnippets = [
  {
    id: 'tree-bfs',
    category: 'Trees',
    title: 'Breadth-First Search (BFS)',
    description: 'Traverses a tree data structure level by level directly to the end points. Useful for finding the shortest path.',
    notes: [
      'Faster when the solution is near the root.',
      'Guarantees the shortest path on unweighted graphs.',
      'Implemented iteratively using a Queue (standard) or recursively by tracking levels.',
      'Works on both trees and graphs (requires tracking visited nodes to avoid cycles).',
      'Use Cases: Shortest path routing, social network connections (degrees of separation), web crawlers, and finding the nearest neighbor.'
    ],
    code: bfsCode,
    argsModel: bfsArgs
  },
  {
    id: 'tree-dfs',
    category: 'Trees',
    title: 'Depth-First Search (DFS)',
    description: 'Explores as far as possible along each branch before backtracking. Useful for exhaustive searches.',
    notes: [
      'Faster when the solution is deep in the tree.',
      'Does not guarantee the shortest path.',
      'Implemented recursively (simple) or iteratively using a Stack to avoid recursion limits on deep structures.',
      'Works on both trees and graphs (requires tracking visited nodes to avoid cycles).',
      'Use Cases: Puzzle solving (mazes), topographic sorting, cycle detection, and finding all possible paths between nodes.'
    ],
    code: dfsCode,
    argsModel: dfsArgs
  },
  {
    id: 'dfs-max-depth-recursive',
    category: 'Trees',
    title: 'Max Depth (Recursive)',
    description: 'A Post-order DFS pattern that visits all children before processing the current node. Categorized as a Bottom-Up approach.',
    notes: [
      'Pattern: Children are processed recursively, and results are returned to the parent to complete the calculation.',
      'Primary Use Case: Calculating values that depend on sub-branches, such as directory sizing, tree height, or recursive cleanup.',
      'Execution: The parent context blocks until the child calls return, allowing results to "bubble up" to the root.',
      'Complexity: O(N) time as every node is visited once.'
    ],
    code: maxDepthCode,
    argsModel: maxDepthArgs
  },
  {
    id: 'dfs-max-depth-iterative',
    category: 'Trees',
    title: 'Max Depth (Iterative)',
    description: 'Calculates the height of a tree using a manual stack to track depth at each level.',
    notes: [
      'Mechanism: Replaces the implicit call stack with a manual Array acting as a stack (`push`/`pop`).',
      'Data Mapping: Stores a { node, depth } object in the stack to track progress through branches.',
      'Safety: Prevents "Maximum Call Stack Size Exceeded" errors on extremely deep trees (10,000+ nodes).',
      'Complexity: O(N) time and O(W) space (where W is the maximum width of the tree).'
    ],
    code: iterativeDfsCode,
    argsModel: iterativeDfsArgs
  },
  {
    id: 'array-contiguous-max',
    category: 'Arrays',
    title: 'Maximum Contiguous Subarray',
    description: "Kadane's Algorithm: Finds the contiguous sub-array within a one-dimensional array of numbers which has the largest sum. Useful for stock/profit analysis.",
    notes: [
      'O(n) time complexity (single pass through the array).',
      'O(1) space complexity.',
      'Works by maintaining the maximum sum ending at the current position.',
      'Can be modified to return the indices of the subarray as well.'
    ],
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
