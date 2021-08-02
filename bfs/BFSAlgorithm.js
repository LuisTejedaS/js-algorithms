
class BFSAlgorithm {


  traverse(root) {
    let traverseOrder = [],
      queue = [],
      visitedElements = new Set();
    queue.push(root);
    while (queue.length > 0) {
      let currentElement = queue.shift();
      traverseOrder.push(currentElement);
      this.processChildren(currentElement, visitedElements, queue);
    }
    while (traverseOrder.length > 0) {
      let element = traverseOrder.shift();
      console.log(element);
    }
  }

  processChildren(currentElement, visitedElements, queue) {
    for (let childrenIndex = 0; childrenIndex < currentElement.children.length; childrenIndex++) {
      let elementChild = currentElement.children[childrenIndex];
      if (!visitedElements.has(elementChild)) {
        queue.push(elementChild);
        visitedElements.add(elementChild);
      }
    }
  }
 
}

module.exports = {
  BFSAlgorithm
};
