function fun1(grids, sizes) {
  if (grids == null || sizes  == null) return 0

  grids = grids.sort()
  sizes = sizes.sort()

  let gi = 0, si = 0
  while(gi < grids.length && si < sizes.length) {
    if (grids[gi] <= sizes[si]) {
      gi++
    }
    si++
  }

  return gi
}

function fun2(intervals) {
  if (intervals.length === 0) return 0

  intervals = intervals.sort((o1, o2) => o1[1] > o2[1])
  let cnt = 1
  let end = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) {
      continue
    }
    end = intervals[i][1]
    cnt++
  }
  return intervals.length - cnt
}

function fun3(points) {
  if (points.length === 0) return 0

  points = points.sort((o1, o2) => o1[1] - o2[1])
  let cnt = 1, end = points[0][1]
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] <= end) {
      continue
    }
    cnt++
    end = points[i][1]
  }
  return cnt
}