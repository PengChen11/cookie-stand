/* eslint-disable no-unused-vars */
/* eslint-disable indent */
// refer function Show() to the head js file

var clickreport2But = document.getElementById('report2But');
clickreport2But.addEventListener('click', function() {
    show('report2');
});


var SeattleShop = new CreateShop('Seattle',23,65,6.3,6,19);
SeattleShop.writeRow();
var TokyoShop = new CreateShop('Tokyo',3,24,1.2,6,19);
TokyoShop.writeRow();
var DubaiShop = new CreateShop('Dubai',11,38,3.7,6,19);
DubaiShop.writeRow();
var ParisShop = new CreateShop('Paris',20,38,2.3,6,19);
ParisShop.writeRow();
var LimaShop = new CreateShop('Lima',2,16,4.6,6,19);
LimaShop.writeRow();
var DadaShop = new CreateShop('Dada',2,16,4.6,6,19);
DadaShop.writeRow();

