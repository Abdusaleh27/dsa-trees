/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (this.root === null) return 0;
    const findMin = (node) => {
      if (!node.left && !node.right) return 1;
      let right = 0;
      let left = 0;

      if (node.right) {
        right = 1 + findMin(node.right);
      }
      if (node.left) {
        left = 1 + findMin(node.left);
      }
      return Math.min(right, left);
    };

    return findMin(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (this.root === null) return 0;
    const findMax = (node) => {
      if (!node.left && !node.right) return 1;
      let right = 0;
      let left = 0;

      if (node.right) {
        right = 1 + findMax(node.right);
      }
      if (node.left) {
        left = 1 + findMax(node.left);
      }
      return Math.max(right, left);
    };

    return findMax(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (this.root === null) return 0;
    let total = 0;
    let queue = [this.root];
    while (queue.length) {
      let current = queue.shift();
      total += current.val;
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return total;
    /**
     *                     6
     *               5             5
     *                         3        1
     *                      2     1
     */

    // const findMax = (node) => {
    //   if (!node.right && !node.left) return node.val;
    //   let right = 0;
    //   let left = 0;
    //   if (node.right) {
    //     right = node.val + findMax(node.right);
    //   }
    //   if (node.left) left = node.val + findMax(node.left);
    //   return Math.max(right, left);
    // };
    // return findMax(this.root);
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (this.root === null) return null;
    let queue = [this.root];
    let val = null;
    while (queue.length) {
      let current = queue.shift();
      if (current.val > lowerBound) {
        if (val === null) val = current.val;
        if (val > lowerBound && current.val < val) val = current.val;
      }
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return val;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
