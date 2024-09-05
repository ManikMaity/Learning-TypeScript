let num1:number = 1;

function calculate (num1:number, num2:number){
    return num1 + num2;
}

function getTotal (numbers:Array<number>){
    const total = numbers.reduce((acc, value) => acc + value, 0);
    return total;
}

const user = {
    firstName : "John",
    lastName : "Doe",
    role : "professor"
};


// Type Alias - custom type
type User = {
    name : String,
    age : number,
    address : string
}

const user1:User = {
    name : "Manik",
    age : 21,
    address : "main street"
}

function logIn(userData:User):User{
    return userData;
}


// Union - it like the or operator
// ID type value can be a string or number
type ID = string | number;



// Iterfaces

interface Transaction {
    payerAccNumber : number;
    payeeAccNumber : number;
}


interface BankAcc {
    accNumber : number,
    accountHolder : string,
    balace : number,
    isActive : boolean,
    transaction?: Transaction[]

}

const bankAcc:BankAcc = {
    accNumber : 65565565565,
    accountHolder : "Mnaik",
    balace : 4100,
    isActive : true,
    transaction : [{payeeAccNumber : 54565644, payerAccNumber : 54454}]

}


// Extend interface

interface Book {
    name: string,
    price : number
}

interface Ebook extends Book{
    fileType : string,
    fileSize : number
}



const book1:Book = {
    name : "Atomic Habit",
    price : 199
}

const ebook1:Ebook = {
    name : "Hallo",
    price : 400,
    fileSize : 4,
    fileType : "pdf"
}


// Narrow way for union
type Id = string | number;
function printID(id:Id):string{
    if (typeof id == "number"){
        return `${id}`
    }
    else {
        return id;
    }
}
console.log(printID("manik123"));




console.log(logIn(user1))
console.log(user.firstName)
console.log(getTotal([5, 6, 8, 7]))
console.log(calculate(num1, 5))