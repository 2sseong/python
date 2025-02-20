import sys as s
option = s.argv[1]
memo = s.argv[2]
print(option)
print(memo)

if option == '-a':
    f = open('memo.txt','a')
    f.write(memo)
    f.write('\n')
    f.close()
elif option == '-v':
    f = open('memo.txt')
    memo=f.read()
    f.close()
    print(memo)