// Write your helper functions here!
require('isomorphic-fetch');

let pilotInput = document.querySelector("input[name=pilotName]");
let copilotInput = document.querySelector("input[name=copilotName]");
let fuelInput = document.querySelector("input[name=fuelLevel]");
let cargoInput = document.querySelector("input[name=cargoMass]");

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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
      launchStatus.style.color = rgb(225,0,0);
      fuelStatus.innerHTML = "Fuel level too low for launch";
      cargoStatus.innerHTML = "Cargo mass too high for launch";
    } else if (fuelLevel > 10000 && cargoLevel > 10000) {
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = rgb(225,0,0);
      cargoStatus.innerHTML = "Cargo mass too high for launch";
    } else if (fuelLevel < 10000 && cargoLevel < 10000) {
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = rgb(225,0,0);
      fuelStatus.innerHTML = "Fuel level too low for launch";
    } else {
      launchStatus.innerHTML = "Shuttle Ready for Launch";
      launchStatus.style.color = rgb(0,225,0);
    }
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
