//Line 1-85: page selection code, between Investors,Pie chart and Performance

const underline = document.getElementsByClassName('underline');
const pageSelected = document.getElementsByClassName('page-selected');
const Investors = document.getElementsByClassName('Investors');
const PieChart = document.getElementsByClassName('Pie-Chart');
const Performance = document.getElementsByClassName('Performance');

const pageSelectedArray = [Investors,PieChart, Performance];

//Checking if we are running the addNewINvestor function or addProfit function
let areWeAdding_A_NewInvestor;

//Function for calculating the sum of an array
const sum =(Array)=>{
 let answer = Array.reduce((a, b) => Number(a) + Number(b),0);
return answer;
}

//Defining Variables for Profit Section
const Profits = [];
let Total_Fund_Initial_Investment;
let Total_Fund_Profits = sum(Profits); 
let totalFund;
let actualTotalFund;


const goTo = (event) =>{
console.log(event.toElement.classList[0]);
	for (let c=0;c<3;c++){
			if(pageSelectedArray[c][1].classList[0]===event.toElement.classList[0]){
					pageSelectedArray[c][1].classList.remove('hidden');
					underline[c].parentElement.classList.add("text-color-blue");
					underline[c].classList.add("show");
					pageSelectedArray[c][1].classList.remove('position-absolute');


			}else if(event.toElement.classList[0]==="underline"){//found out if u click the underline everything disappeard. So this is to prevent it
						if(underline[c].parentElement.classList[0]===event.toElement.parentElement.classList[0]){
					pageSelectedArray[c][1].classList.remove('hidden');
					underline[c].parentElement.classList.add("text-color-blue");
					underline[c].classList.add("show");
					pageSelectedArray[c][1].classList.remove('position-absolute');


			}else{pageSelectedArray[c][1].classList.add('hidden');
						underline[c].parentElement.classList.remove("text-color-blue");
						underline[c].classList.remove("show");
						pageSelectedArray[c][1].classList.add('position-absolute');

			}
					}else{
							pageSelectedArray[c][1].classList.add('hidden');
						underline[c].parentElement.classList.remove("text-color-blue");
						underline[c].classList.remove("show");
						pageSelectedArray[c][1].classList.add('position-absolute');
			}
}}


Investors[0].addEventListener("click", goTo);

	// Investors[1].classList.remove('hidden');
	// PieChart[1].classList.add('hidden');
	// Performance[1].classList.add('hidden');
	// console.log("INvestors");

	// underline[0].parentElement.classList.add("text-color-blue");
	// underline[1].parentElement.classList.remove("text-color-blue");
	// underline[2].parentElement.classList.remove("text-color-blue");

	// underline[0].classList.add("show");
	// underline[1].classList.remove("show");
	// underline[2].classList.remove("show");


PieChart[0].addEventListener("click", goTo);
//  function(event){
// 	PieChart[1].classList.remove('hidden');
// 	Investors[1].classList.add('hidden');
// 	Performance[1].classList.add('hidden');
// 	console.log("Pie-Chart");

// 	underline[0].parentElement.classList.remove("text-color-blue");
// 	underline[1].parentElement.classList.add("text-color-blue");
// 	underline[2].parentElement.classList.remove("text-color-blue");

// 	underline[0].classList.remove("show");
// 	underline[1].classList.add("show");
// 	underline[2].classList.remove("show");
// }


Performance[0].addEventListener("click", goTo);
// 	function(event){
// 	Performance[1].classList.remove('hidden');
// 	PieChart[1].classList.add('hidden');
// 	Investors[1].classList.add('hidden');
// 	console.log("Performance");

// 	underline[0].parentElement.classList.remove("text-color-blue");
// 	underline[1].parentElement.classList.remove("text-color-blue");
// 	underline[2].parentElement.classList.add("text-color-blue");

// 	underline[0].classList.remove("show");
// 	underline[1].classList.remove("show");
// 	underline[2].classList.add("show");
// }


