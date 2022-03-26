# Understanding Typescript

## What is typescript
- TypeScript is a strongly typed, object oriented, compiled language. It was designed by Anders Hejlsberg (designer of C#) at Microsoft. TypeScript is both a language and a set of tools. TypeScript is a typed superset of JavaScript compiled to JavaScript. In other words, TypeScript is JavaScript plus some additional features.

## core Types
- number - it can be integer, floating points or negative numbers all comes under numbers. 
- string - any value in quotes are string value typescript also support " double quotes " , ' single quotes ' ,  backtick .
- boolean - true or false.

### Working with numbers, strings and boolens

```
 function add(n1: number, n2: number, showResult: boolean, pharse: string){
    
    const result = n1 + n2;
    if(showResult){
        console.log(pharse + result);
    }else{

       return result;
    }
}

const number1 = 5;
const number2 = 2.5;
const printResult = true;
const resultPharse = 'Result is : '

add(number1, number2, printResult, resultPharse);
```
### Objects in Typescript

```
const person ={
    name: 'bharathakumar',
    age: 23
};
```
This would be the type of such an object:
```
{
  name : string;
  age : number;
  
 }
 ```


### Nested Objects & Types
Of course object types can also be created for nested objects.

Let's say you have this JavaScript object:

```
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
```
This would be the type of such an object:
```
{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
```
So you have an object type in an object type so to say.

### Array in typescript
```
const person ={
    name: 'bharathakumar',
    age: 23,
    hobbies: ['Sports', 'Cooking']

    };

console.log(person);

for (const hobby of person.hobbies){
    console.log(hobby);
}
```
```
// String of array    
let favoriteActivities: string[] ;
favoriteActivities = ['Sports']
        
console.log(favoriteActivities);
        
//Array of numbers
let favoriteNumbers: number[] ;
favoriteNumbers = [1,2,3]
        
 console.log(favoriteNumbers);
```
