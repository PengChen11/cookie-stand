/* eslint-disable no-unused-vars */
/* eslint-disable indent */
// this is the function to the button, when click, show the report table, click again, hide the report
function show(ElementID) {
    var x = document.getElementById(ElementID);
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
}

// Here's how I defined the constructor

class CreateShop1 {
    // this constructor defines 6 properties, but as of right now, you can hard code the openHour and closeHour
    // I do it in this way for future reference
    constructor(name, minCust, maxCust, avgSale, openHour, closeHour) {
        this.name = name,
        this.minCust = minCust,
        this.maxCust = maxCust,
        this.avgSale = avgSale,
        this.openHour = openHour,
        this.closeHour = closeHour,
        //you proberbly don't need the getStoreHour feature yet
        this.getStoreHour = function(){
            var reportHourArray = [];
            for (var i=this.openHour; i<=this.closeHour; i++){
                reportHourArray.push(i);
            }
            return reportHourArray;
        },
        //when ever run this feature, it returns an array, contains 14 ( based on hour of operation) random numbers
        this.getHourSale = function (){
            var newHourSaleArray = [];
            for (var i=this.openHour; i<=this.closeHour; i++){
                var cusNum = Math.floor(Math.random()* (this.maxCust-this.minCust)) + this.minCust;
                var cookieSold = Math.floor(this.avgSale*cusNum);
                newHourSaleArray.push(cookieSold);
            }
            return newHourSaleArray;
        };
    }
}

// the following 3 globle variable is defined for future use
// totalDailySales is the array will contain 5 arrays generated when every you call the newStoreReport function
// openTime and closeTime was assigned null as of right now, will be assign value when calling newStoreReport function
// purpose of this is to determine how many time we will loop when calling dailySales function
var totalDailySales = [];
var openTime = '';
var closeTime = '';
// var SeattleShop;
// var TokyoShop;
// var DubaiShop;
// var ParisShop;
// var LimaShop;
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

// function newStoreReport (object,name, minCust, maxCust, avgSale, openHour, closeHour){
//     // storeName will create a new object when every this is called with premiters
//      object = new CreateShop(name, minCust, maxCust, avgSale, openHour, closeHour);
//     // the fullowing saleArray is very important. it has to be defined, or, when ever you call
//     // storeName.getHourSale() you will get new sales numbers
//     var saleArray = object.getHourSale();
//     var parentEl = document.getElementById(object.name);
//     var storeEl = document.createElement('td');
//     // the following step is to push the 1st array contains 1st store hourly sales data into the totalDailySales array
//     totalDailySales.push(saleArray);
//     // the following step defines open and close time for function DailySales. 
//     // but you can hard code it for now
//     openTime = object.openHour;
//     closeTime = object.closeHour;
//     // next two steps write store names to the 1st collom of table
//     storeEl.textContent = object.name;
//     parentEl.appendChild(storeEl);
//     // the loop write all the hourly sales details into the row
//     for (var i=0; i <= object.closeHour-object.openHour; i++){
//         var tableEl = document.createElement('td');
//         tableEl.textContent = saleArray[i];
//         parentEl.appendChild(tableEl);
//     }
//     // following is my way of adding daily totals
//     var saleSum = 0;
//     var sumEl = document.createElement('td');
//     for (var a=0; a<saleArray.length; a++){
//         saleSum+=saleArray[a];
//     }
//     sumEl.textContent = saleSum;
//     parentEl.appendChild(sumEl);
//     console.log(object);
// }

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

