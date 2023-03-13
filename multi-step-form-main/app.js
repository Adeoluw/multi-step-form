const info = document.getElementById("info");

const selection = document.getElementById("selection");

const addOn = document.getElementById("add-ons");

const summary = document.getElementById("summary");

const container = document.getElementById("form-area");

const infoSection = document.getElementById("info-section");

// create container for the slelction section
const selectionCon = document.createElement("div");

const addOnCon = document.createElement("div")

const summaryCon = document.createElement("div")

// create a variable to store the selected plan so that we can use the value in the summary
let planSelected = ""


info.addEventListener("click", () => {
  infoSection.className = "add-info-visibility";
  selectionCon.className = "remove-selection-visibility";
  addOnCon.className = "remove-selection-visibility"
  summaryCon.className = "remove-selection-visibility"

  return;
});

let hasSelectionEventOccurred = false;




// Navugating to the selection Section 
selection.addEventListener("click", function selectPlan() {

  if (!hasSelectionEventOccurred){
  infoSection.className = "remove-info-visibility";
  selectionCon.className = "add-selection-visibility";
  addOnCon.className = "remove-addon-visibility"

  // Append the selection container to the form-container
  container.appendChild(selectionCon);

  // Create the head element and append to the container
  let mainHead = document.createElement("h2");
  mainHead.textContent = "Select your plan";
  selectionCon.appendChild(mainHead);

  // create the paragraph and append to the planCon
  let mainPara = document.createElement("p");
  mainPara.textContent = "You have the option of monthly or yearly billing.";
  selectionCon.appendChild(mainPara);

  // create a container for the plans
  let planCon = document.createElement("div");

  // Append the Plan continer to the selection container
  selectionCon.appendChild(planCon);
  planCon.className = "plan-containers";

  // create the first card and add the card elements
  let cardOne = document.createElement("div");
  cardOne.className = "plan-container";
  let iconOne = document.createElement("img");
  iconOne.src = "./assets/images/icon-arcade.svg";
  cardOne.appendChild(iconOne);
  let planOne = document.createElement("h3");
  planOne.textContent = "Arcade";
  cardOne.appendChild(planOne);
  let priceOne = document.createElement("p");
  priceOne.textContent = "$9/mo";
  cardOne.appendChild(priceOne);
  // give the first selection an id
  cardOne.id = "Arcade"

  // Create an evenlistener for cardOne so that we can set the value of planSelected
  cardOne.addEventListener("click", () =>{
    // planSelected = document.getElementById("Arcade")
    planSelected = "Arcade"
    console.log(planSelected)
  })

  // apprnd the cardone to the planCon
  planCon.appendChild(cardOne);

  // create the Second card and add the card elements
  let cardTwo = document.createElement("div");
  cardTwo.className = "plan-container";
  let iconTwo = document.createElement("img");
  iconTwo.src = "./assets/images/icon-checkmark.svg";
  cardTwo.appendChild(iconTwo);
  let planTwo = document.createElement("h3");
  planTwo.textContent = "Advanced";
  cardTwo.appendChild(planTwo);
  let priceTwo = document.createElement("p");
  priceTwo.textContent = "$9/mo";
  cardTwo.appendChild(priceTwo);
  // give the second selection an id
  cardTwo.id = "Advanced"

  // append the cardTwo to the planCon
  planCon.appendChild(cardTwo);

  // create the third card and add the card elements
  let cardThree = document.createElement("div");
  cardThree.className = "plan-container";
  let iconThree = document.createElement("img");
  iconThree.src = "./assets/images/icon-pro.svg";
  cardThree.appendChild(iconThree);
  let planThree = document.createElement("h3");
  planThree.textContent = "Pro";
  cardThree.appendChild(planThree);
  let priceThree = document.createElement("p");
  priceThree.textContent = "$9/mo";
  cardThree.appendChild(priceThree);
  // give the third selection an id
  cardThree.id = "Pro"

  // apprnd the cardone to the planCon
  planCon.appendChild(cardThree);




  // create the monthly/yearly subscribtion section
  let subscribtion = document.createElement("div")
  subscribtion.className = "sub"
  let subType = document.createElement("p")
  let monthlySub = document.createElement("span")
  monthlySub.textContent = "monthly"
  // DON'T FORGET TO ADD THE ICON WHEN YOU GET DATA YOU BROKE BITCH
  let yearlySub = document.createElement("span")
  yearlySub.textContent = "yearly"
  
  // Append the monthly and yearly subs to the subType paragraph 
  subType.appendChild(monthlySub)
  subType.appendChild(yearlySub)
  subscribtion.appendChild(subType)
  selectionCon.appendChild(subscribtion)

  hasSelectionEventOccurred = true;
  }

  if(hasSelectionEventOccurred){
  infoSection.className = "remove-info-visibility";
  selectionCon.className = "add-selection-visibility";
  addOnCon.className = "remove-addon-visibility"
  summaryCon.className = "remove-selection-visibility"

  }

});



// creating the section for AddOns

let hasAddOnEventOccurred = false

