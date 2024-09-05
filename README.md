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