//Date and Time
const dateAndTime= ()=>{
let date = document.getElementsByClassName("date")[0];
let dateValue = new Date();
date.innerText= dateValue.toDateString();

let timeValue = new Date();
let hour_24 = timeValue.getHours();
let min = timeValue.getMinutes();
let sec = timeValue.getSeconds();

//function for determining AM or PM
function am_pm(hour_24){
	if (hour_24 >12 ){
		return 'PM';
	}else{
		return 'AM';
	}
}

//changing to 12hr format 
let hour_12=hour_24;

if (hour_24>12){
	 hour_12= hour_24%12;
}
if (hour_12===0){
	hour_12 =12;
}
if(min<10){
	min = `0${min}`;
}
if(sec<10){
	sec = `0${sec}`;
}


let time = document.getElementsByClassName("time")[0];
timeText = `${hour_12}:${min}:${sec} ${am_pm(hour_24)}`;
time.innerText =timeText;
}

setInterval(dateAndTime, 1000 );



//Function that calculates Ontario's 2020 Tax

const taxCalculator = (income)=>{
	let tax =0,tax1=0,tax2=0,tax0=0;
	let incomeFedTaxed=income;
	let incomeStateTaxed =income;


		//Ontario State Tax
	const stateTaxPriceLvl= [0,44740, 89482, 150000,220000];
	const stateTaxPercent = [5.05/100, 9.15/100, 11.16/100, 12.16/100, 13.16/100];

	const fedTaxPriceLvl= [0,48534, 97069, 150473, 214368];
	const fedTaxPercent = [15/100, 20.5/100, 26/100, 29/100, 33/100];

	for (let c=4;c>=0;c--){
		if (incomeStateTaxed>0){
				if (incomeStateTaxed>stateTaxPriceLvl[c]) {
					tax = tax + ((incomeStateTaxed-stateTaxPriceLvl[c])*stateTaxPercent[c]);

					incomeStateTaxed= incomeStateTaxed -(incomeStateTaxed-stateTaxPriceLvl[c]);
				} 
			}

		if (incomeFedTaxed>0){
				if (incomeFedTaxed>fedTaxPriceLvl[c]) {
					tax = tax + ((incomeFedTaxed-fedTaxPriceLvl[c])*fedTaxPercent[c]);
					tax2 = tax2 + ((incomeFedTaxed-fedTaxPriceLvl[c])*fedTaxPercent[c]);

					incomeFedTaxed = incomeFedTaxed - (incomeFedTaxed-fedTaxPriceLvl[c]);
				} 
			}	
	}
return tax;
}


//Admin link to Password

let Admin = document.getElementsByClassName("Admin")[0];
const linkToPassword = (event)=>{

		let password = prompt("<<Admin Access>>","DayTradingIcon");

		if (password === "DayTradingIcon"){
			
			let Admin_Access =document.getElementsByClassName("Admin_Access")[0];
			Admin_Access.classList.remove("hidden");
		}
}
Admin.addEventListener("click",linkToPassword );


//Exiting tha Admin Page (Clicking on The text "|--Admin Access --|" exits the page")
const Admin_Access =document.getElementsByClassName("Admin_Access")[0];
		let Exit	= Admin_Access.querySelector("h2");

const exitAdmin = ()=>{
	Admin_Access.classList.add("hidden")
}
		Exit.addEventListener("click",exitAdmin );

//MAIN BACK-End
const investorsDatabase= []; //Parent
 // 				 ||
// 					 ||
 //				    \||/
 // 	             \/

 // 			   object

 // 				 ||
// 					 ||
 //				    \||/
 // 	             \/
 //         Arrays as elements

let Name; //first element/Array in Object
let Initial_Investment;
let Total_Individual_Return=0;
let Individual_Tax;
let Individual_Fee;
let individualProfit;
let individualProfitPercentage;
let Fund_Allocation;
let Individual_Account_Total;//last element/Array in Object

//function for inserting an object into the investorsDatabase Array
const addObjectTo_investorsDatabase=()=>{
	investorsDatabase[investorsDatabase.length]={
	Name,
	Initial_Investment,
	Total_Individual_Return:0,
	Individual_Tax:0,
	Individual_Fee:0,
	individualProfit:0,
	individualProfitPercentage:0,
	Fund_Allocation,
	Individual_Account_Total,
	}
}

