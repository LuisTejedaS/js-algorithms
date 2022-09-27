
class DFSAlgorithm {
  traverse(node) {
    let traverseOrder = [],
      stack = [],
      visited = new Set();
    stack.push(node);
    while (stack.length > 0) {
      node = stack.pop();
      if (!visited.has(node)) {
        traverseOrder.push(node);
        visited.add(node);
      this.processChildren(node, visited, stack);
      }
    }
    while (traverseOrder.length > 0) {
      let element = traverseOrder.shift();
      console.log(element);
    }
  }

  processChildren(currentElement, visitedElements, stack) {
    for (let childrenIndex = currentElement.children.length- 1; childrenIndex >= 0; childrenIndex--) {
      let elementChild = currentElement.children[childrenIndex];
      if (!visitedElements.has(elementChild)) {
        stack.push(elementChild);
      }
    }
  }
 
}

module.exports = {
  DFSAlgorithm
};
