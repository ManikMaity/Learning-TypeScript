var num1 = 1;
function calculate(num1, num2) {
    return num1 + num2;
}
function getTotal(numbers) {
    var total = numbers.reduce(function (acc, value) { return acc + value; }, 0);
    return total;
}
var user = {
    firstName: "John",
    lastName: "Doe",
    role: "professor"
};
var user1 = {
    name: "Manik",
    age: 21,
    address: "main street"
};
function logIn(userData) {
    return userData;
}
var bankAcc = {
    accNumber: 65565565565,
    accountHolder: "Mnaik",
    balace: 4100,
    isActive: true,
    transaction: [{ payeeAccNumber: 54565644, payerAccNumber: 54454 }]
};
var book1 = {
    name: "Atomic Habit",
    price: 199
};
var ebook1 = {
    name: "Hallo",
    price: 400,
    fileSize: 4,
    fileType: "pdf"
};
function printID(id) {
    if (typeof id == "number") {
        return "".concat(id);
    }
    else {
        return id;
    }
}
console.log(printID("manik123"));
console.log(logIn(user1));
console.log(user.firstName);
console.log(getTotal([5, 6, 8, 7]));
console.log(calculate(num1, 5));
