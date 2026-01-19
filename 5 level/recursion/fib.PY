
num1 = [0,1]
def fib(num):
    for i in range(2,num+1):
        num1.append(num1[i-1]+num1[i-2])

print(num1)
fib(5)