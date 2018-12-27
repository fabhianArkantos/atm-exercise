class Bill {

	constructor(value, quantity, imagePath) {
		this.value = value;
		this.quantity = quantity;
		this.image = new Image(150, 82);

		this.image.src = imagePath;
	}

}

var billsInATM = [
	fiftyDollars = new Bill(50, 3, "images/bill_50.png"),
	twentyDollars = new Bill(20, 2, "images/bill_20.png"),
	tenDollars = new Bill(10, 2, "images/bill_10.png")
];

var moneyInATM = 0;

for (const b of billsInATM) {
	moneyInATM += b.value * b.quantity;
}

var divResult = document.getElementById("result");
var sendButton = document.getElementById("send");
sendButton.addEventListener("click",clickSendButton);

function clickSendButton(){
	var moneyToNeed = document.getElementById("money").value;
	var billsToWithdraw;
	if (moneyToNeed > moneyInATM) {
		divResult.prepend("No hay suficiente dinero");
	}else{
		billsToWithdraw = withdraw(moneyToNeed);
		drawImage(billsToWithdraw);
	}
	
}

function withdraw(moneyToNeed) {
	var billsToWithdraw = [];
	for (const b of billsInATM) {
		var bills = 0;
		if (moneyToNeed > 0) {
			var division = Math.floor(moneyToNeed / b.value);
			if (division > b.quantity) {
				bills = b.quantity;
			} else {
				bills = division;
			}
			billsToWithdraw.push(new Bill(b.value, bills, b.image.src));
			moneyToNeed = moneyToNeed - (b.value * bills);
		}
	}
	return billsToWithdraw;
}

function drawImage(billsToWithdraw) {
	var image;
	for (const bw of billsToWithdraw) {
		if (bw.quantity > 0) {
			for (var i = 0; i < bw.quantity; i++) {
				image = new Image(bw.image.width);
				image.src = bw.image.src;
				divResult.appendChild(image);
			}
		}
	}
}