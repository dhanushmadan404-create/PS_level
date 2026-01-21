arr= [ 2, 3, 0, 2, 3, 2]

ans=dict()

def counting(arr):
    for i in range(arr):
        index=i
        value=arr[i]
        for y in range(arr):
            if arr[y]==value:
                