// var SeattleShop = {
//     name : 'Seattle',
//     minCust : 23,
//     maxCust : 65,
//     avgSale : 6.3,
//     openHour : 6,
//     closeHour : 19,
//     result : function(){
//         var time = this.openHour;
//         var resultArray =[];
//         var cookieTotal = 0;
//         for (var i=0; i <= (this.closeHour-this.openHour); i++){
//             var cusNum = Math.floor(Math.random()* (this.maxCust-this.minCust)) + this.minCust;
//             var cookieSold = Math.floor(this.avgSale*cusNum);
//             if (time <= 12){
//                 resultArray.push(time + 'am: ' + cookieSold + ' cookies ');
//                 cookieTotal = cookieTotal + cookieSold;
//             } else if (time>=13 && time <this.closeHour){
//                 var newtime=time-12;
//                 resultArray.push(newtime + 'pm: ' + cookieSold + ' cookies ');
//                 cookieTotal = cookieTotal + cookieSold;
//             } else if (time === this.closeHour){
//                 var closeTime = time-12;
//                 resultArray.push( closeTime + 'pm: ' + cookieSold + ' cookies ');
//                 cookieTotal = cookieTotal + cookieSold;
//                 resultArray.push('Total: ' + cookieTotal + 'cookies');
//             }
//             time += 1;
//         }
//         return resultArray;
//     },
// };

// function SeattleSales(){
//     var SeattleArray = SeattleShop.result();
//     for (var SeattleIndex = 0; SeattleIndex < SeattleArray.length; SeattleIndex++){
//         var parentEl = document.getElementById('SeattleReport');
//         var childEl = document.createElement('li');
//         childEl.textContent = SeattleArray[SeattleIndex];
//         parentEl.appendChild(childEl);
//     }
// }

// var TokyoShop = {
//     name: 'Tokyo',
//     minCust : 3,
//     maxCust : 24,
//     avgSale : 1.2,
//     openHour : 6,
//     closeHour : 19,
//     result : function(){
//         var time = this.openHour;
//         var resultArray =[];
//         var cookieTotal = 0;
//         for (var i=0; i <= (this.closeHour-this.openHour); i++){
//             var cusNum = Math.floor(Math.random()* (this.maxCust-this.minCust)) + this.minCust;
//             var cookieSold = Math.floor(this.avgSale*cusNum);
//             if (time <= 12){
//                 resultArray.push(time + 'am: ' + cookieSold + ' cookies ');
//                 cookieTotal = cookieTotal + cookieSold;
//             } else if (time>=13 && time < this.closeHour){
//                 var newtime=time-12;
//                 resultArray.push(newtime + 'pm: ' + cookieSold + ' cookies ');
//                 cookieTotal = cookieTotal + cookieSold;
//             } else if (time === this.closeHour){
//                 var closeTime = time-12;
//                 resultArray.push( closeTime + 'pm: ' + cookieSold + ' cookies ');
//                 cookieTotal = cookieTotal + cookieSold;
//                 resultArray.push('Total: ' + cookieTotal + 'cookies');
//             }
//             time += 1;
//         }
//         return resultArray;
//     },
// };

// function TokyoSales(){
//     var TokyoArray = TokyoShop.result();
//     for (var TokyoIndex = 0; TokyoIndex < TokyoArray.length; TokyoIndex++){
//         var parentEl = document.getElementById('TokyoReport');
//         var childEl = document.createElement('li');
//         childEl.textContent = TokyoArray[TokyoIndex];
//         parentEl.appendChild(childEl);
//     }

// }


// var DubaiShop = {
//     name : 'Dubai',
//     minCust : 11,
//     maxCust : 38,
//     avgSale : 3.7,
//     openHour : 6,
//     closeHour : 19,
//     result : function(){
//         var time = this.openHour;
//         var resultArray =[];
//         var cookieTotal = 0;
//         for (var i=0; i <= (this.closeHour-this.openHour); i++){
//             var cusNum = Math.floor(Math.random()* (this.maxCust-this.minCust)) + this.minCust;
//             var cookieSold = Math.floor(this.avgSale*cusNum);
//             if (time <= 12){
//                 resultArray.push(time + 'am: ' + cookieSold + ' cookies ');
//                 cookieTotal = cookieTotal + cookieSold;
//             } else if (time>=13 && time < this.closeHour){
//                 var newtime=time-12;
//                 resultArray.push(newtime + 'pm: ' + cookieSold + ' cookies ');
//                 cookieTotal = cookieTotal + cookieSold;
//             } else if (time === this.closeHour){
//                 var closeTime = time-12;
//                 resultArray.push( closeTime + 'pm: ' + cookieSold + ' cookies ');
//                 cookieTotal = cookieTotal + cookieSold;
//                 resultArray.push('Total: ' + cookieTotal + 'cookies');
//             }
//             time += 1;
//         }
//         return resultArray;
//     },
// };

