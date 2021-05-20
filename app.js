// Execise 1:

var convertFahrToCelsius = (farenheit) => {
  if (farenheit === null || farenheit === undefined) {
    console.log(`enter a value for farenheit`)
  }
  if (farenheit instanceof Array) {
    console.log(`${JSON.stringify(farenheit)} is not a valid number but a/an array.`)
  }else
  if (farenheit instanceof Object){
    console.log(`${JSON.stringify(farenheit)} is not a valid number but a/an object.`)
  }else
  if ((typeof farenheit === "number" || typeof farenheit === "string") && /^[0-9]+$/.test(farenheit)) {
    let myAns = farenheit * (9 / 5) + 32;
    console.log(myAns.toFixed(4));
  }else{
   
    console.log(typeof farenheit)
    console.log(`${JSON.stringify(farenheit)} is not a valid number but a string.`)

  }
}
// To test the input

convertFahrToCelsius(6);
convertFahrToCelsius({name: "Joke"});
convertFahrToCelsius([1,2,3]);
convertFahrToCelsius("Tunde");

