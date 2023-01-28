// Question First

let inp="Hi Inzint I am John"
let arr= inp.split(" ")
output=""
console.log(arr)
for (let i=arr.length-1;i>=0;i--){

    output+=arr[i]+' '
}
console.log(output)

// Question second 

function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}
const nTerms = 10;

if(nTerms <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}

//Question third

for (var i=0;i<=3;i++){
    setTimeout(()=>console.log(i),0)
}
 
//Question Fourth

let arr=[21,21,45,89,64,56,89,56,67]

let ans=arr.filter(function(ele,inde){

    let uni=1

    for (let i in arr){
        if (ele===arr[i] && i>inde){
            uni=0;
            break
        }


    }
    return uni

})
console.log(ans)


 //Question Sixth

 //Using spread

 let list = ["noodles", {list:["eggs","flour","water"]}]
 let new_copy= ['Manchurian',...list]
 new_copy.push('Sushma')
 console.log(new_copy,list)


// Question Seventh 

const person = {
    fullName: function(city,place) {
      return this.firstName + " " + this.lastName + ' ' +  city +" " + place ;
    }
  }
  const person1 = {
    firstName:"Sushma",
    lastName: "Rani"
  }
  const person2 = {
    firstName:"Veenu",
    lastName: "Rani"
  }
  
  console.log(person.fullName.call(person1,'Guragon','Delhi'));

  // Use of apply is : apply takes arguments not separatel as call but in form of an array

  console.log(person.fullName.apply(person1,['Guragon','Delhi']));

 // Use of bind 
  const Person = {
    firstName:"Sushma",
    lastName: "Rani",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const Sister = {
    firstName:"Veenu",
    lastName: "Rani",
  }
  
  let Name = person.fullName.bind(Sister);
  console.log(Name,Name())

//Question Eightth

//A callback is a function passed as an argument to another function.

function myDisplayer(something) {
    console.log(something);
  }
  
  function fullName(firstname, secondname, myCallback) {
    myCallback(firstname+' '+secondname)
  }
  
  fullName('Sushma', 'Rani', myDisplayer);  

Code for the Promise

function myDisplayer(some) {
    console.log(some)
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
   // Here myResolve and myReject are two CallBacks
// And Based on the conditon any one of two will called
    if (x == 0) {
      myResolve("Succesfull");
    } else {
      myReject("Error");
    }
  });
  // We cannot access promise proprty, so we use promise method i.e then 
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );

  // Question tenth
   // Strings and array Methods

  let string='ABCDEF'
  let arr=[1,2,3,4]

  console.log(string.length)
  let new_string=string.slice(2,3)
  console.log(new_string)
  console.log(string.substring(2,5))
  console.log(string.substr(1,5))
  let second=string.replace('B','new')
  console.log(second)

  console.log(arr.length)
  arr.push('add')
  console.log(arr)
  let new_arr=arr.concat('feg','dt')
  console.log(new_arr,arr)
  new_arr.pop()
  console.log(new_arr)
  arr.push('add')
  console.log(arr,arr.indexOf('add'))
  
//Question Eleventh

let input=[34,56,43,67,28,87,75]
// with using comparator
input.sort((a,b)=>{
    return b-a
})
console.log(input)

// Question 12th 

//A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword.
//The purpose of a constructor is to create a new object and set values for any existing object properties.
//When a constructor gets invoked in JavaScript, the following sequence of operations take place:

//A new empty object gets created.
//The this keyword begins to refer to the new object and it becomes the current instance object.
//The new object is then returned as the return value of the constructor.

function Name() {
    this.nameIs = 'Sushma';
}

var name = new Name();
console.log(name.nameIs)
 
//Question thirteenth

let stack1 = [];
    let stack2 = [];
  
    // Method that will perform our enqueue operation
    function enqueue(element) {
        stack1.push(element);
        console.log("Stack-1 elements are enqueue: ", stack1);
    }
  
    // Method that will perform our dequeue operation
    function dequeue() {
        if (stack2.length === 0) {
            if (stack1.length === 0) {
                console.log(
            "Dequeue not possible because queue is empty..");
            }
            while (stack1.length > 0) {
                let x = stack1.pop();
                stack2.push(x);
            }
        }
        console.log("Element after Dequeue: " + stack2.pop());
    }
  
    enqueue("a");
    enqueue("b");
    enqueue("c");
    dequeue();
    dequeue();

