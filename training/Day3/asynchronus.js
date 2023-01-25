

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
  
  // some code (try to change x to 5)
  
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
    });
    console.log(await myPromise);
  }
  myDisplay();
  



