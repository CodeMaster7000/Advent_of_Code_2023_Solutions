from collections import defaultdict
import sys
from typing import DefaultDict, List
FILE = sys.argv[1] if len(sys.argv) > 1 else "input.in"
def read_lines_to_list() -> List[str]:
    lines: List[str] = []
    with open(FILE, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            lines.append(line.split(","))
    return lines[0]
def run_hash(s: str) -> int:
    value = 0
    for c in s:
        value += ord(c)
        value *= 17
        value %= 256
    return value
def Part1():
    ops = read_lines_to_list()
    answer = 0
    for op in ops:
        answer += run_hash(op)
    print(f"Part 1 solution: {answer}")
def Part2():
    ops = read_lines_to_list()
    answer = 0
    boxes: DefaultDict[int, List[str, int]] = defaultdict(list)
    for op in ops:
        if "-" in op:
            val = op[:-1]
            hash = run_hash(val)
            for i in reversed(range(len(boxes[hash]))):
                if boxes[hash][i][0] == val:
                    boxes[hash].pop(i)
        elif "=" in op:
            [val, focal] = op.split("=")
            focal = int(focal)
            hash = run_hash(val)
            for lens in boxes[hash]:
                if lens[0] == val:
                    lens[1] = focal
                    break
            else:
                boxes[hash].append([val, focal])
    for key, lenses in boxes.items():
        for itx, lens in enumerate(lenses):
            val = (key + 1) * (itx + 1) * lens[1]
            answer += val
    print(f"Part 2 solution: {answer}")
Part1()
Part2()
