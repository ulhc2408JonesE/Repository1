// Building type radio buttons
const ResidentialButton = document.getElementById("Residential-button")
const CommercialButton = document.getElementById("Commercial-button")
const IndustrialButton = document.getElementById("Industrial-button")


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




//GETTING HOW MANY ELEVATORS THE CUSTOMER NEEDS


//Divide the number of apartments by the number of floors to obtain the average apartments per floor


//divide the average apartments per floor by 6 to get the number of required elevators


//divide the number of floors by 20 to get the number of elevator banks


//multiply the elevators required by the number of banks to get the total elevators


const residentialMath = () => {

    //The number of apartments the user has
    const numberOfApartments = apartmentInput.value
    const numberoffloors = floorsInput.value

    const avgApartmentsPerFloor = Math.ceil(numberOfApartments/numberoffloors)
    const RequiredElevators = Math.ceil(avgApartmentsPerFloor/6)
    const ElevatorBanks = Math.ceil(numberoffloors/20)
    const totalelevators = Math.ceil(ElevatorBanks*RequiredElevators)

    //visually displaying the number to the user
    elevatorsrequired.value = totalelevators
    
}


apartmentInput.addEventListener("input", () => {

    residentialMath()

})





// If building type is commercial, multiply max occupancy per floor by number of floors to obtain total number of occupants

// The number of elevators required per elevator bank is determined by dividing the total number of occupants by 200.

// The number of elevators banks required is determined by dividing the nuber of floors by 10 as opposed to 20 for residential buildings. Each elevator bank must have an additional elevator for freight.

// total elevators


const commercialMath = () => {

    const numberoffloors = floorsInput.value
    const maximumoccupancy = occupancyInput.value

    const totaloccupants = (maximumoccupancy*numberoffloors)
    const RequiredElevators = (totaloccupants/200)
    const ElevatorBanks = (numberoffloors/10 )    
    const totalelevators = (ElevatorBanks*RequiredElevators + ElevatorBanks)
    
    totalelevators.value = totalelevators
}
floorsInput.addEventListener("input" , () => {

    commercialMath()
})

// ELEVATORS NEED; whatever they type into it is what thye need











// if (floors > 20){
//     elevators *=2
// }


// else if (buildingtype = "commercial"){
//     const totaloccupants = maximumoccupancy * floors;
//     const elevatorsPerBank = Math.ceil (totaloccupants / 200);
//     const elevatorsBanks = Math.ceil (floors/10)
//     const Elevators=(elevatorsPerBank * elevatorsBanks) + elevatorsBanks
// }

// return elevators;

// 
// // MATH SECTION//

// // Math Section//

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