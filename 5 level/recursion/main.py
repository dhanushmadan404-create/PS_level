def fib(num):
    if num<=1:
        return num
    else:
        return num*fib(num-1)
print(fib(5))

# Recursion
'''
   print(fib(5))   =return number=5*4=fib(4)
fib(4)=return number=4*3=fib(3)
fib(3)=return number=3*2=fib(2)
fib(2)=return number=2*1=fib(1)
fib(1)=return number=1


OUTPUT=120
'''