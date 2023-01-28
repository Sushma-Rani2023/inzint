// first question 
 
 let inp="Hi Inzint, I'm John" 
 let arr= inp.split(" ") 
 output="" 
 console.log(arr) 
 for (let i=arr.length-1;i>=0;i--){ 
 
 output+=arr[i]+'' 
 } 
 console.log(output) 
 
 //  second question 
 
 // function fibonacci(num) { 
 // if(num &lt; 2) { 
 // return num; 
 // } 
 // else { 
 // return fibonacci(num -1) + fibonacci(num - 2); 
 // } 
 // } 
 // const nTerms = 10; 
 
 // if(nTerms &lt;=0) { 
 // console.log('positive integer '); 
 // } 
 // otherwise { 
 // for(let i = 0; i &lt; nTerms; i++) { 
 // console.log(fibonacci(i)); 
 // } 
 // } 
 
 // third question 
 
 // for (var i=0;i&lt;=3;i++){ 
 // setTimeout(()=&gt;console.log(i) ,0 ) 
 // } 
 
 // 4th question 
 
 // let arr=[21,21,45,89,64,56,89,56,67] 
 
 // let ans=arr. filter(function( ele,inde){ 
 
 // let uni=1 
 
 // for (let i in arr){ 
 // if (ele===arr[i] &amp;&amp; i&gt;inde){ 
 / /uni= 0 ; 
 // break 
 // } 
 
 
 // } 
 // return uni 
 
 // }) 
 // console.log(ans) 
 
 
 // sixth question 
 
 // spread 
 
 // let list = ["noodles", {list:["eggs","flour","water"]}] 
 // let new_copy= ['Manchurian',...list] 
 / / new_copy.push ('Sushma') 
 // console
log(new_copy,list) 
 
 
 // 7th question 
 
 // const person = { 
 // fullName: function(city,place) { 
 // return this.firstName + " " + this.lastName + ' ' + city + " " + location ; 
 // } 
 // } 
 // const person1 = { 
 // firstName:"Sushma", 
 // lastName: "Rani" 
 // } 
 // const person2 = { 
 // firstName:"Veenu ", 
 // last name: "Rani" 
 // } 
 
 // console.log(person.fullName.call(person1,'Guragon','Delhi')); 
 
 // // Using apply: apply takes the arguments  in the form of an array, not as individual calls 
 
 // console.log(person.fullName.apply(person1,['Guragon',' Delhi') ])); 
 
 // // using bind 
 // const Person = { 
 // firstName:"Sushma", 
 // lastName: "Rani", 
 // fullName: function () { 
 // return this.firstName + " " + this.lastname; 
 // } 
 // } 
 
 // const Sister = { 
 // firstName:"Veenu", 
 // lastName: "Rani", 
 // } 
 
 // let Name = person.fullName.bind (sister); 
 // console.log(Name,Name()) 
 
 //8th question 
 
 //A callback is a function that is passed as an argument to another function. 
 
 // function myDisplayer(something) { 
 // console
log(something); 
 // } 
 
 // function fullName(firstname, secondname, myCallback) { 
 // myCallback(firstname+' '+secondname) 
 // } 
 
 // fullName('Sushma', ' Rani', myDisplayer); 
 
 // promise code 
 
 // function myDisplayer(some) { 
 // console.log(some) 
 // } 
 
 // let myPromise = new Promise(function(myResolve, myReject) { 
 // let x = 0; 
 // // where myResolve and myReject are two CallBacks 
 // //  one of the two will be called based on a condition 
 // if (x == 0) { 
 // myResolve( " Success"); 
 // } else { 
 // myReject("Error"); 
 // } 
 // }); 
 // // promise property I don't have access to the , so I use the promise method. H. then 
 // myPromise.then( 
 // function(value) {myDisplayer(value);}, 
 // function(error) {myDisplayer(error);} 
 // ); 
 
 //  tenth question 
 // string and array methods 
 
 // let string='ABCDEF' 
 // let arr=[1,2,3,4] 
 
 // console.log(string.length ) 
 // let new_string=string.slice(2,3) 
 // console.log(new_string) 
 // console.log(string.substring(2,5)) 
 // console.log(string.substring( 1,5 )) 
 // let second=string.replace('B','new') 
 // console.log(second) 
 
 // console.log(arr
length) 
 // arr.push('add') 
 // console.log(arr) 
 // let new_arr=arr.concat('feg','dt') 
 // console.log(new_arr,arr ) 
 // new_arr.pop() 
 // console.log(new_arr) 
 // arr.push('add') 
 // console.log(arr,arr.indexOf('add')) 
 
 / /Q11 
 
 // let input=[34,56,43,67,28,87,75] 
 // // Using a comparator 
 // input.sort((a,b)=&gt; { 
 // return b-a 
 // }) 
 // console.log(input) 
 
 // Question 12. 
 
 // A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, constructors are called when an object is created using the new keyword. 
 //The purpose of the constructor is to create a new object and set the values ​​of existing object properties. 
 //When the constructor is called in JavaScript, the following sequence of operations takes place. 
 
 // new empty object is created
// The this keyword starts referencing the new object, making it  the current instance object. 
 //The new object is then returned as the return value of the constructor. 
 
 // function name() { 
 // this.nameIs = 'Sushma'; 
 // } 
 
 // var name = new name(); 
 // console.log(name.nameIs) 
 
 // 13th question 
 
  let stack1 = []; 
  let stack2 = []; 
 
 // method to perform  enqueue operation 
  function enqueue(element) { 
  stack1. push(element); 
  console.log("Queuing stack 1 item: ", stack1); 
  } 
 
  // method to perform  dequeue operation 
  function dequeue() { 
   if (stack2.length === 0) { 
  if (stack1.length == = 0) ) { 
  console.log( 
 // "Unable to dequeue because the queue is empty.."); 
  } 
  while (stack1.length ) { 
  let x = stack1.pop(); 
  stack2.push(x)
  }
}
console.log("Element after Dequeue: " + stack2.pop());
    }
  
    enqueue("a");
    enqueue("b");
    enqueue("c");
    dequeue();
    dequeue();
