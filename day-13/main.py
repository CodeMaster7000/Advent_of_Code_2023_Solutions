import utils.util as util
from function import *
input_lines = util.read_file("input.in")
reflections = parse_input(input_lines)
part_1_answer = Part1(reflections)
print(f"Part 1 solution: {part_1_answer}")
part_2_answer = Part2(reflections)
print(f"Part 2 solution: {part_2_answer}")
