class TreeNode {
  constructor(data) {
    this.data = data
    this.children = []
  }

  addChild(child) {
    if (child instanceof TreeNode) {
      this.children.push(child)
    } else {
      this.children.push(new TreeNode(child))
    }
  }

  removeChild(childToRemove) {
    const length = this.children.length
    this.children = this.children.filter(child => {
      if (childToRemove instanceof TreeNode) {
        return childToRemove !== child
      } else {
        return childToRemove !== child.data
      }
    })
    if (length === this.children.length) {
      this.children.forEach(child => child.removeChild(childToRemove))
    }
  }
}

module.exports = TreeNode
