// ITS NOT FOR GOOD PRACTICE 
// const person: {
    //     name: string;
    //     age: number;
    // } ={
        //     name: 'bharathakumar',
        //     age: 23
        // };
        
        // console.log(person.name);

const person ={
    name: 'bharathakumar',
    age: 23,
    hobbies: ['Sports', 'Cooking']

    };

console.log(person);
    
for (const hobby of person.hobbies){
    console.log(hobby);
}

// String of array    
let favoriteActivities: string[] ;
favoriteActivities = ['Sports']
        
console.log(favoriteActivities);
        
//Array of numbers
let favoriteNumbers: number[] ;
favoriteNumbers = [1,2,3]
        
 console.log(favoriteNumbers);