// function DubaiSales(){
//     var DubaiArray = DubaiShop.result();
//     for (var DubaiIndex = 0; DubaiIndex < DubaiArray.length; DubaiIndex++){
//         var parentEl = document.getElementById('DubaiReport');
//         var childEl = document.createElement('li');
//         childEl.textContent = DubaiArray[DubaiIndex];
//         parentEl.appendChild(childEl);
//     }

// }


// var ParisShop = {
//     name : 'Paris',
//     minCust : 20,
//     maxCust : 38,
//     avgSale : 2.3,
//     openHour : 6,
//     closeHour : 19,
//     result : function(){
//         var time = this.openHour;
//         var resultArray =[];
//         var cookieTotal = 0;
//         for (var i=0; i <= (this.closeHour-this.openHour); i++){
//             var cusNum = Math.floor(Math.random()* (this.maxCust-this.minCust)) + this.minCust;
//             var cookieSold = Math.floor(this.avgSale*cusNum);
//             if (time <= 12){
//                 resultArray.push(time + 'am: ' + cookieSold + ' cookies ');
//                 cookieTotal = cookieTotal + cookieSold;
//             } else if (time>=13 && time < this.closeHour){
//                 var newtime=time-12;
//                 resultArray.push(newtime + 'pm: ' + cookieSold + ' cookies ');
//                 cookieTotal = cookieTotal + cookieSold;
//             } else if (time === this.closeHour){
//                 var closeTime = time-12;
//                 resultArray.push( closeTime + 'pm: ' + cookieSold + ' cookies ');
//                 cookieTotal = cookieTotal + cookieSold;
//                 resultArray.push('Total: ' + cookieTotal + 'cookies');
//             }
//             time += 1;
//         }
//         return resultArray;
//     },
// };

// function ParisSales(){
//     var resultArray = TokyoShop.result();
//     for (var Index = 0; Index < resultArray.length; Index++){
//         var parentEl = document.getElementById('ParisReport');
//         var childEl = document.createElement('li');
//         childEl.textContent = resultArray[Index];
//         parentEl.appendChild(childEl);
//     }
// }


// var LimaShop = {
//     name: 'Lima',
//     minCust : 2,
//     maxCust : 16,
//     avgSale : 4.6,
//     openHour : 6,
//     closeHour : 19,
//     result : function(){
//         var time = this.openHour;
//         var resultArray =[];
//         var cookieTotal = 0;
//         for (var i=0; i <= (this.closeHour-this.openHour); i++){
//             var cusNum = Math.floor(Math.random()* (this.maxCust-this.minCust)) + this.minCust;
//             var cookieSold = Math.floor(this.avgSale*cusNum);
//             if (time <= 12){
//                 resultArray.push(time + 'am: ' + cookieSold + ' cookies ');
//                 cookieTotal = cookieTotal + cookieSold;
//             } else if (time>=13 && time < this.closeHour){
//                 var newtime=time-12;
//                 resultArray.push(newtime + 'pm: ' + cookieSold + ' cookies ');
//                 cookieTotal = cookieTotal + cookieSold;
//             } else if (time === this.closeHour){
//                 var closeTime = time-12;
//                 resultArray.push( closeTime + 'pm: ' + cookieSold + ' cookies ');
//                 cookieTotal = cookieTotal + cookieSold;
//                 resultArray.push('Total: ' + cookieTotal + 'cookies');
//             }
//             time += 1;
//         }
//         return resultArray;
//     },
// };

// function LimaSales(){
//     var resultArray = LimaShop.result();
//     for (var Index = 0; Index < resultArray.length; Index++){
//         var parentEl = document.getElementById('LimaReport');
//         var childEl = document.createElement('li');
//         childEl.textContent = resultArray[Index];
//         parentEl.appendChild(childEl);
//     }
// }
