/* eslint-disable no-unused-vars */
/* eslint-disable indent */

var SeattleShop = {
    minCust : 23,
    maxCust : 65,
    avgSale : 6.3,
    result : function(){
        var time = 5;
        var resultArray =[];
        var cookieTotal = 0;
        for (var i=0; i < 14; i++){
            var cusNum = Math.floor(Math.random()* (this.maxCust-this.minCust)) + this.minCust;
            var cookieSold = Math.floor(this.avgSale*cusNum);
            time += 1;
            if (time <= 12){
                resultArray.push(time + 'am: ' + cookieSold + ' cookies ');
                cookieTotal = cookieTotal + cookieSold;
            } else if (time>=13 && time <19){
                var newtime=time-12;
                resultArray.push(newtime + 'pm: ' + cookieSold + ' cookies ');
                cookieTotal = cookieTotal + cookieSold;
            } else if (time === 19){
                resultArray.push( '7pm: ' + cookieSold + ' cookies ');
                cookieTotal = cookieTotal + cookieSold;
                resultArray.push('Total: ' + cookieTotal + 'cookies');
            }
        }
        return resultArray;
    },
};

function SeattleSales(){
    var SeattleArray = SeattleShop.result();
    for (var SeattleIndex = 0; SeattleIndex < SeattleArray.length; SeattleIndex++){
        var parentEl = document.getElementById('Seattle');
        var childEl = document.createElement('li');
        childEl.textContent = SeattleArray[SeattleIndex];
        parentEl.appendChild(childEl);
    }
}

var TokyoShop = {
    minCust : 3,
    maxCust : 24,
    avgSale : 1.2,
    result : function(){
        var time = 5;
        var resultArray =[];
        var cookieTotal = 0;
        for (var i=0; i < 14; i++){
            var cusNum = Math.floor(Math.random()* (this.maxCust-this.minCust)) + this.minCust;
            var cookieSold = Math.floor(this.avgSale*cusNum);
            time += 1;
            if (time <= 12){
                resultArray.push(time + 'am: ' + cookieSold + ' cookies ');
                cookieTotal = cookieTotal + cookieSold;
            } else if (time>=13 && time <19){
                var newtime=time-12;
                resultArray.push(newtime + 'pm: ' + cookieSold + ' cookies ');
                cookieTotal = cookieTotal + cookieSold;
            } else if (time === 19){
                resultArray.push( '7pm: ' + cookieSold + ' cookies ');
                cookieTotal = cookieTotal + cookieSold;
                resultArray.push('Total: ' + cookieTotal + 'cookies');
            }
        }
        return resultArray;
    },
};

function TokyoSales(){
    var TokyoArray = TokyoShop.result();
    for (var TokyoIndex = 0; TokyoIndex < TokyoArray.length; TokyoIndex++){
        var parentEl = document.getElementById('Tokyo');
        var childEl = document.createElement('li');
        childEl.textContent = TokyoArray[TokyoIndex];
        parentEl.appendChild(childEl);
    }
}


var DubaiShop = {
    minCust : 11,
    maxCust : 38,
    avgSale : 3.7,
    result : function(){
        var time = 5;
        var resultArray =[];
        var cookieTotal = 0;
        for (var i=0; i < 14; i++){
            var cusNum = Math.floor(Math.random()* (this.maxCust-this.minCust)) + this.minCust;
            var cookieSold = Math.floor(this.avgSale*cusNum);
            time += 1;
            if (time <= 12){
                resultArray.push(time + 'am: ' + cookieSold + ' cookies ');
                cookieTotal = cookieTotal + cookieSold;
            } else if (time>=13 && time <19){
                var newtime=time-12;
                resultArray.push(newtime + 'pm: ' + cookieSold + ' cookies ');
                cookieTotal = cookieTotal + cookieSold;
            } else if (time === 19){
                resultArray.push( '7pm: ' + cookieSold + ' cookies ');
                cookieTotal = cookieTotal + cookieSold;
                resultArray.push('Total: ' + cookieTotal + 'cookies');
            }
        }
        return resultArray;
    },
};

function DubaiSales(){
    var DubaiArray = DubaiShop.result();
    for (var DubaiIndex = 0; DubaiIndex < DubaiArray.length; DubaiIndex++){
        var parentEl = document.getElementById('Dubai');
        var childEl = document.createElement('li');
        childEl.textContent = DubaiArray[DubaiIndex];
        parentEl.appendChild(childEl);
    }
}


var ParisShop = {
    minCust : 20,
    maxCust : 38,
    avgSale : 2.3,
    result : function(){
        var time = 5;
        var resultArray =[];
        var cookieTotal = 0;
        for (var i=0; i < 14; i++){
            var cusNum = Math.floor(Math.random()* (this.maxCust-this.minCust)) + this.minCust;
            var cookieSold = Math.floor(this.avgSale*cusNum);
            time += 1;
            if (time <= 12){
                resultArray.push(time + 'am: ' + cookieSold + ' cookies ');
                cookieTotal = cookieTotal + cookieSold;
            } else if (time>=13 && time <19){
                var newtime=time-12;
                resultArray.push(newtime + 'pm: ' + cookieSold + ' cookies ');
                cookieTotal = cookieTotal + cookieSold;
            } else if (time === 19){
                resultArray.push( '7pm: ' + cookieSold + ' cookies ');
                cookieTotal = cookieTotal + cookieSold;
                resultArray.push('Total: ' + cookieTotal + 'cookies');
            }
        }
        return resultArray;
    },
};

function ParisSales(){
    var resultArray = TokyoShop.result();
    for (var Index = 0; Index < resultArray.length; Index++){
        var parentEl = document.getElementById('Paris');
        var childEl = document.createElement('li');
        childEl.textContent = resultArray[Index];
        parentEl.appendChild(childEl);
    }
}


var LimaShop = {
    minCust : 2,
    maxCust : 16,
    avgSale : 4.6,
    result : function(){
        var time = 5;
        var resultArray =[];
        var cookieTotal = 0;
        for (var i=0; i < 14; i++){
            var cusNum = Math.floor(Math.random()* (this.maxCust-this.minCust)) + this.minCust;
            var cookieSold = Math.floor(this.avgSale*cusNum);
            time += 1;
            if (time <= 12){
                resultArray.push(time + 'am: ' + cookieSold + ' cookies ');
                cookieTotal = cookieTotal + cookieSold;
            } else if (time>=13 && time <19){
                var newtime=time-12;
                resultArray.push(newtime + 'pm: ' + cookieSold + ' cookies ');
                cookieTotal = cookieTotal + cookieSold;
            } else if (time === 19){
                resultArray.push( '7pm: ' + cookieSold + ' cookies ');
                cookieTotal = cookieTotal + cookieSold;
                resultArray.push('Total: ' + cookieTotal + 'cookies');
            }
        }
        return resultArray;
    },
};

function LimaSales(){
    var resultArray = LimaShop.result();
    for (var Index = 0; Index < resultArray.length; Index++){
        var parentEl = document.getElementById('Lima');
        var childEl = document.createElement('li');
        childEl.textContent = resultArray[Index];
        parentEl.appendChild(childEl);
    }
}
