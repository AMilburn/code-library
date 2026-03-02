/**
 * PROBLEM: Reconstruct a Binary Tree from In-Order and Pre-Order Traversals.
 * 
 * @param {Array} inOrder - The in-order traversal of the tree.
 * @param {Array} preOrder - The pre-order traversal of the tree.
 * @returns {Array} - The reconstructed tree in a nested array format [root, left, right].
 */
function reconstructTree(inOrder, preOrder) {
    // Base case: If sequence is empty, we return an empty array to "close" this branch.
    if (!inOrder.length) return [];
    // Locate the root (the most important part)
    const root = preOrder[0];
    const rootIndex = inOrder.indexOf(root);

    // STEP 2: Determine Left and Right subtrees based on the In-Order index.
    const leftInOrder = inOrder.slice(0, rootIndex);
    const rightInOrder = inOrder.slice(rootIndex + 1);

    // STEP 3: Slice Pre-Order based on the size of the left subtree found in In-Order.
    const leftPreOrder = preOrder.slice(1, leftInOrder.length + 1);
    const rightPreOrder = preOrder.slice(leftInOrder.length + 1);

    // STEP 4: Recursively build subtrees, resetting the root each time.
    return [
        root,
        reconstructTree(leftInOrder, leftPreOrder),
        reconstructTree(rightInOrder, rightPreOrder)
    ];
}

return reconstructTree(inOrder, preOrder);
