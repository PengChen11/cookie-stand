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

class CreateShop {
    // this constructor defines 6 properties, but as of right now, you can hard code the openHour and closeHour
    // I do it in this way for future reference
    constructor(name, minCust, maxCust, avgSale, openHour, closeHour) {
        this.name = name;
        this.minCust = minCust;
        this.maxCust = maxCust;
        this.avgSale = avgSale;
        this.openHour = openHour;
        this.closeHour = closeHour;
        var getSale = this.generateSales();
        //when ever run this feature, it returns an array, contains 14 ( based on hour of operation) random numbers
        this.getHourSale = getSale.hourlySale;
        this.getDailySale = getSale.dailySale;
    }

}

CreateShop.prototype.hours = this.closeHour - this.openHour;

CreateShop.prototype.generateSales = function(){
    var newHourSaleArray = [];
    var newDailySaleArray = [];
    var dailyCookieSold =0;
    for (var i=this.openHour; i<=this.closeHour; i++){
        var cusNum = Math.floor(Math.random()* (this.maxCust-this.minCust)) + this.minCust;
        var hourlyCookieSold = Math.ceil(this.avgSale*cusNum);
        newHourSaleArray.push(hourlyCookieSold);
        dailyCookieSold += hourlyCookieSold;
        newDailySaleArray.push(dailyCookieSold);
    }
    return {
        hourlySale: newHourSaleArray,
        dailySale: newDailySaleArray,
    };

};



// the following 3 globle variable is defined for future use
// totalDailySales is the array will contain 5 arrays generated when every you call the newStoreReport function
// openTime and closeTime was assigned null as of right now, will be assign value when calling newStoreReport function
// purpose of this is to determine how many time we will loop when calling dailySales function
var totalDailySales = [];
var openTime = '';
var closeTime = '';
var storeArray = [];

var SeattleShop = new CreateShop('Seattle',23,65,6.3,6,19);
// storeArray.push(SeattleShop);
// totalDailySales.push(SeattleShop.getHourSale());
// var TokyoShop = new CreateShop('Tokyo',3,24,1.2,6,19);
// storeArray.push(TokyoShop);
// totalDailySales.push(TokyoShop.getHourSale());
// var DubaiShop = new CreateShop('Dubai',11,38,3.7,6,19);
// storeArray.push(DubaiShop);
// totalDailySales.push(DubaiShop.getHourSale());
// var ParisShop = new CreateShop('Paris',20,38,2.3,6,19);
// storeArray.push(ParisShop);
// totalDailySales.push(ParisShop.getHourSale());
// var LimaShop = new CreateShop('Lima',2,16,4.6,6,19);
// storeArray.push(LimaShop);
// totalDailySales.push(LimaShop.getHourSale());

// function report(){
//     for (var i=0; i<storeArray.length;i++){
//         var tableEL = document.getElementById('table2body');
//         var tdEl = document.createElement('td');
//         tdEl.textContent = storeArray[i].name;
//         tableEL.appendChild(tdEl);
//         for (var a=0 ; a< )
//     }
// }
