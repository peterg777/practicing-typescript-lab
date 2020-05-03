console.log('Peters ks lab');
 

 let firstName = 'Peter';
 let lastName = 'Guzzardo';
 // my name
 console.log(firstName + ' ' + lastName);

 const states = ["50"]; 
 //number of states

 console.log(states);
 // simple arithmatic
 let a = 5 + 4;
 console.log(a);
 
sayHello(); 

function sayHello() {
    alert('Hello World');

}
   
checkAge('Daniel', '19');

function checkAge(name, age) {
    if (age < 21){
    alert('Sorry + Daniel ', 'you aren\t old enough to view this page!');
}

    

}
let charles = {
    name: 'charles',
    age: 21

};
let abby = {
    name: 'abby' ,
};
let james = {
    name: 'james',
    age: 18

};
let john = {
    name: 'james',
    age: 17
};
checkAge(charles.name, charles.age);
checkAge(abby.name, abby.age);
checkAge(james.name, james.age);
checkAge(john.name, john.age);

// Favorite Vegetables
let vegetables = ['Potatoes', 'Onions', 'Carrots',]
for (let i = 0; i == vegetables.length; i++) {
    console.log(vegetables[i]);
}


let musicians = [
    {
        name: 'Alex',
        age: '66'
    },
    {
        name: 'Eddie',
        age: '65'
    },
    {
        name: 'Wolfgang',
        age: '19'
    },
    {
        name: 'David',
        age: '15'
    },
    {
        name: 'Michael',
        age: '64'
    }
];

for (let i = 0; i < musicians.length; i++) {
    checkAge(musicians[i].name, musicians[i].age);

}

//last part of lab

function getLength(drums) {
    return drums.length;
    
}

let length = getLength('Hello world');

if (length % 2===0) {
    console.log('The World is Nice and Even!');

} else {
    console.log('The World is an Odd Place');
}
