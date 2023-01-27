function first(){
    console.log(1)
    return 'hii'
}
console.log(first())

let arr=[1,2,3,4,5,6,7,8,9,10,1,2,8,5,3]
for (let a=0;a<arr.length;a++){
    if (arr[a]%3==0){
        console.log(arr[a])
    }
}

let ans=arr.filter(function(b){
    if (b%3===0){
        return b
    }

}
)
console.log(arr)
let no=arr.filter(function(b,index){
    let dup=0
    for (let c in arr)
       {
        i=arr[c]
        //console.log(i)
        if (i===b && c>index){
            dup=1
            break;
        }
    }
        if (dup==0){
            return b
        }
        
    }
)
console.log(no)

arr.sort()
console.log(arr)

function find(arr){
    new_arr=[]

    for (let i=0;i<arr.length-1;i++){

        if (arr[i]!=arr[i+1]){

            new_arr.push(arr[i])
        }


    }
    new_arr.push(arr[arr.length-1])
    return new_arr
}
console.log(find(arr))