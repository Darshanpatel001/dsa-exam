let arr=[232,34454,55,56,6,66,7,87]
let minimum;
for(let i=0;i<arr.length;i++){
    minimum=i
    for(let j=i+1; j<arr.length;j++){
        if(arr[minimum]>arr[j]){
            minimum=j
        }
    }
    let temporary=arr[minimum]
    arr[minimum]=arr[i]
    arr[i]=temporary
}
console.log(arr);