// Put the calculated elements into the Object
const setValuesIntoObjectElements =(c)=>{
// console.log(`c==>${c}`);

	investorsDatabase[c].Total_Individual_Return = Total_Individual_Return;
	investorsDatabase[c].Initial_Investment = Initial_Investment;
	investorsDatabase[c].Individual_Tax= Individual_Tax;
	investorsDatabase[c].Individual_Fee = Individual_Fee;
	investorsDatabase[c].individualProfit =individualProfit;
	investorsDatabase[c].individualProfitPercentage = individualProfitPercentage;
	investorsDatabase[c].Individual_Account_Total=Individual_Account_Total;
	investorsDatabase[c].Fund_Allocation=Fund_Allocation;
	console.log(`Initial Investment ==> ${investorsDatabase[c].Initial_Investment}`);
	
}

// calculation for each Element
//new investor
const   sectionA1_Calculation=(c)=>{


Total_Individual_Return = investorsDatabase[c].Total_Individual_Return;
// console.log(`is ${investorsDatabase.length-1} > [${c}]`);
if (investorsDatabase.length-1> c){

// console.log("it is running");
// console.log(investorsDatabase[c]);
// console.log(Initial_Investment);

Initial_Investment = investorsDatabase[c].Initial_Investment ;
}

console.log("it didnt run");
console.log(investorsDatabase[c]);
console.log(Initial_Investment);


//sectionA_Calculation
Individual_Tax = taxCalculator(Total_Individual_Return);
Individual_Fee= (Total_Individual_Return-Individual_Tax)*0.3;
individualProfit=(Total_Individual_Return-Individual_Tax)*0.7;

individualProfitPercentage = Number(individualProfit/Initial_Investment);


Individual_Account_Total = Initial_Investment+Total_Individual_Return;

console.log(Individual_Fee);

}

//To prevent
const   sectionA2_Calculation=(c)=>{

Total_Individual_Return = investorsDatabase[c].Total_Individual_Return;
Initial_Investment = investorsDatabase[c].Initial_Investment ;

//sectionA_Calculation
Individual_Tax = taxCalculator(Total_Individual_Return);
Individual_Fee= (Total_Individual_Return-Individual_Tax)*0.3;
individualProfit=(Total_Individual_Return-Individual_Tax)*0.7;

individualProfitPercentage= Number((individualProfit/Initial_Investment));

Individual_Account_Total= Initial_Investment+Total_Individual_Return;
}


//sectionB_Calculation from Profits
const sectionB_Calculation=()=>{

Total_Fund_Initial_Investment=0;
for(let c=0; c<investorsDatabase.length;c++){
Total_Fund_Initial_Investment += investorsDatabase[c].Initial_Investment;
}

actualTotalFund = sum(Profits) + Total_Fund_Initial_Investment;

totalFund = Total_Fund_Profits+ Total_Fund_Initial_Investment;

console.log(Profits);

Total_Fund_Profits = sum(Profits);
console.log(Total_Fund_Profits);

investorsDatabase.Total_Individual_Return=0;
console.log(Fund_Allocation);

if(Profits.length>0 && areWeAdding_A_NewInvestor === false){

for(let c=0; c<investorsDatabase.length;c++){
	console.log(totalFund);
investorsDatabase[c].Fund_Allocation = (investorsDatabase[c].Initial_Investment+ investorsDatabase[c].Total_Individual_Return)/totalFund;
investorsDatabase[c].Total_Individual_Return += investorsDatabase[c].Fund_Allocation* Profits[Profits.length-1];
console.log(Profits[Profits.length-1]);
console.log(`Initial Investment = ${investorsDatabase[c].Initial_Investment} | Fund Allocation = ${investorsDatabase[c].Fund_Allocation} | Return = ${investorsDatabase[c].Total_Individual_Return}`)
	}	
}
  
}

