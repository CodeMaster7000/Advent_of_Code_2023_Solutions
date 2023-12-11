from itertools import combinations
with open("./input.in", "r") as f:
    m = [list(line.strip()) for line in f]
    w,h = len(m[0]), len(m)
    galaxies = [(x,y) for y in range(h) for x in range(w) if m[y][x] == "#"]
    cols = [x for x in range(w) if all(m[y][x] == "." for y in range(h))]
    rows = [y for y in range(h) if all(m[y][x] == "." for x in range(w))]
    def expand(factor):
        expanded = []
        for (x,y) in galaxies:
            cs = (factor - 1) * sum(1 for c in cols if c < x)
            rs = (factor - 1) * sum(1 for r in rows if r < y)
            expanded.append((x+cs,y+rs))
        return expanded
    def manhattan(p1, p2):
        x1,y1 = p1
        x2,y2 = p2
        return abs(x2 - x1) + abs(y2 - y1)
    Part1 = sum(manhattan(g1,g2) for g1,g2 in combinations(expand(2),2))
    Part2 = sum(manhattan(g1,g2) for g1,g2 in combinations(expand(1000000),2))
    print(f"Part 1 solution: {Part1}")
    print(f"Part 2 solution: {Part2}")
