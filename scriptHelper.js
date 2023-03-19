// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   
  let planetaryData = document.getElementById("missionTarget");
  planetaryData.innerHTML =  
    `<h2>Mission Destination</h2>
    <ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter}</li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance}</li>
      <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`
  ;
   
}

function validateInput(testInput) {
    let validation = "";
   if ( isNaN(testInput)) {
    validation = "Not a Number";
    if ( !isNaN(testInput)) {
        validation = "Is a Number";
    }
   } else if (testInput === "") {
    validation = "Empty";
   }
   return validation;
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");
  
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert("All fields are required.");
   } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
    alert("Valid information for each field required.");
   } else {
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (fuelLevel < 10000 && cargoLevel > 10000) {
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = #C7254E; 
      fuelStatus.innerHTML = "Fuel level too low for launch";
      cargoStatus.innerHTML = "Cargo mass too high for launch";
    } else if (fuelLevel > 10000 && cargoLevel > 10000) {
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = #C7254E;
      cargoStatus.innerHTML = "Cargo mass too high for launch";
    } else if (fuelLevel < 10000 && cargoLevel < 10000) {
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = #C7254E;
      fuelStatus.innerHTML = "Fuel level too low for launch";
    } else {
      launchStatus.innerHTML = "Shuttle Ready for Launch";
      launchStatus.style.color = #419F6A;
    }
   }
}

async function myFetch() {
    
  let planetsReturned;
  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json();
  //  const jsonPromise = response.json();
      //  jsonPromise.then( function(json) {
      //   console.log(json);
      //  });
     });
return planetsReturned;
}

function pickPlanet(planets) {
  let planetInfo;
  
    planetInfo = planets[Math.round(Math.random() * planets.length)];
  return planetInfo;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
