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

// Here's how I defined the constructor using 1st method

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

// Here's is Jacob's way of define the constructor and use prototype to add method to the constructor
var CreateShopArray = [];

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
        this.getTotalHours = this.hours();
        var getSale = this.generateSales();
        //when ever run this feature, it returns an array, contains 14 ( based on hour of operation) random numbers
        this.getHourSale = getSale.hourlySale;
        this.getDailySale = getSale.dailySale;
        CreateShopArray.push(this);
    }

}

CreateShop.prototype.hours = function() {
    return this.closeHour - this.openHour;
};

CreateShop.prototype.generateSales = function(){
    var newHourSaleArray = [];
    var dailyCookieSold =0;
    for (var i=this.openHour; i<=this.closeHour; i++){
        var cusNum = Math.floor(Math.random()* (this.maxCust-this.minCust)) + this.minCust;
        var hourlyCookieSold = Math.ceil(this.avgSale*cusNum);
        newHourSaleArray.push(hourlyCookieSold);
        dailyCookieSold += hourlyCookieSold;
    }
    return {
        hourlySale: newHourSaleArray,
        dailySale: dailyCookieSold,
    };

};

CreateShop.prototype.writeRow = function (){

    var table = document.getElementById('report2Body');
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    CreateShop.prototype.addRow = function (){
        cell.textContent = this.name;
        table.appendChild(row);
        row.appendChild(cell);
    
        for (var sale =0; sale<=this.getTotalHours; sale++ ){
            cell = document.createElement('td');
            cell.textContent = this.getHourSale[sale];
            row.appendChild(cell);
        }
        cell = document.createElement('td');
        cell.textContent = this.getDailySale;
        row.appendChild(cell);
    
    
        table = document.getElementById('report2Body');
        row = document.createElement('tr');
        cell = document.createElement('td');
        cell.textContent = 'Total';
        table.appendChild(row);
        row.appendChild(cell);
    
        var allLocationSum = 0;
        for (var hour = 0; hour<= this.getTotalHours;hour++ ){
            var storeSum=0;
            for (var store=0; store<CreateShopArray.length;store++){
                storeSum += CreateShopArray[store].getHourSale[hour];
            }
            cell = document.createElement('td');
            cell.textContent = storeSum;
            row.appendChild(cell);
            allLocationSum+= storeSum;
        }
        cell = document.createElement('td');
        cell.textContent = allLocationSum;
        row.appendChild(cell);
    
    };
    if (CreateShopArray.length ===1){
        this.addRow();
    } else if (CreateShopArray.length > 1){
        table.lastChild.innerHTML = null;
        this.addRow();
    }
};
