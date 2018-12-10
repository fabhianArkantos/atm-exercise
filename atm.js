class Bill {
    constructor(value, quantity,imagePath){
        this.value = value;
        this.quantity = quantity;
        this.image = new Image();

        this.image.src = imagePath;
    }
}

var billsInATM = [
    fiftyDollars = new Bill(50, 3, "images/bill_50.png"),
    twentyDollars = new Bill(20, 2, "images/bill_20.png"),
    tenDollars = new Bill(10, 2, "images/bill_10.png")
];

var moneyToNeed = 110;
var billsToWithdraw = [];
var div = document.getElementById("result");

console.log(billsInATM);

for (const b of billsInATM) {
    var bills = 0;
    if (moneyToNeed > 0) {
        div = Math.floor(moneyToNeed / b.value);
        if (div > b.quantity) {
            bills = b.quantity;
        } else {
            bills = div;
        }
        billsToWithdraw.push(new Bill(b.value, bills, b.image.src));
        moneyToNeed = moneyToNeed -  (b.value * bills); 
    }
}

for (const bw of billsToWithdraw) {
    if (bw.quantity > 0) {
        for (var i = 0 ; i < bw.quantity ; i++){
            document.write("<img src="+ bw.image.src + "> </img>");
        }
    }
}