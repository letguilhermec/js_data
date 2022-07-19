const nthLastNode = (list, n) => {
  let current = null
  let tailSeeker = list.head
  let count = 0

  while (tailSeeker !== null) {
    tailSeeker = tailSeeker.getNextNode()
    if (count >= n) {
      if (current === null) {
        current = list.head
      }
      current = current.getNextNode()
    }
    count++
  }
  return current
}

module.exports = nthLastNode
