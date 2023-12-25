import functools
import matplotlib.pyplot as plt
import networkx as nx
import operator
import re
data = [
    re.split(r"(?:: )| ", line)
    for line in open("input.in").read().rstrip().split("\n")
]
G = nx.Graph()
for node, *nodes in data:
    for node2 in nodes:
        G.add_edge(node, node2)
G.remove_edge("zcj", "rtt")
G.remove_edge("txl", "hxq")
G.remove_edge("gxv", "tpn")
print("Part 1 solution:", functools.reduce(operator.mul, (len(g) for g in nx.connected_components(G)), 1)
