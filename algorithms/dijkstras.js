// input adjacency list, start, end
// output array of shortest path of vertices from start to end

let input = {
    A: [['B', 6], ['D', 1]],
    B: [['A', 6], ['D', 2], ['E', 2]],
    C: [['B', 5], ['E', 5]],
    D: [['A', 1], ['B', 2], ['E', 1]],
    E: [['B', 2], ['D', 1], ['C', 5]]
};

let table = getTableOfShortestPaths(input, 'A');
console.log(table);
console.log(getPath('A', table));
console.log(getPath('B', table));
console.log(getPath('C', table));
console.log(getPath('D', table));
console.log(getPath('E', table));

function getTableOfShortestPaths(graph, startVertex, endVertex) {
    let unvisited = Object.keys(graph);
    let visited = {};
    let table = getTable(unvisited, startVertex);
    while(unvisited.length > 0) {
        let currentVertex = getUnvisitedVertexWithLeastDistanceFromStart(table, unvisited);
        let vertices = graph[currentVertex];
        let currentVertexDistanceFromStart = table[currentVertex][0];

        for(let i = 0, l = vertices.length; i < l; i++) {
            let neighbor = vertices[i];
            let neighborVertex = neighbor[0];
            let neighborDistance = neighbor[1];
            let newDistanceFromStart = currentVertexDistanceFromStart + neighborDistance;

            // If not visited
            if(visited[neighborVertex] === undefined && newDistanceFromStart < table[neighborVertex][0]) {
                table[neighborVertex][0] = newDistanceFromStart;
                table[neighborVertex][1] = currentVertex;
            }
        }

        removeVertex(currentVertex, unvisited);
        visited[currentVertex] = true;
    }

    function removeVertex(vertex, unvisited) {
        var index = unvisited.indexOf(vertex);

        if(index > -1) {
            unvisited.splice(index, 1);
        }
    }

    function getUnvisitedVertexWithLeastDistanceFromStart(table, unvisited) {
        let vertexWithLeastDistanceFromStart = unvisited[0];
        let leastDistanceFromStart = table[unvisited[0]][0];

        for(let i = 0, l = unvisited.length; i < l; i++) {
            if(table[unvisited[i]][0] < leastDistanceFromStart) {
                leastDistanceFromStart = table[unvisited[i]][0];
                vertexWithLeastDistanceFromStart = unvisited[i];
            }
        }

        return vertexWithLeastDistanceFromStart;
    }

    function getTable(vertexArray, startVertex) {
        let result = {};

        for(let i = 0, l = vertexArray.length; i < l; i++) {
            let lengthFromStart = Infinity;

            if(vertexArray[i] === startVertex) {
                lengthFromStart = 0;
            }

            result[vertexArray[i]] = [lengthFromStart, null];
        }

        return result;
    }

    return table;
}

function getPath(endVertex, table) {
    let result = [];

    if(table[endVertex]) {
        do {
            result.unshift(endVertex);
            endVertex = table[endVertex][1];
        } while(endVertex !== null);
    }

    return result;
}