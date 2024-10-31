// Building type radio buttons
const ResidentialButton = document.getElementById("Residential-button")
const CommercialButton = document.getElementById("Commercial-button")
const IndustrialButton = document.getElementById("Industrial-button")

// Input fields
const numberofapartments = document.getElementById("numberofapartments")
const numberoffloors = document.getElementById("numberoffloors")
const numberofelevators = document.getElementById("numberofelevators")
const maximumoccupancy = document.getElementById("maximumoccupancy")

// Product tier radio buttons
const standard = document.getElementById("Standard")
const premium = document.getElementById("Premium")
const excellium = document.getElementById("Excellium")


//Final output fields
const elevatorsrequired = document.getElementById("elevatorsrequired")
const costperunit = document.getElementById("costperunit")
const installationfees = document.getElementById("Installation Fees")
const totalcost = document.getElementById("Total Cost")

// container section
const apartmentsInputDiv = document.getElementById("apartmentInputDiv")
const floorsInputDiv = document.getElementById("floorsInputDiv")
const elevatorsInputDiv = document.getElementById("elevatorsInputDiv")
const occupancyInputDiv = document.getElementById("occupancyInputDiv")

//input section
const apartmentInput = document.getElementById("numberofapartments")
const floorsInput = document.getElementById("numberoffloors")
const elevatorsInput = document.getElementById("numberofelevators")
const occupancyInput = document.getElementById("maximumoccupancy")


// temporarily hiding
apartmentsInputDiv.style.display = "none"
floorsInputDiv.style.display = "none"
elevatorsInputDiv.style.display = "none"
occupancyInputDiv.style.display = "none"



// hide n seek
ResidentialButton.addEventListener("click", () => {

    floorsInputDiv.style.display = "block"
    apartmentsInputDiv.style.display = "block"

    occupancyInputDiv.style.display = "none"
    elevatorsInputDiv.style.display = "none"


})

CommercialButton.addEventListener("click", () => {

    occupancyInputDiv.style.display = "block"
    floorsInputDiv.style.display = "block"

    elevatorsInputDiv.style.display = "none"
    apartmentsInputDiv.style.display = "none"


})

IndustrialButton.addEventListener("click", () => {

    elevatorsInputDiv.style.display = "block"

    occupancyInputDiv.style.display = "none"
    apartmentsInputDiv.style.display = "none"
    floorsInputDiv.style.display = "none"

})




//RESIDENTIAL MATH CALCULATE ELEVATORS

//the number of apartments
//the number of floors


apartmentInput.addEventListener("input", () => {

    //The number of apartments the user has
    const numberOfApartments = apartmentInput.value




})

// COMMERCIAL MATH 

// maximum occupancy
// the number of floors

// INDUSTRIAL MATH CALCULATE ELEVATORS
// the number of elevators


const residentialMath = () => {

    const apartmentsPerFloor = number/floors;
    elevators = Math.ceil(aparmentsPerFloor/6)
}







// COMMERCIAL MATH
function calculateMaximumoccupancy (const totaloccupants = maximumoccupancy * floors;)


// INDUSTRIAL MATH
if (buildingtype = "industrial") {
    elevators = number;
}
else if (buildingtype = "residential"){

}



// MATH SECTION
function calculateElevators(buildingType, number, floors, maxoccupancy) {

let elevators;

// if (buildingtype = "industrial") {
//     elevators = number;
// }
// else if (buildingtype = "residential"){

// }






// if (floors > 20){
//     elevators *=2
// }


else if (buildingtype = "commercial"){
    const totaloccupants = maximumoccupancy * floors;
    const elevatorsPerBank = Math.ceil (totaloccupants / 200);
    const elevatorsBanks = Math.ceil (floors/10)
    const Elevators=(elevatorsPerBank * elevatorsBanks) + elevatorsBanks
}

return elevators;

}
// MATH SECTION//

// Math Section//

function CalculatePrice( Standard, Premium, Excelium ){

if (CalculatePrice = "standard") {
  let  standard = 8000
}
else if (CalculatePrice = "premium"){
    let premium = 12000
}
else if (calculatePrice = "Excelium"){
    let Excelium= 15000
}

const standard = (elevatorprice*numberofelevators+8000*.1)
const premium = (elevatorsprice*numberofelevators+12000*.15)
const excelium = (elevatorprice*numberofelevators)

}