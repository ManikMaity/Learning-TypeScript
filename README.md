# TypeScript

## Why TypeScript 
- Avoid bugs in development
- increase developent speed
- Additional features
- In production TS convert to JS.


## Using typescript 
- Typescript use .ts file name
- Typescript have all the features of js above that have some extra feature.
- We can give type to variable like this
```ts
let num1:number = 1;
```
- Other types string, string[], number[], boolean.
- run ts file.
- convert ts file to js and then run
```
tsc app.ts
```
- it will make app.js file
- to diclair a array we can do like this 
- we have to define what the type of array item `number` and then `[]` to say its a array.
```ts
function getTotal (numbers:number[]){
    const total = numbers.reduce((acc, value) => acc + value, 0);
    return total;
}
```
- or we can do like this
```ts
function getTotal (numbers:Array<number>){
    const total = numbers.reduce((acc, value) => acc + value, 0);
    return total;
}
```
- It give auto completion for obj.

### Type Alyas - Creating custom type
- Its a naming convection that the First letter of custom type is capital.

```ts
type User = {
    name : String,
    age : number,
    address?: string
}
```

- Then we can use the type like this 
- Here address is optional so if we like we can remove address property in the obj.
```ts
const user1:User = {
    name : "Manik",
    age : 21,
    address : "main street"
}
```

- We can define the the return type of the fn like this
- here the return type is the custom type we made, we can also use `number`, `string` if we want.
```ts
function logIn(userData:User):User{
    return userData;
}
```
- Union - it like the or operator
- ID type value can be a string or number
```tsx
type ID = string | number;
```

### Extend 
- It helps to extend an interface.
- It helps in making another interface without copying same types.
```ts
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

```

- Extent funcnality dont work inside the type.
- And Interface only work with `objects` not premitive values.
```js
// interface name string; --> ❌

```

- If we make custom type using union and define type like string or number.
- Then use cant perform methods with the variable with our custom type it will give error
- So we have to do type validation first then string or numner methods will be available.

```ts
type Id = string | number;

function printID(id:Id):string{
    const upper = id.toUpperCase()
    return upper;
}
```

```ts
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
```

## Generics
- Generics with functions help make more generalized methods which more accurately represent the types used and returned.
```ts
function logAnything<T>(arg : T) : T {
    console.log(arg);
    return arg;
}
logAnything(true);
logAnything([1, 2, 3])
```
- In the above fn the type is generic so it will work with any type argument.

## Assert
- This will forcefully change the type of the return.
- This is not a good practice.
```js
getOldest(players) as Player;
```
- But we can make a generic fn for this to solve this.
```ts
function getOldest<T extends HasAge>(peoples: T[]): T {
  return peoples.sort((a, b) => b.age - a.age)[0];
}
```
- But we have to `T extends HasAge` to include the age property i it.
```ts
getOldest(players).name;
```
- now this have `name and age` propery, although we have not gave Player type in the fn, ts auto detect the Player type from `payers` arr argument we passed.

### Generics 
- Generics used when we dont know what type of data is comming. We know its an arary but dont know if that array is numbers array or string array.
- If we specify the function argument type like below if will give error when passed array of string 
```ts
function getFistElement(arr:number[]) :number {
    return arr[0];
}
// number array
const numbers:number[] = [1, 2, 3];
const firstNum = getFistElement(numbers)

// string array
const strings = ["manik", "maiyu", "suman"];
const firstString = getFistElement(strings); // - error
```
- we have to make a generic function which change the peramiter type according the argument type passed.
```ts
function getFistElement<ElementType>(arr:ElementType[]) :ElementType {
    return arr[0];
}
```
- Now it will take any type of arguments user pass and change the permiter and return type. Because ts is smart.

- But if ts cant recognise the type of the argument we can pass the argumant type ourself.

```ts
const firstString = getFistElement<string>(strings);
```

```ts
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
```