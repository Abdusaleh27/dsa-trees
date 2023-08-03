/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
  findBFS(val) {
    const valsQueue = [this];
    while (valsQueue.length) {
      let currentNode = valsQueue.shift();
      if (currentNode.val === val) return currentNode;
      for (let child of currentNode.children) {
        valsQueue.push(child);
      }
    }
  }

  findDFS(val) {
    const valsStack = [this];
    while (valsStack.length) {
      let currentNode = valsStack.pop();
      if (currentNode.val === val) return currentNode;
      for (let child of currentNode.children) {
        valsStack.push(child);
      }
    }
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;
    let sum = 0;
    sum = this.traverse((current, commonVar) => {
      return commonVar + current;
    });
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    let count = 0;
    count = this.traverse((current, c) => {
      if (current % 2 === 0) return c + 1;
      return c;
    });
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let count = 0;
    count = this.traverse((current, total) => {
      if (current > lowerBound) return total + 1;
      return total;
    });

    return count;
  }

  traverse(func) {
    let stack = [this.root];
    let result = 0;
    while (stack.length) {
      let current = stack.pop();
      result = func(current.val, result);
      for (let child of current.children) {
        stack.push(child);
      }
    }

    return result;
  }
}

module.exports = { Tree, TreeNode };
