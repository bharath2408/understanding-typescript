# Understanding Typescript

## What is typescript
- TypeScript is a strongly typed, object oriented, compiled language. It was designed by Anders Hejlsberg (designer of C#) at Microsoft. TypeScript is both a language and a set of tools. TypeScript is a typed superset of JavaScript compiled to JavaScript. In other words, TypeScript is JavaScript plus some additional features.

### Working with numbers, strings and boolens

> function add(n1: number, n2: number, showResult: boolean, pharse: string){
>    
>    const result = n1 + n2;
>    if(showResult){
>        console.log(pharse + result);
>    }else{
>
>       return result;
>    }
>}
>
>const number1 = 5;
>const number2 = 2.5;
>const printResult = true;
>const resultPharse = 'Result is : '
>
>add(number1, number2, printResult, resultPharse);

