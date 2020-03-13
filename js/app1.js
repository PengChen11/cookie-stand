/* eslint-disable indent */

var clickreportBut = document.getElementById('reportBut');
clickreportBut.addEventListener('click', function() {
    show('report');
});



// the following 3 globle variable is defined for future use
// totalDailySales is the array will contain 5 arrays generated when every you call the newStoreReport function
// openTime and closeTime was assigned null as of right now, will be assign value when calling newStoreReport function
// purpose of this is to determine how many time we will loop when calling dailySales function
var totalDailySales = [];
var openTime = '';
var closeTime = '';
var storeArray =[];

// this is the main function will generate the content of report table
function newStoreReport (name, minCust, maxCust, avgSale, openHour, closeHour){
    // store will create a new object when every this is called with premiters
     var store = new CreateShop1(name, minCust, maxCust, avgSale, openHour, closeHour);
     //these new objects will be stored inside Array storeArray
     storeArray.push(store);
    // the fullowing saleArray is very important. it has to be defined, or, when ever you call
    // storeName.getHourSale() you will get new sales numbers
    var saleArray = store.getHourSale();
    var parentEl = document.getElementById(store.name);
    var storeEl = document.createElement('td');
    // the following step is to push the 1st array contains 1st store hourly sales data into the totalDailySales array
    totalDailySales.push(saleArray);
    // the following step defines open and close time for function DailySales. 
    // but you can hard code it for now
    openTime = store.openHour;
    closeTime = store.closeHour;
    // next two steps write store names to the 1st collom of table
    storeEl.textContent = store.name;
    parentEl.appendChild(storeEl);
    // the loop write all the hourly sales details into the row
    for (var i=0; i <= store.closeHour-store.openHour; i++){
        var tableEl = document.createElement('td');
        tableEl.textContent = saleArray[i];
        parentEl.appendChild(tableEl);
    }
    // following is my way of adding daily totals
    var saleSum = 0;
    var sumEl = document.createElement('td');
    for (var a=0; a<saleArray.length; a++){
        saleSum+=saleArray[a];
    }
    sumEl.textContent = saleSum;
    parentEl.appendChild(sumEl);
}
console.log(storeArray);


// this function is to calculate the hourly sale date for all locations, and write it on the very bottom of table
function dailySales (){
    var parentEl = document.getElementById('Total');
    var totalEl = document.createElement('td');
    var allLocation = 0;
    totalEl.textContent = 'Total';
    parentEl.appendChild(totalEl);
    for (var b=0; b<= closeTime-openTime;b++){
        var totalNumEl = document.createElement('td');
        var sumDaily = totalDailySales[0][b] + totalDailySales[1][b] + totalDailySales[2][b] +totalDailySales[3][b] + totalDailySales[4][b];
        totalNumEl.textContent = sumDaily;
        parentEl.appendChild(totalNumEl);
        allLocation += sumDaily;
    }
    var writeAllLocation = document.createElement('td');
    writeAllLocation.textContent = allLocation;
    parentEl.appendChild(writeAllLocation);

}
