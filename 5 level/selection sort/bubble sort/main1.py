array=[80,40,10,50,20]

# by two loop while and for loop 
def function(arr):
    oop = True
    while oop:
        oop = False
        for i in range(len(arr) - 1):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                oop = True
    print(arr)

function([80, 40, 10, 50, 20])

# if num is greater then next number swap the place 