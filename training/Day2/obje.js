// Declaring an object

const person={Name: 'Sushma '
, Btach :2023, 
City:'Gurgaon',
get : function(){
    return this.Name;
}
}
console.log(person.get())

// new creates an object

var car=new String
car['brand']='BMW'
console.log(car)
var car2=String
console.log(car2)

// Objects are mutable and are addressed  by reference  not by value

const x= person
x['Company']='Inzint';
console.log(person.Company)

// loop in an object
for (var i in person){
    console.log('for in loop runung into ths is : ',i,person[i])
}

// value and array pair

const value_array=Object.values(person)
const key_array=Object.keys(person)
console.log(value_array,key_array)

// Object Constructor

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  console.log(myFather,myMother)





