class Bill {
    constructor(value, quantity){
        this.value = value;
        this.quantity = quantity;
    }
}

var billsInATM = [
    fiftyDollars = new Bill(50, 3),
    twentyDollars = new Bill(20, 2),
    tenDollars = new Bill(10, 2)
];

var moneyToNeed = 110;
var billsToWithdraw = [];

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
        billsToWithdraw.push(new Bill(b.value, bills));
        moneyToNeed = moneyToNeed -  (b.value * bills); 
    }
}

console.log(billsToWithdraw);