func maxPoints(points [][]int) int64 {
    currPoints := points[0]

    r := 1
    for {
        if r >= len(points) {
            break
        }

        row := points[r]
        newPoints := row
        for j, v := range row {
            max := v
            for i, p := range currPoints {
                diff := 0
                if i > j {
                    diff = i - j
                } else if j > i {
                    diff = j - i
                }
                diff = v + p - diff 

                if diff > max {
                    max = diff 
                }
            }
            newPoints[j] = max
        }
        currPoints = newPoints
        r++
    }

    max := 0
    for _, v := range currPoints {
        if v > max {
            max = v
        }
    }

    return int64(max)
}