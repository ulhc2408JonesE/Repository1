// Building type radio buttons
const ResidentialButton = document.getElementById("Residential.Button")
const CommercialButton = document.getElementById("Commercial-button")
const IndustrialButton = document.getElementById("Industrial")

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
const apartmentsofnumber = document.getElementById("apartmentsofnumber")
const floorsofnumber = document.getElementById("numberoffloors")
const elevatorsofnumber = document.getElementById("numberofelevators")
const occupancymaximum = document.getElementById("maximumoccupancy")


// temporarily hiding
apartmentsofnumber.style.display = "none"
floorsofnumber.style.display = "none"
elevatorsofnumber.style.display = "none"
occupancymaximum.style.display = "none"









// MATH SECTION//
// function calculateElevators(buildingType, number, floors, maxoccupancy = null)
// let elevators;

// if (buildingtype = "industrial") {
//     elevators = number;
// }
// else if (building type = "residential")

// const apartmentsPerFloor = number/floors;
// elevators = Math.ceil(aparmentsPerFloor/6)
// if (floors > 20){
//     elevators *=2
// }
// else if (buildingtype = "commercial"){
//     const totaloccupants = maxoccupants * floors;
//     const elevatorsPerBank = Math.ceil (totaloccupants / 200);
//     const elevatorsBanks = Math.ceil (floors/10)
//     Elevators=(elevatorPerBank + 1)* elevatorsBanks
// }

// return elevators;

// MATH SECTION//

// Math Section//

// function CalculatePrice( Standard, Premium, Excelium )

// if (CalculatePrice = "standard") {
//   let  standard = 8000
// }
// else if (CalculatePrice = "premium"){
//     let premium = 12000
// }
// else if (calculatePrice) = "Excelium"{
//     let Excelium= 15000
// }

// const standard = (elevatorprice*numberofelevators+8000*.1)
// const premium = (elevatorsprice*numberofelevators+12000*.15)
// const excelium (elevatorprice*numberofelevators)