addOn.addEventListener("click", () => {
  if (!hasAddOnEventOccurred){
  addOnCon.className = "add-addon-visibility"
  infoSection.className = "remove-info-visibility";
  selectionCon.className = "remove-selection-visibility";
  summaryCon.className = "remove-selection-visibility"


  container.appendChild(addOnCon);

  // Create the header element in the add-on section
  let addOnHead = document.createElement("h2")
  addOnHead.textContent = "Pick add-ons"

  // Append the header element to the addon container
  addOnCon.appendChild(addOnHead)

  // Create the header element in the add-on section
  let addOnPara = document.createElement("p")
  addOnPara.textContent = "Add-ons help enhance your gaming experience."

  // Append the Paragraph element to the addon container
  addOnCon.appendChild(addOnPara)


  // Create a container for the add-ons
  let allAddOns = document.createElement("div")
  addOnCon.appendChild(allAddOns)
  allAddOns.className = "all-addons"

  // Create the first addOn card
  let cardOne = document.createElement("div")
  cardOne.className = "addon-card"

  // create the first addOn checkbox
  let firstCheckBox = document.createElement("input")
  firstCheckBox.type = "checkbox"
  cardOne.appendChild(firstCheckBox)
  firstCheckBox.className = "checkBox"

  // Create the text component for the first addOn
  let firstAddOnTexts = document.createElement('div')
  firstAddOnTexts.className = "addon-texts"
  cardOne.appendChild(firstAddOnTexts)

  // Create the heading for the first card
  let firstAddOnHead = document.createElement('h4')
  firstAddOnHead.textContent = "Online Service"
  firstAddOnTexts.appendChild(firstAddOnHead)

  // create the paragraph for the first addOn
  let firstAddOnPara = document.createElement("p")
  firstAddOnPara.textContent = "Access to multiplayer games"
  firstAddOnTexts.appendChild(firstAddOnPara)

  // create the price for the first addOn card
   let firstPrice = document.createElement("p")
    firstPrice.textContent = "+$1/mo"
    cardOne.appendChild(firstPrice)
  

  allAddOns.appendChild(cardOne)


  // Create the second addOn card
  let cardTwo = document.createElement("div")
  cardTwo.className = "addon-card"

  // create the second addOn checkbox
  let secondCheckBox = document.createElement("input")
  secondCheckBox.type = "checkbox"
  cardTwo.appendChild(secondCheckBox)
  secondCheckBox.className = "checkBox"


  // Create the text component for the second addOn
  let secondAddOnTexts = document.createElement('div')
  secondAddOnTexts.className = "addon-texts"
  cardTwo.appendChild(secondAddOnTexts)

  // Create the heading for the Second card
  let secondAddOnHead = document.createElement('h4')
  secondAddOnHead.textContent = "Larger storage"
  secondAddOnTexts.appendChild(secondAddOnHead)

  // create the paragraph for the Second addOn
  let secondAddOnPara = document.createElement("p")
  secondAddOnPara.textContent = "Extra 1TB of cloud save"
  secondAddOnTexts.appendChild(secondAddOnPara)

  // create the price for the second addOn card
   let secondPrice = document.createElement("p")
    secondPrice.textContent = "+$1/mo"
    cardTwo.appendChild(secondPrice)
  

  allAddOns.appendChild(cardTwo)

  // Create the third addOn card
  let cardThree = document.createElement("div")
  cardThree.className = "addon-card"

  // create the third addOn checkbox
  let thirdCheckBox = document.createElement("input")
  thirdCheckBox.type = "checkbox"
  thirdCheckBox.className = "checkBox"

  
  
  cardThree.appendChild(thirdCheckBox)

  // Create the text component for the third addOn
  let thirdAddOnTexts = document.createElement('div')
  thirdAddOnTexts.className = "addon-texts"
  cardThree.appendChild(thirdAddOnTexts)

  // Create the heading for the third card
  let thirdAddOnHead = document.createElement('h4')
  thirdAddOnHead.textContent = "Larger storage"
  thirdAddOnTexts.appendChild(thirdAddOnHead)

  // create the paragraph for the third addOn
  let thirdAddOnPara = document.createElement("p")
  thirdAddOnPara.textContent = "Extra 1TB of cloud save"
  thirdAddOnTexts.appendChild(thirdAddOnPara)

  // create the price for the third addOn card
   let thirdPrice = document.createElement("p")
    thirdPrice.textContent = "+$1/mo"
    cardThree.appendChild(thirdPrice)
  

  allAddOns.appendChild(cardThree)

  hasAddOnEventOccurred = true;
  }

  if(hasAddOnEventOccurred){
    addOnCon.className = "add-addon-visibility"
    infoSection.className = "remove-info-visibility";
    selectionCon.className = "remove-selection-visibility";
    summaryCon.className = "remove-selection-visibility"
  }
  // 


});

// Creating the section for summary

let hasSummaryEventOccurred = false

summary.addEventListener("click", () => {
    if (!hasSummaryEventOccurred){
    addOnCon.className = "remove-addon-visibility";
    infoSection.className = "remove-info-visibility";
    selectionCon.className = "remove-selection-visibility";
    summaryCon.className = "add-addon-visibility"
  
    container.appendChild(summaryCon);
    
    // creating the Heading for the summary section
    let summaryHeading = document.createElement("h2");
    summaryHeading.textContent = "Finishing Up";
    summaryHeading.className = "summary-head";
    summaryCon.appendChild(summaryHeading);

    // creating the paragraph(sub-heading) for the summary section
    let summaryPara = document.createElement("p");
    summaryPara.textContent = "Double-check everything looks OK before confirming"
    summaryPara.className = "summary-para"
    summaryCon.appendChild(summaryPara)

    // creating the div for the total cost 
      let costCon = document.createElement('div')
      costCon.className = "cost-con"
      summaryCon.appendChild(costCon)




    hasSummaryEventOccurred = true
  
   
}
if(hasSummaryEventOccurred){
  addOnCon.className = "remove-addon-visibility";
infoSection.className = "remove-info-visibility";
selectionCon.className = "remove-selection-visibility";
summaryCon.className = "add-addon-visibility"
}
})