import sys

value = sys.argv[1:]

for i in range(int(value[0][:-1]),int(value[0][:-1])+int(value[1])):
    print("="*10+f'{i}단'+"="*10)
    for l in range(1,10):
        print(f'{i}x{l} = {i*l}')








