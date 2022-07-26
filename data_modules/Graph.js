class Edge {
  constructor(start, end, weight = null) {
    this.start = start
    this.end = end
    this.weight = weight
  }
}

class Vertex {
  constructor(data) {
    this.data = data
    this.edges = []
  }

  addEdge(vertex, weight) {
    if (vertex instanceof Vertex) {
      this.edges.push(new Edge(this, vertex, weight))
    } else {
      throw new Error('Provided vertices must be instances of the Vertex class.')
    }
  }

  removeEdge(vertex) {
    this.edges = this.edges.filter(edge => edge.end !== vertex)
  }

  print() {
    const edgeList = this.edges.map(edge => edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data) || []
    const output = `${this.data} --> ${edgeList.join(', ')}`
    console.log(output)
  }
}

class Graph {
  constructor(isWeighted = false, isDirected = false) {
    this.vertices = []
    this.isWeighted = isWeighted
    this.isDirected = isDirected
  }

  addVertex(data) {
    const newVertex = new Vertex(data)
    this.vertices.push(newVertex)
    return newVertex
  }

  removeVertex(vertex) {
    this.vertices = this.vertices.filter(v => v !== vertex)
  }

  addEdge(vertexOne, vertexTwo, weight) {
    const edgeWeight = this.isWeighted ? weight : null
    if ([vertexOne, vertexTwo].every(vertex => vertex instanceof Vertex)) {
      vertexOne.addEdge(vertexTwo, edgeWeight)
      if (!this.isDirected) {
        vertexTwo.addEdge(vertexOne, edgeWeight)
      }
    } else {
      throw new Error('Provided vertices must be instances of the Vertex class.')
    }
  }

  removeEdge(vertexOne, vertexTwo) {
    if ([vertexOne, vertexTwo].every(vertex => vertex instanceof Vertex)) {
      vertexOne.removeEdge(vertexTwo)
      if (!this.isDirected) {
        vertexTwo.removeEdge(vertexOne)
      }
    } else {
      throw new Error('Provided vertices must be instances of the Vertex class.')
    }
  }

  print() {
    const vertexList = this.vertices || [];
    vertexList.forEach(vertex => vertex.print());
  }
}


module.exports = Graph;
