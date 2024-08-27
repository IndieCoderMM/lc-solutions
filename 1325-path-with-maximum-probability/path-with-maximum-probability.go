import (
    "container/heap"
)

type Item struct {
    priority float64
    value int 
    index int
}

type PQ []*Item

func (pq PQ) Len() int { return len(pq) }

func (pq PQ) Less(i, j int) bool { return pq[i].priority > pq[j].priority }

func (pq PQ) Swap(i, j int) {
    pq[i], pq[j] = pq[j], pq[i]
    pq[i].index = j
    pq[j].index = i
}

func (pq *PQ) Push(x any) {
    n := len(*pq)
	item := x.(*Item)
	item.index = n
	*pq = append(*pq, item)
}

func (pq *PQ) Pop() any {
    old := *pq
	n := len(old)
	item := old[n-1]
	old[n-1] = nil  
	item.index = -1 // for safety
	*pq = old[0 : n-1]
	return item
}

type Path struct {
    to int
    prob float64
}

func maxProbability(n int, edges [][]int, succProb []float64, start_node int, end_node int) float64 {
    graph := make(map[int][]Path)
    visited := make(map[int]bool)

    pq := PQ{&Item{
        value: start_node,
        priority: 1,
        index: 0,
    }}

    for i, e := range edges {
        from, to := e[0], e[1]
        prob := succProb[i]
        graph[from] = append(graph[from], Path{to, prob})
        graph[to] = append(graph[to], Path{from, prob})
    }
    
    for {
        if len(pq) == 0 {
            return 0
        }

        curr := heap.Pop(&pq).(*Item)
        visited[curr.value] = true

        if curr.value == end_node {
            return curr.priority
        }
        
        neighbors, ok := graph[curr.value]
        if !ok {
            return 0
        }

        for _, n := range neighbors {
            _, isVisited := visited[n.to]
            if isVisited {
                continue
            }
            heap.Push(&pq, &Item{
                value: n.to,
                priority: n.prob * curr.priority,
                index: len(pq),
            })
        } 
    }

    return 0
}