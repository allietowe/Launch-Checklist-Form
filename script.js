// Write your JavaScript code here!
window.addEventListener("load", function(){
   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         const missionTarget = document.getElementById("missionTarget");
         let index = Math.floor(Math.random() * json.length);
         missionTarget.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">`;
      });
      });
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event){
         let pilotNameInput = document.querySelector("input[name=pilotName]");
         let coPilotNameInput = document.querySelector("input[name=copilotName]");
         let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
         let cargoMassInput = document.querySelector("input[name=cargoMass]"); 

         let inputAllSet;
         let fuelAllSet;
         let cargoAllSet;

      if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         inputAllSet = false;
         event.preventDefault();
      } else if (!isNaN(Number(pilotNameInput.value))) {
         alert("Invalid Input: No numbers can be used in name field");
         inputAllSet = false;
         event.preventDefault();
      } else if (!isNaN(Number(coPilotNameInput.value))) {
         alert("Invalid Input: No numbers can be used in name field");
         inputAllSet = false;
         event.preventDefault();
      } else if (isNaN(fuelLevelInput.value)) {
         alert("Fuel Level Must Be Number!");
         inputAllSet = false;
         event.preventDefault();
      } else if (isNaN(cargoMassInput.value)) {
         alert("Cargo Mass Must Be Number!");
         inputAllSet = false;
         event.preventDefault();
      } else {
         inputAllSet = true;
      }

      if (fuelLevelInput.value < 10000 && inputAllSet) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready for launch!`
         document.getElementById("copilotStatus").innerHTML = `Pilot ${coPilotNameInput.value} is ready for launch!`
         document.getElementById("fuelStatus").innerText = `Fuel level too low for launch!`
         document.getElementById('launchStatus').innerText = 'Shuttle not ready for launch!';
         document.getElementById('launchStatus').style.color= "red";
         fuelAllSet = false;
         event.preventDefault();
      } else {
         fuelAllSet = true;
      }
      if (cargoMassInput.value > 10000 && inputAllSet) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("cargoStatus").innerText = `Cargo mass too high for launch!`
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready for launch!`
         document.getElementById("pilotStatus").innerHTML = `Pilot ${coPilotNameInput.value} is ready for launch!`
         document.getElementById('launchStatus').innerText = 'Shuttle not ready for launch!';
         document.getElementById('launchStatus').style.color= "red";
         cargoAllSet = false;
         event.preventDefault();
      } else {
         cargoAllSet = true;
      }
      if (fuelAllSet && cargoAllSet && inputAllSet) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById('launchStatus').innerText = 'Shuttle is ready for launch!';
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready for launch!`
         document.getElementById("pilotStatus").innerHTML = `Pilot ${coPilotNameInput.value} is ready for launch!`
         document.getElementById('launchStatus').style.color= "green";
         event.preventDefault();
      }
   });
});