from queue import Queue
with open("./input.in", "r") as f:
    m = [l.strip() for l in f]
    n = {
        "|": [ ( 0,-1), ( 0, 1) ],
        "-": [ (-1, 0), ( 1, 0) ],
        "L": [ ( 0,-1), ( 1, 0) ],
        "J": [ ( 0,-1), (-1, 0) ],
        "7": [ (-1, 0), ( 0, 1) ],
        "F": [ ( 1, 0), ( 0, 1) ],
    }
    x,y = None, None
    for yi,line in enumerate(m):
        for xi,c in enumerate(line):
            if c == "S":
                x,y = xi,yi
                break
    assert(x != None)
    assert(y != None)
    q = Queue()
    for dx,dy in [(-1,0),(1,0),(0,-1),(0,1)]:
        c = m[y+dy][x+dx]
        if c in n:
            for dx2,dy2 in n[c]:
                if x == x+dx+dx2 and y == y+dy+dy2:
                    q.put((1,(x+dx,y+dy)))
    dists = { (x,y): 0 }
    assert(q.qsize() == 2)
    while not q.empty():
        d,(x,y) = q.get()
        if (x,y) in dists:
            continue
        dists[(x,y)] = d
        for dx,dy in n[m[y][x]]:
            q.put((d+1,(x+dx,y+dy)))
    print(f"Part 1 solution: {max(dists.values())}")
    w = len(m[0])
    h = len(m)
    inside_count = 0
    for y,line in enumerate(m):
        for x,c in enumerate(line):
            if (x,y) in dists:
                continue
            crosses = 0
            x2,y2 = x,y
            while x2 < w and y2 < h:
                c2 = m[y2][x2]
                if (x2,y2) in dists and c2 != "L" and c2 != "7":
                    crosses += 1
                x2 += 1
                y2 += 1
            if crosses % 2 == 1:
                inside_count += 1
    print(f"Part 2 solution: {inside_count}")
