let a=[20,10,90,9,30]
function Selection(a){
for(let i=0;i<a.length-1;i++){
    let value=i
    for (let y=i;y+1<a.length;y++){
        if(a[value]>a[y]){
            value=y
        }
     }
    if (value!==i){

        let temp=a[value]
        a[value]=a[i]
        a[i]=temp
    }
}
}
Selection(a)
console.log(a)


// function Selection(a){
//     // Outer loop iterates through the array, stopping one element before the end
//     for(let i = 0; i < a.length - 1; i++){
//         // Assume the current element is the minimum
//         let minIndex = i;

//         // Inner loop finds the index of the actual minimum element in the unsorted part
//         for(let j = i + 1; j < a.length; j++){
//             if(a[j] < a[minIndex]){ // Correctly compares elements to find the minimum
//                 minIndex = j; // Update minIndex if a smaller element is found
//             }
//         }

//         // Swap the found minimum element with the first element of the unsorted part
//         if(minIndex !== i){ // Only swap if a smaller element was actually found
//             let temp = a[i];
//             a[i] = a[minIndex];
//             a[minIndex] = temp;
//         }
//     }
//     return a; // Return the sorted array
// }

// Selection(myArray);
// console.log("Sorted:", myArray); // Output: Sorted: [9, 10, 20, 30, 90]