//Formating the number to currency format
//formatType ==> is a string that has a currency or percent text
//formatType has to be a string to run
	const formatData =(NumberValue, formatType="currency")=>{

let currencyType =document.getElementsByClassName("currencyMenu")[0].value;
// console.log(formatType);
// console.log(currencyType);
		const formatter = new Intl.NumberFormat("en-US", {
			style:formatType,
			currency:currencyType,
			mimimumFractionFigits: 2
		})

		let Value = formatter.format(NumberValue);
		if (currencyType==="NGN"){

			Value = Value.substring(4);
			Value = `₦${Value}`;
		}
		return(Value);
	}


// Function to change inserted values to desired currency and format
const syncingCurrencyDatabase=(valueToBeFormatted,dataType)=>{
	currencyMenu = document.getElementsByClassName("currencyMenu")[0];

	let currencyDatabase
	//creating the currency Database

	if(dataType === "object"){
	//arranged according to the way they were declared 
	//arrangement-reference line 249
	currencyDatabase = [
	valueToBeFormatted.Name,
	valueToBeFormatted.Initial_Investment,
	valueToBeFormatted.Total_Individual_Return
	,valueToBeFormatted.Individual_Tax
	,valueToBeFormatted.Individual_Fee
	,valueToBeFormatted.individualProfit
	,valueToBeFormatted.individualProfitPercentage
	,valueToBeFormatted.Fund_Allocation
	,valueToBeFormatted.Individual_Account_Total];

}else{
	 currencyDatabase = valueToBeFormatted;
}
	//rate from USD to target currency
	let currencyFactor;

	//setting the currency rate to match target currency
	if (currencyMenu.value ==="USD"){
		currencyFactor= 1;

	}else if(currencyMenu.value ==="CAD"){

		currencyFactor = 1;
	}else{

		currencyFactor =1 ;
	}

	// console.log(valueToBeFormatted);

if(dataType==="object"){
	// console.log(currencyDatabase);

	//Converting the data to required currency and format
	currencyDatabase[1] = formatData(currencyDatabase[1]*currencyFactor);
	currencyDatabase[2] = formatData(currencyDatabase[2]*currencyFactor);
	currencyDatabase[3] = formatData(currencyDatabase[3]*currencyFactor);
	currencyDatabase[4] = formatData(currencyDatabase[4]*currencyFactor);
	currencyDatabase[5] = formatData(currencyDatabase[5]*currencyFactor);
	currencyDatabase[6] = formatData(currencyDatabase[6],"percent");
	currencyDatabase[7] = formatData(currencyDatabase[7], "percent");
	currencyDatabase[8] = formatData(currencyDatabase[8]*currencyFactor);

	}

	if(dataType==="single"){
		currencyDatabase = formatData(currencyDatabase*currencyFactor);
		// console.log(currencyDatabase);
	}

	return currencyDatabase;
}


//Function to reverse cuurency to Number Format
const currency_To_Number = (value)=>{

console.log(value);
	let separator = new Intl.NumberFormat().format(1111).replace(/1/g, '');
value = value.replace(new RegExp('\\' + separator, 'g'), '');

if (value.charAt(0) ==="-"){
	value = value.substring(1);

	if (value.charAt(0) ==="$" ||value.charAt(0) ==="₦"){
	value = value.substring(1);
	}
	if (value.charAt(0) ==="C"){
	value = value.substring(3);
 	}
	value = `-${value}`;
}

if (value.charAt(0) ==="$" ||value.charAt(0) ==="₦"){
	value = value.substring(1);
}

if (value.charAt(0) ==="C"){
	value = value.substring(3);	
 }

 return Number(value);
}


