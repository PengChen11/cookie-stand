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
            if (time < 12){
                resultArray.push(time + "am: " + cookieSold + " cookies ");
                cookieTotal = cookieTotal + cookieSold;
            } else if (time === 12){
                resultArray.push(time + "pm: " + cookieSold + " cookies ");
                cookieTotal = cookieTotal + cookieSold;
            } else if (time>12 && time <19){
                var newtime=time-12;
                resultArray.push(newtime + "pm: " + cookieSold + " cookies ");
                cookieTotal = cookieTotal + cookieSold;
            } else if (time === 19){
                resultArray.push( "7pm: " + cookieSold + " cookies ");
                cookieTotal = cookieTotal + cookieSold;
                resultArray.push('Total: ' + cookieTotal + 'cookies');
            }
        }
        return resultArray;
    },
}
