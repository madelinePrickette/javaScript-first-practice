console.log( 'js');

let bunnyCarrots = 10;

console.log( bunnyCarrots );

console.log( 'The amount of carrots this bunny ate was' , bunnyCarrots );

bunnyCarrots = 12;

console.log( 'The amount of carrots this bunny ate was' , bunnyCarrots );

bunnyCarrots = 'more carrots than yesterday.' ;

console.log( 'The amount of carrots this bunny ate was' , bunnyCarrots );



let plants = 12;
//bought 3 plants
plants = plants + 3;
//cats ate 2 plants
plants -= 2;
//bought 1 new plant
plants++;
//next day bought 5 new plants
plants+=5;
//cats eat 1 plant
plants--;
console.log( plants );



let motorcycles = 9;
let cars = 0;
let vehicles = motorcycles + cars;

console.log( 'bikes:' , motorcycles );
console.log( 'cars:' , cars );
console.log('total vehicles:' , vehicles );
console.log ( 'had to put soft tail in the garage' );

//decrement of 1 motorcycle
motorcycles--; //subtract 1 motorcycle from the variable
console.log( 'bikes:' , motorcycles );
vehicles = motorcycles + cars;
console.log('total vehicles:' , vehicles );

console.log( 'missed the bike so I bought 2 lambos' );
cars += 2;
console.log( 'bikes:' , motorcycles );
console.log( 'cars:', cars ); 
vehicles = motorcycles + cars;
console.log('total vehicles:' , vehicles );

console.log( 'wanted a Jetta, bought 1');
cars++;
console.log( 'sold 3 bikes');
motorcycles -= 3;
console.log( 'bikes:' , motorcycles );
console.log( 'cars:' , cars );
vehicles = motorcycles + cars;
console.log('total vehicles:' , vehicles );

console.log( 'got the soft tail out of the garage');
motorcycles++;
console.log( 'bikes:' , motorcycles );
console.log( 'cars:' , cars );
vehicles = motorcycles + cars;
console.log('total vehicles:' , vehicles );



//specifically string variables
console.log( 'js ');
let catName = 'Pants';
let catAge = 15;
console.log( catName );

//concatination with a comma only works in the console log
console.log( 'The name of my cat is' , catName );
console.log( 'The age of my cat is:', catAge );

//we can also concatinate with the + sign.
let sentence = 'This is the sentence about my cat named ' + catName;
console.log( sentence );

sentence = 'My cat is ' + catAge + ' years old.';
console.log( sentence );

//Another cat named Bello
catName = 'Bello';
catAge = 11;

sentence = 'Later on, a different one of my cats is ' + catAge + ' years old and is named ' + catName;
console.log( sentence );