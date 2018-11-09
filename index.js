let startInhaleTime;
let endInhaleTime;
let totalInhaleTime;
let startExhaleTime;
let endExhaleTime;
let totalExhaleTime;
let medTime; 
let meanInTime;

let results = {
  InhaleTimes:[],
  ExhaleTimes: [],
  totals: []
  
}

function Done () {
  document.getElementById("button").innerHTML = "Inhale";
  document.getElementById("inst").innerHTML =  "";
  endExhaleTime = new Date().getTime();
  totalInhaleTime = ((endInhaleTime - startInhaleTime)/1000);
  totalExhaleTime = ((endExhaleTime - startExhaleTime)/1000);
  medTime = (totalInhaleTime + totalExhaleTime);
  console.log(medTime)
  results.InhaleTimes.push(totalInhaleTime.toPrecision(2));
  results.ExhaleTimes.push(totalExhaleTime.toPrecision(2));
  results.totals.push(medTime.toPrecision(2)); 
  let row = document.getElementById("breath-table").insertRow(results.InhaleTimes.length);
  row.insertCell(0).innerHTML = results.InhaleTimes[results.InhaleTimes.length-1];
  row.insertCell(1).innerHTML = results.ExhaleTimes[results.ExhaleTimes.length-1];
  row.insertCell(2).innerHTML = results.totals[results.totals.length-1];
  let Intotal = 0;
  for (let time in results.InhaleTimes) {
      Intotal += parseFloat(results.InhaleTimes[time]);
    
}
meanInTime = (Intotal/(results.InhaleTimes.length)).toPrecision(2);
meanIn = document.getElementById("MI").innerHTML = `Mean Inhale Time: ${meanInTime}`;
// console.log(meanInTime);
console.log(`The intotal is ${Intotal}`);
console.log(`array length is ${results.InhaleTimes.length}`);


  
  

}

function Inhale () {
  document.getElementById("button").innerHTML = "Exhale";
  document.getElementById("inst").innerHTML =  "Nice and easy, through the nose";
  startInhaleTime = new Date().getTime(); 
  return startInhaleTime
}

function Exhale () {
   document.getElementById("button").innerHTML = "Done"
   document.getElementById("inst").innerHTML =  "Exhale slowly...";
   endInhaleTime = new Date().getTime();
   startExhaleTime = new Date().getTime();
      
}




function myFunction() {
    
    let x = document.getElementById("button").innerHTML;
    if (x === "Inhale") {
      Inhale()
        } else if (x === "Exhale") {
      Exhale()
    } else {
      Done()
      }
  }
 

