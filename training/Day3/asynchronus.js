// timeout code 

setTimeout(function() { myFunction("Sushma!!!"); }, 3000);

function myFunction(value) {
  console.log(value)
}
// Promise code 

function myDisplayer(some) {
    console.log(some)
  }

  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  
    if (x == 0) {
      myResolve("Successfull");
    } else {
      myReject("Error");
    }
  });
  console.log(myPromise)
  
  myPromise.then(
    function(first) {myDisplayer(first);},
    function(error) {myDisplayer(error);}
  );

  /// Asynch and await

  async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("Async and await !!");}, 3000);
      console.log('Print')
    });
    console.log(await myPromise);
  }
  myDisplay();
  
// async and await is used for asynchronus operation
const url = "https://github.com/Sushma-Rani2023/inzint";
let userData;
const image = document.getElementById("image");
const getUserDetail = async () => {
   
   console.log("after1");
    
 const user = await fetch(url);
   console.log("after2");
   userData = await user.json();
   
 console.log("after22");
   const img = document.createElement("img");
   
 img.setAttribute("src", userData.avatar_url);
   console.log("after3");  
 
 image.appendChild(img);
};
console.log("before");
getUserDetail();
console.log("after");
console.log("afterx");


  
  



