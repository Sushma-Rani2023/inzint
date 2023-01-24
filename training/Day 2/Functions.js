
// self evoking functions
console.log('Hello ,Lets start');
( function(){
    console.log('Hello World')
})();
console.log('Lets end this');

// Functions are Objects

function Myfunction(a,b){
    return arguments
}
console.log(Myfunction(2,3))
console.log(Myfunction.toString())
console.log(Myfunction(1,2).toString())

// Call is used to call a method of an object from an other object

const person = {
    fullName: function(city,place) {
      return this.firstName + " " + this.lastName + ' ' +  '${city}  ${place}' ;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "John Doe":
  console.log(person.fullName.call(person1,'Guragon','Delhi'));

  // Use of apply is : apply takes arguments not separatel as call but in form of an array

  console.log(person.fullName.apply(person1,['Guragon','Delhi']));

 // Use of bind 
  const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);
  