//Turning the profit column green/red
const turnGreenOrRed= ()=>{

let list_profitOrLoss= document.getElementsByClassName("list_profitOrLoss");
 
for(let c=0;c<list_profitOrLoss.length; c++){
// console.log(list_profitOrLoss[c].innerText);
 let value=list_profitOrLoss[c].innerText;
console.log(value);

value = currency_To_Number(value);

	if(value >0){
		list_profitOrLoss[c].classList.add("text-color-green");
		list_profitOrLoss[c].classList.remove("text-color-red");
		list_profitOrLoss[c].innerText = `+${list_profitOrLoss[c].innerText}`;
	}else if (value<0){
		list_profitOrLoss[c].classList.remove("text-color-green");
		list_profitOrLoss[c].classList.add("text-color-red");
	}else if (value === 0){
		list_profitOrLoss[c].classList.remove("text-color-green");
		list_profitOrLoss[c].classList.remove("text-color-red");
		list_profitOrLoss[c].innerText = `+${list_profitOrLoss[c].innerText}`;
	}
	//Changing the color for percentage using the "account-%-gain" class
if (list_profitOrLoss[c].classList.contains("account-%-gain")){

	//if negative change color to red
	if(list_profitOrLoss[c].innerText.charAt(0)==="-"){
			list_profitOrLoss[c].classList.remove("text-color-green");
		list_profitOrLoss[c].classList.add("text-color-red");

		//if not red change color to green
	}else{
		list_profitOrLoss[c].classList.add("text-color-green");
		list_profitOrLoss[c].classList.remove("text-color-red");
		list_profitOrLoss[c].innerText = `+${list_profitOrLoss[c].innerText}`;
	}

}
}


}

turnGreenOrRed();



//Display Object Elements on the WebPage
//function creates a line and enters the dat from the investors database to each one
const displayElements=(Initial_Investment,areWeAdding_A_NewInvestor)=>{

//getting all the elenments with classname "list"
let list = document.getElementsByClassName("list");
const listLength = list.length;

//delete all all the existing elements with a "list" classname 
for (let c=listLength-1; c>=0; c--) {
	
	list[c].remove();
}

//calculation for all investorsDatabase Values
for (let c=investorsDatabase.length-1; c>=0; c--) {
// console.log(`Before Calculation ==> ${investorsDatabase[c]}`);
		//calculation function for all the values
			console.log(areWeAdding_A_NewInvestor);
		if(areWeAdding_A_NewInvestor === true){sectionA1_Calculation(c);}
		if(areWeAdding_A_NewInvestor === false){sectionA2_Calculation(c);}
		
		// console.log(`After Calculation ==> ${investorsDatabase[c]}`);

		//put the calculated values into the investorsDatabase
		setValuesIntoObjectElements(c);
		// console.log(`After Inserting values ==> ${investorsDatabase[c]}`);
	}

sectionB_Calculation();

//calculating section A again because we just got the individual return and fund allocation from section B
for (let c=investorsDatabase.length-1; c>=0; c--) {
// console.log(`Before Calculation ==> ${investorsDatabase[c]}`);
		//calculation function for all the values
			console.log(areWeAdding_A_NewInvestor);
		if(areWeAdding_A_NewInvestor === true){sectionA1_Calculation(c);}
		if(areWeAdding_A_NewInvestor === false){sectionA2_Calculation(c);}
		
		// console.log(`After Calculation ==> ${investorsDatabase[c]}`);

		//put the calculated values into the investorsDatabase
		setValuesIntoObjectElements(c);
		// console.log(`After Inserting values ==> ${investorsDatabase[c]}`);
	}


	//adding the div and li elements
	for (let c=0; c<investorsDatabase.length; c++) {
			
	//Investors Defined on the 3rd line of the code
	//create a div and add a class called list
	Investors[1].appendChild(document.createElement("div")).classList.add("list", "investorsGrid");

		list = document.getElementsByClassName("list")[c];

			for (let i=0; i<7;i++){
			list.appendChild(document.createElement("li"));
			}
		
		list.children[0].classList.add("list_Name","text-color-blue2", "center-align");
		list.children[1].classList.add("list_II");
		list.children[2].classList.add("list_totalReturn");
		list.children[3].classList.add("list_Tax");
		list.children[4].classList.add("list_Fee");
		list.children[5].classList.add("list_profitOrLoss");
		list.children[6].classList.add("list_change");


		//changing the investors Database values into required currency and format
    	 const values =  syncingCurrencyDatabase(investorsDatabase[c],"object");

		list.children[0].innerText =values[0]; //Name
		list.children[1].innerText=  values[1]; //initial Investment
		list.children[2].innerText =values[2];  //Total IndividualReturn 
		list.children[3].innerText= values[3]; //Individual Tax
		list.children[4].innerText =values[4];  //individual Fee 
		list.children[5].innerText =values[5];  //individual Profit
		list.children[6].innerText=  values[6]; //individual profit percent
	}
	// console.log("ran");

	const initialCapital = document.getElementsByClassName("Initial-Capital")[0];
		initialCapital.innerText = syncingCurrencyDatabase(Total_Fund_Initial_Investment,"single");

	const todaysProfit = document.getElementsByClassName("Todays-Profit")[0];
		todaysProfit.innerText = syncingCurrencyDatabase(Profits[Profits.length-1],"single");

	const netAccountValue = document.getElementsByClassName("netAccountValue")[0];
		netAccountValue.innerText = syncingCurrencyDatabase(actualTotalFund, "single");

	const account_$_gain =  document.getElementsByClassName("account-$-gain")[0];
		account_$_gain.innerText = syncingCurrencyDatabase(actualTotalFund-Total_Fund_Initial_Investment, "single");

	const account_p_gain =  document.getElementsByClassName("account-%-gain")[0];
	account_p_gain.innerText = formatData((actualTotalFund-Total_Fund_Initial_Investment)/Total_Fund_Initial_Investment, "percent");

	//turns the profits green and the losses red
	turnGreenOrRed();

}


