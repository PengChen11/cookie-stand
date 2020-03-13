/* eslint-disable no-unused-vars */
/* eslint-disable indent */

// !!!!!!!!   PLEASE READ HEADCODE.JS  FILE FIRST !!!!!!!!

// refer function Show() to the head js file

// this is to make the table hide or show when click the button
var report2But = document.getElementById('report2But');
report2But.addEventListener('click', function() {
    show('report2');
});

var formBut = document.getElementById('formBut');
formBut.addEventListener('click', function() {
    show('addStoreForm');
});


// this is how we create the stores table

new CreateShop('Seattle',23,65,6.3,6,19).writeRow();
new CreateShop('Tokyo',3,24,1.2,6,19).writeRow();
new CreateShop('Dubai',11,38,3.7,6,19).writeRow();
new CreateShop('Paris',20,38,2.3,6,19).writeRow();
new CreateShop('Lima',2,16,4.6,6,19).writeRow();


//this is how we add new stores to the report table

var addStoreForm = document.getElementById('addStoreForm');
function addNewStore(event){
    event.preventDefault();
    var newName = String(event.target.location.value);
    var newMinCust = Number(event.target.minCust.value);
    var newMaxCust = Number(event.target.maxCust.value);
    var newAvgSale = Number(event.target.avgSale.value);
    console.log(newName,newMinCust,newMaxCust,newAvgSale);
    new CreateShop(newName,newMinCust,newMaxCust,newAvgSale,6,19).writeRow();
}
addStoreForm.addEventListener('submit', addNewStore);

