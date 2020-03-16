/* eslint-disable no-unused-vars */
/* eslint-disable indent */

//!!!!!!  READ THIS FIRST  !!!!!!!!

// THIS is the golbal head code for JS. it was placed in the <head> of sales.html.

// this is the function to the button, when click, show the report table, click again, hide the report
function show(ElementID) {
    var x = document.getElementById(ElementID);
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
}
// Here's is Jacob's way of define the constructor and use prototype to add method to the constructor
// I did couple of modification:
// I got rid of the hour veriable. I let the consturctor take property as store open hour and close hour, do the math to find out the store hours.
var CreateShopArray = [];

class CreateShop {
    // this constructor defines properties, but as of right now, you can hard code the openHour and closeHour or the store hours
    // I do it in this way for future reference
    constructor(name, minCust, maxCust, avgSale, openHour, closeHour) {
        this.name = name;
        this.minCust = minCust;
        this.maxCust = maxCust;
        this.avgSale = avgSale;
        this.openHour = openHour;
        this.closeHour = closeHour;
        this.getTotalHours = this.hours(); // this is my way of calculating the store hours
        var getSale = this.generateSales(); // this is to use prototype to get the random hourly sales number, and return two properties
        //this getHourSale property contains an array, contains 14 ( based on hour of operation) random numbers
        this.getHourSale = getSale.hourlySale;
        this.getDailySale = getSale.dailySale; // this property contains the total sales sum of the day
        CreateShopArray.push(this); // stores the new object in the array
    }

}

CreateShop.prototype.hours = function() {
    return this.closeHour - this.openHour;
};

CreateShop.prototype.generateSales = function(){
    var newHourSaleArray = [];
    var dailyCookieSold =0;
    for (var i=this.openHour; i<=this.closeHour; i++){
        var cusNum = Math.floor(Math.random()* (this.maxCust+1-this.minCust)) + this.minCust;
        var hourlyCookieSold = Math.ceil(this.avgSale*cusNum);
        newHourSaleArray.push(hourlyCookieSold);
        dailyCookieSold += hourlyCookieSold;
    }
    return {
        hourlySale: newHourSaleArray,
        dailySale: dailyCookieSold,
    };

};

// this is the part I heavly modified Jacob's code, to combine writeRow function with wireLastRow together
// I've put one prototype inside another one, just to run it based on different conditons

// reason why I do it?  Everytime I add a new store to the system, it will automaticlly move down the table and update the "total" row

CreateShop.prototype.writeRow = function (){
    // here's the var to start with
    var table = document.getElementById('report2Body');
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    // here's another prototype I use it as a function inside the wirteRow function
    // this function basically generate the whole thing whenever you call addRow()
    // whole thing include to do all the math and put everytying in a row, and add the total row at the very bottom
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
    // this is the part we need to find out how many stores are there. if there is only one store, I still want it to show the "Total" row at the bottom
    // this if condition has to be here after that addRow() prototype. otherwise it won't work

    if (CreateShopArray.length ===1){
        this.addRow();
    // this is when there's more than one store in the system and we need to get rid of the "total" row created by addRow(), then put the new row, do the "total" Row again
    } else if (CreateShopArray.length > 1){
        table.lastChild.remove();
        this.addRow();
    }
};


