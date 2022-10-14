const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

class BinarySearchTree {

  rootTree = null;

  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }
  add(data) {
    let newNode = new Node(data);

    if (!this.rootTree) {
        this.rootTree = newNode;
    } else {
        addNode(this.rootTree, newNode);
    }

      function addNode(x, newNode) {
          if (newNode.data < x.data) {
              if (!x.left) {
                  x.left = newNode;
              } else {
                  addNode(x.left, newNode);
              }
          } else {
              if (!x.right) {
                  x.right = newNode;
              } else {
                  addNode(x.right, newNode);
              }
          }
      }
  }

  has(data) {
      let node = this.find(data);
      if (!node) {
        return false;
      } else return true;
    }

  find(data) {
    if (!this.rootTree) {
      return null;
  } let node = this.rootTree;
    if (node.data === data) {
      return node;
    }
    else {
      while (node)
          if (node.data === data) {
            return node;
          } else {
              if (data < node.data) {
                  node = node.left;
              } else {
                  node = node.right;
              }
          }
      }
      return null;
  }
  remove(data) {
      this.rootTree = deleteNode(this.rootTree, data);

      function deleteNode(node, data) {
          if (!node) {
            return null;
           } else if (data < node.data) {
              node.left = deleteNode(node.left, data);
              return node;
          } else if (data > node.data) {
              node.right = deleteNode(node.right, data);
              return node;
          } else {
              if (!node.left && !node.right){
                node = null;
              } else if (!node.left) {
                  node = node.right;
                  return node;
              } else if (!node.right) {
                  node = node.left;
                  return node;
              } else {
                  let minRight = node.right;
                  while (minRight.left) {
                    minRight = minRight.left;
                  }
                  node.data = minRight.data;
                  node.right = deleteNode(node.right, minRight.data);
                  return node;
              }
          }
      }
  }
  min() {
    let node = this.rootTree;
    if (!node) {
      return null;
    } while (node.left) {
        node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.rootTree;
    if (!node) {
      return null;
    }
    while (node.right) {
        node = node.right;
    }
    return node.data;
  }
}

module.exports = {
    BinarySearchTree,
};