//Function to add new Investor
	const addNewInvestor=()=>{
let investorName = document.getElementsByClassName("investorName")[0].value;

let investorInitialContributions= document.getElementsByClassName("investorInitialContributions")[0].value;

console.log(`${investorName} invests ${investorInitialContributions}` );


	 //Run code if the name/contribution input is not blank
	if(investorName !=="" || investorInitialContributions!==""){

		//Run if the contribution input only has numeric entries
if(Number(investorInitialContributions)	!== 0){
		
	Name =investorName;

	Initial_Investment= Number(investorInitialContributions);

		//making the two input display erase after button press 
	investorInitialContributions=0;
	investorName="";

			areWeAdding_A_NewInvestor = true;

		addObjectTo_investorsDatabase();
		displayElements(Initial_Investment,areWeAdding_A_NewInvestor);

		}else{
			alert("Only Numbers are allowed in the Contribution Input");
		investorInitialContributions="";
		investorName="";

		}}else{
			alert(`The Name or contribution input is blank \n Also the minimum investment is $1`);
			investorInitialContributions="";
			investorName="";
		}
	}



//Updating Profits
const addNewProfits=()=>{
	console.log("runs");
	let updateProfits = document.getElementsByClassName("updateProfits")[0].value;
	Profits[Profits.length]= Number(updateProfits);
	console.log(updateProfits);
	console.log(Profits);

	areWeAdding_A_NewInvestor = false;

	displayElements(0,areWeAdding_A_NewInvestor);
}



//selected Currency function to change img and number value
const selectedCurrency=(event)=>{
	const currencyImg =document.getElementsByClassName("currencyImg")[0];
	
	console.log(event.target.value);

if (event.target.value === "USD"){
	currencyImg.src = "Trading%20pictures%20for%20website/usd.png"

}
if (event.target.value  === "CAD"){
	currencyImg.src = "Trading%20pictures%20for%20website/cad.png"
}
if (event.target.value  === "NGN"){
	currencyImg.src = "Trading%20pictures%20for%20website/ngn.png"
}
}


//When you click on the add investor button in Admin Access, run the addNewInvestor Function
const button_Add_Investor = document.getElementsByClassName("Add_Investor")[0];
button_Add_Investor.addEventListener("click",addNewInvestor);

const button_Update_Profits = document.getElementsByClassName("Update_Profits")[0];
button_Update_Profits.addEventListener("click",addNewProfits);


//Defining currency variables
let currencyMenu = document.getElementsByClassName("currencyMenu")[0];

//calling the selectedCurrency function after selecting a currency
currencyMenu.addEventListener("change", selectedCurrency,false);

console.log(fx.convert(12, {from: "USD", to: "CAD"}));