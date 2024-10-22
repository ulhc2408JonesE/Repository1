const ResidentialButton = document.getElementById("Residential.Button")
const CommercialButton = document.getElementById("Commercial-button")
const IndustrialButton = document.getElementById("Industrial")



// MATH SECTION//
function calculateElevators(buildingType, number, floors, maxoccupancy = null)
let elevators;

if (buildingtype = "industrial") {
    elevators = number;
}
else if (building type = "residential"){

const apartmentsPerFloor = number/floors;
elevators = Math.ceil(aparmentsPerFloor/6)
if (floors > 20){
    elevators *=2
}
}else if (buildingtype = "commercial"){
    const totaloccupants = maxoccupants * floors;
    const elevatorsPerBank = Math.ceil (totaloccupants / 200);
    const elevatorsBanks = Math.ceil (floors/10)
    Elevators=(elevatorPerBank + 1)* elevatorsBanks
}

return elevators;

// MATH SECTION//

// Math Section//

function CalculatePrice( Standard, Premium, Excelium )

if (CalculatePrice = "standard") {
  let  standard = 8000
}
else if (CalculatePrice = "premium"){
    let premium = 12000
}
else if (calculatePrice) = "Excelium"{
    let Excelium= 15000
}

const standard = (elevatorprice*numberofelevators+8000*.1)
const premium = (elevatorsprice*numberofelevators+12000*.15)
const excelium ((elevatorsprice*numberofelevators)