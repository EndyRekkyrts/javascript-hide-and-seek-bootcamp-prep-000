function getFirstSelector(s) {
  return document.querySelector(s)
}

function nestedTarget() {
  return document.querySelector(`#nested .target`)
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]
  
  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}  

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
} 