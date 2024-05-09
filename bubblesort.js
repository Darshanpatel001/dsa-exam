let arr=[22,3,545,56,67,68]
for(let i=0;i<arr.length;i++){
    let swap=false
    for(let j=0; j<arr.length;j++){
        if(arr[j]>arr[j+1]){
            let temporary =arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temporary
            swap=true
        }
    }
    if(!swap){
        break
    }
}
console.log(arr);