function getFistElement<ElementType>(arr:ElementType[]) :ElementType {
    return arr[0];
}
// number array
const numbers:number[] = [1, 2, 3];
const firstNum = getFistElement(numbers)

// string array
const strings = ["manik", "maiyu", "suman"];
const firstString = getFistElement<string>(strings);

console.log(firstString);
console.log(firstNum);




type ApiResponse<Data> = {
    data : Data,
    age : number
}

const respose : ApiResponse<{name : string; Address : string}> = {
    data : {
        name : "Mnaik",
        Address : "Kolkata"
    },
    age : 21
}