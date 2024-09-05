// Generics

function logNumber(arg: number) {
  console.log(arg);
  return arg;
}
function logString(arg: string) {
  console.log(arg);
  return arg;
}
function logArray(arg: any[]) {
  console.log(arg);
  return arg;
}

function logAnything<T>(arg: T): T {
  console.log(arg);
  return arg;
}

interface HasAge {
  age: number;
}

function getOldest<T extends HasAge>(peoples: T[]): T {
  return peoples.sort((a, b) => b.age - a.age)[0];
}

const peoples: HasAge[] = [{ age: 12 }, { age: 52 }, { age: 12 }, { age: 0 }];

interface Player {
    name : string;
    age: number;
}

const players:Player[] = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Manik",
    age: 25,
  },
  {
    name: "Roahul",
    age: 18,
  },
  {
    name: "jaitin",
    age: 50,
  },
];

getOldest(players);

logAnything(true);
logAnything([1, 2, 3]);



interface Product {
    id : number;
    title : string;
    description : string;
}





const fechData = async <T>(path:string):Promise<T[]> => {
    try{
        const response = await fetch(`https://dummyjson.com/${path}`)
        return response.json();
    }
    catch(err){
        console.log(err)
        return [];
    }
}

(async()=> {
   const products =  await fechData<Product>("products");
    console.log(products[0].title)
})()