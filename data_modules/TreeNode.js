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
      childToRemove instanceof TreeNode ? childToRemove !== child : childToRemove !== child.data
    })
    if (length === this.children.length) {
      this.children.forEach(child => child.removeChild(childToRemove))
    }
  }

  print(level = 0) {
    let result = ''
    for (let i = 0; i < level; i++) {
      result += '-- '
    }
    console.log(`${result}${this.data}`)
    this.children.forEach(child => child.print(level + 1))
  }

  depthFirstTraversal() {
    console.log(this.data)
    this.children.forEach(child => child.depthFirstTraversal())
  }

  breadthFistTraversal() {
    let queue = [this]
    while (queue.length > 0) {
      const current = queue.shift()
      console.log(current.data)
      queue = queue.concat(current.children)
    }
  }
}

module.exports = TreeNode
