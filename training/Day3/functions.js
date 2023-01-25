const arr1=['Sushma','Sakshi','Kirti']
const arr2= ['Rani','Kaushik','Pasai']

const arr3=arr1.map((value,index)=>{
    return value+arr2[index]
})
console.log(arr3)

let arr4=[]
for (let i in arr1){
    arr4.push(arr1[i])
    arr4.push(arr2[i])
}
console.log(arr4)

//closure Functions

function first_function(){
    let y=6
    return function second_function(x){

        return y*=x;
    }
}
var y=0;
let response= first_function();
console.log('answer for response is ',response)
console.log(response(5))
console.log(response(5))

